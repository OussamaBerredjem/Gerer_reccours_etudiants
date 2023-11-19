var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var email = document.getElementById("email");
var groupe = document.getElementById("groupe");
var modules = document.getElementById("modules");
var nature = document.getElementById("nature");
var note_afficher = document.getElementById("note_afficher");
var note_reel = document.getElementById("note_reel");
var btn = document.getElementById("envoyer");
var back = document.getElementById("back")

back.onclick = function(event){
  event.preventDefault();
  window.location.href = "home.html";
}



var request = new XMLHttpRequest();

if(btn ==null) aler('null btn')
if(btn!=null) btn.onclick = function name() {

  
  var e = email.value;
  var n = nom.value;
  var p = prenom.value;
  var m = modules.value;
  var na = nature.value;
  var noteaf = note_afficher.value;
  var noterel = note_reel.value;
  var g = groupe.value;

  if(e==""||n==""||p==""||m==""||noteaf==""||noterel==""||g==""){

    alert('error entrer tout les information')

  }else{

  
  var link = "http://localhost/test/php/requests.php?nom="+n+"&prenom="+p+"&email="+e+"&groupe="+g+"&getid";
  
  request.open("GET",link,true);
  request.onreadystatechange = function connect(params) {
    if(this.status == 200 && this.readyState ==4){
      var r = JSON.parse(request.responseText);
      if(r==false){alert("error cette etudiant n'est pas en base de donner")}
      else{


      var req = new XMLHttpRequest();
      var linko = "http://localhost/test/php/requests.php?id="+r['id']+"&module="+m+"&nature="+na+"&noteafficher="+noteaf+"&notereel="+noterel;
      req.open("GET",linko,true);
      req.onreadystatechange = function () {
        if (req.status == 200 ) {
          alert('votre reccours envoyer')
          email.value="";
          nom.value="";
          prenom.value="";
          modules.value="";
          note_afficher.value="";
          note_reel.value="";
          groupe.value="";
          nature.value = 1

        }else{
          
        }
      }
      
      
      req.send();
    }
    }
  }
  request.send();}
}