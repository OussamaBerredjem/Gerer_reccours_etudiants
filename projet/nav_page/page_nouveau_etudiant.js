document.getElementById('sub').onclick = function request() {
    var request = new XMLHttpRequest();
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var email = document.getElementById('email').value;
    var groupe = document.getElementById('groupe').value;


    if(nom==""||prenom==""||email==""||groupe==""){
        alert('entrer tout les information')
        return;
    }
    var link = "http://localhost/test/php/requests.php";

    var formData = new FormData();
    formData.append('etudiants', nom);
    formData.append('nom', nom);
    formData.append('prenom', prenom);
    formData.append('email', email);
    formData.append('groupe', groupe);

    request.open("POST", link, true);

    request.onreadystatechange = function change() {
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 0) {
                alert('ajouter success');
                 document.getElementById('nom').value = "";
                 document.getElementById('prenom').value = "";
                 document.getElementById('email').value ="";
                document.getElementById('groupe').value = "";

            } else {
               
            }
        }
    };

    // Send the request
    request.send(formData);
};