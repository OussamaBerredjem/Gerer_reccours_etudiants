var container = document.getElementById("container");
var reccour = document.getElementById("reccour");
var favourable = document.getElementById("favourable");
var defavourable = document.getElementById("defavourable");
var check = document.getElementById("check");







var request = new XMLHttpRequest();
          request.open("GET", "http://localhost/projet/php/requests.php?reccours", true);
          request.onreadystatechange = function () {
              if (request.readyState == 4) {
                  if (request.status == 200) {
                       try {
                          
                           var responseData = JSON.parse(request.responseText);
                            
                            responseData.forEach(function (student) {
                              var clone = reccour.cloneNode(true);
                              clone.querySelector("#nom").value = student['student_nom'];
                              clone.querySelector("#prenom").value = student['student_prenom'];
                              clone.querySelector("#groupe").value = student['student_groupe'];
                              clone.querySelector("#email").value = student['student_email'];
                              clone.querySelector("#module").value = student['module'];
                              clone.querySelector("#nature").value = student['nature'];
                              clone.querySelector("#noteaff").value = student['note_affiche'];
                              clone.querySelector("#noterel").value = student['note_reel'];
                              clone.querySelector("#id_student").value = student['id_student'];
                              clone.querySelector("#id_reccour").value = student['id'];
      
                    

                              var state = student['status'];
                              if(state!=null && state == 1){

                                clone.style.backgroundColor = "darkseagreen";
                                clone.querySelector("#check").style.display = "none";
                                clone.querySelector("#favourable").style.display = "";
                                clone.querySelector("#defavourable").style.display = "none";


                              }else if(state!=null && state == 2){
                                clone.style.backgroundColor = "coral";
                                clone.querySelector("#check").style.display = "none";
                                clone.querySelector("#favourable").style.display = "none";
                                clone.querySelector("#defavourable").style.display = "";
                              }else{

                              }
                              
                              clone.style.display = ""

                              var acceptButton = clone.querySelector('.accept-button');
                                acceptButton.addEventListener('click', function (event) {
                                clone.style.backgroundColor = "darkseagreen"
                                clone.querySelector("#check").style.display = "none";
                                clone.querySelector("#favourable").style.display = "";
                                clone.querySelector("#defavourable").style.display = "none";
                                
                                var req = new XMLHttpRequest();
                                req.open("GET","http://localhost/projet/php/requests.php?accept="+student['id'],true);
                                req.send();
                                
                    

                                });

                                var deslineButton = clone.querySelector('.desline-button');
                                deslineButton.addEventListener('click', function (event) {
                                clone.style.backgroundColor = "coral"
                                clone.querySelector("#check").style.display = "none";
                                clone.querySelector("#favourable").style.display = "none";
                                clone.querySelector("#defavourable").style.display = "";
                                
                                var req = new XMLHttpRequest();
                                req.open("GET","http://localhost/projet/php/requests.php?desline="+student['id'],true);
                                req.send();
                                
                    

                                });
                              
                              container.appendChild(clone);

                              
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
