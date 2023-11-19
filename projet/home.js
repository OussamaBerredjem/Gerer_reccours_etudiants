var recherche = document.getElementById('recherche');
var etudiant = document.getElementById('etudiant');
var reccour = document.getElementById('reccour');
var nouveau = document.getElementById("nouveau");
var targetElement = document.getElementById('navbarToggleExternalContent');
var iframe = document.getElementById("iframe");
var new_reccour = document.getElementById('nouveau_reccour');

var lastactive=0;
var active = 0;

function change(){
    
     if(lastactive==2){
        recherche.classList.replace("active","fw-bold");
    }else if(lastactive==0){
     new_reccour.classList.replace("active","fw-bold");
 }else if(lastactive==3){
         etudiant.classList.replace("active","fw-bold");
    }else if(lastactive==4){
         reccour.classList.replace("active","fw-bold");
    }else{
        nouveau.classList.replace("active","fw-bold");

    }

if(active==2){
recherche.classList.replace("fw-bold","active");

iframe.src = "nav_page/page_recherche.html";
iframe.focus()

}else if(active==0){
     new_reccour.classList.replace("fw-bold","active");
     
     iframe.src = "nav_page/reccours.html";
     iframe.focus()
     
     } else if(active==3){
etudiant.classList.replace("fw-bold","active");

iframe.src = "nav_page/page_liste_etudiant.html";
iframe.focus()
}else if(active==4){
reccour.classList.replace("fw-bold","active");

iframe.src = "nav_page/page_reccour.html";
iframe.focus()


}else{
nouveau.classList.replace("fw-bold","active"); 

iframe.src = "nav_page/page_nouveau_etudiant.html";
iframe.focus()


}




}

function hideCollapse() {
$('#navbarToggleExternalContent').collapse('hide');
}



recherche.onclick = function click(params) {

lastactive = active;
active = 2;
change();
setTimeout(hideCollapse,200)

}

new_reccour.onclick = function click(params) {

     lastactive = active;
     active = 0;
     change();
     setTimeout(hideCollapse,200)
     
     }

etudiant.onclick = function click(params) {

lastactive = active;
active = 3;
change();
setTimeout(hideCollapse,200)


}

reccour.onclick = function click(params) {

lastactive = active;
active = 4;
change();
setTimeout(hideCollapse,200)


}


nouveau.onclick = function click(params) {

lastactive = active;
active = 5;
change();
setTimeout(hideCollapse,200)


}