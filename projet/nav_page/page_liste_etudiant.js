var container = document.getElementById("container");
      var student = document.getElementById("student");
      var resp = document.getElementById("response"); 
      var clone = student.cloneNode(true);

      
   

      var request = new XMLHttpRequest();
            request.open("GET", "http://localhost/projet/php/requests.php?etudiants=all", true);
            request.onreadystatechange = function () {
                if (request.readyState == 4) {
                    if (request.status == 200) {
                         try {
                             var responseData = JSON.parse(request.responseText);
                            
                              responseData.forEach(function (student) {
                                
                                clone.querySelector("#nom").textContent = student['nom'];
                                clone.querySelector("#prenom").textContent = student['prenom'];
                                clone.querySelector("#groupe").textContent = student['groupe'];
                                clone.querySelector("#email").textContent = student['email'];

                                clone.style.display = '';
                                container.appendChild(clone.cloneNode(true));
                              });
                      } catch (error) {
                        alert("Error parsing JSON: "+ error);
                      }
                  } else {
                        alert('Error: ' + request.status);
        }
    }
}
request.send();