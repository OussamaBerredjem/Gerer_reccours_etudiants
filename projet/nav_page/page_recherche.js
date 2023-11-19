var container = document.getElementById("container");
var student = document.getElementById("student");
var select = document.getElementById("select");
var btn = document.getElementById("button-search");
var clone = student.cloneNode(true);
var search = document.getElementById("search");
var responseData;

container.focus()

var request = new XMLHttpRequest();
      request.open("GET", "http://localhost/test/php/requests.php?etudiants=all", true);
      request.onreadystatechange = function () {
          if (request.readyState == 4) {
              if (request.status == 200) {
                   try {
                        responseData = JSON.parse(request.responseText);
                      
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

select.onchange = function changed() {
var txt = select.value;
var srch = search.value;
filtre(txt,srch);
}

btn.onclick = function changed() {
var txt = select.value;
var srch = search.value;
filtre(txt,srch);
}

search.addEventListener("keydown", function(event) {
      // Check if the key pressed is Enter (key code 13)
      if (event.keyCode === 13) {
        var txt = select.value;
        var srch = search.value;
        filtre(txt,srch);
      }
  });

function filtre(type,search) {

      while (container.firstChild) {
          container.removeChild(container.firstChild);
      }
      
      
      responseData.forEach(function (student) {
            if(type==1&&student['nom'].toLowerCase().startsWith(search.toLowerCase())){
              addChild(student,1,search)
              
            }else if(type==2&&student['prenom'].toLowerCase().startsWith(search.toLowerCase())){
              addChild(student,2,search)
              
            }else if(type==3&&student['email'].toLowerCase().startsWith(search.toLowerCase())){
              addChild(student,3,search)
             
            }else if(search==""){
              addChild(student,4,"")
            }  
           
            
          });

         


         
}

function addChild(stud,type,text) {
        if(type==1){

          var c = stud['nom'].slice(0,text.length);
          var d = stud['nom'].slice(text.length);
          clone.querySelector("#nom").innerHTML = "<span style='color: #c7e85f;'>" + c + "</span>" +
                                                  "<span style='color: black;'>" + d + "</span>";
          
        }else{
          clone.querySelector("#nom").textContent = stud['nom'];
        }
        
        if(type==2){

          var c = stud['prenom'].slice(0,text.length);
          var d = stud['prenom'].slice(text.length);
          clone.querySelector("#prenom").innerHTML = "<span style='color: blue;'>" + c + "</span>" +
                                                     "<span style='color: black;'>" + d + "</span>";

        }else{
          clone.querySelector("#prenom").textContent = stud['prenom'];}
          if(type==3){

          var c = stud['email'].slice(0,text.length);
          var d = stud['email'].slice(text.length);
          clone.querySelector("#email").innerHTML = "<span style='color: blue;'>" + c + "</span>" +
                                                    "<span style='color: black;'>" + d + "</span>";

          }else{
            clone.querySelector("#email").textContent = stud['email'];
         }
          
         clone.querySelector("#groupe").textContent = stud['groupe'];
         clone.style.display = '';
         container.appendChild(clone.cloneNode(true));
}