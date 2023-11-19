<?php

include_once("connection.php");
include_once("gestions.php");
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$connection = new Connection('localhost', 'isil', 'root', '');
$pdo = $connection->connect();
$gestion = new Gestion($pdo);

if (isset($_POST['etudiants'])&&isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['email']) && isset($_POST['groupe'])) {

    $gestion->ajouter_etudiant($_POST['nom'], $_POST['prenom'], $_POST['email'], $_POST['groupe']);

    echo "add success";
}

if (isset($_GET['getid'])&&isset($_GET['nom']) && isset($_GET['prenom']) && isset($_GET['email']) && isset($_GET['groupe'])) {

    $gestion->getid($_GET['nom'], $_GET['prenom'], $_GET['email'], $_GET['groupe']);

}

if (isset($_GET['etudiants'])) {
   $data = $gestion->get_etudiant();

    echo json_encode($data);


}

if (isset($_GET['reccours'])) {
    $data = $gestion->get_reccours();
 
     echo json_encode($data);
 
 
 }

 if (isset($_GET['accept'])) {
    $id = $_GET['accept'];
    $gestion->accepte_reccour($id);

    echo $id;
 
}

if (isset($_GET['desline'])) {
    $id = $_GET['desline'];
    $gestion->desline_reccour($id);

    echo $id;
 
}


if(isset($_GET['id'])&&isset($_GET['module'])&&isset($_GET['nature'])&&isset($_GET['noteafficher'])&&isset($_GET['notereel'])){

    echo "correct request";
    $id = $_GET['id'];
    $module = $_GET['module'];
    $nature = $_GET['nature'];
    $note_afficher = $_GET['noteafficher'];
    $note_reel = $_GET['notereel'];

    $gestion->ajouter_reccour($id,$module,$nature,$note_afficher,$note_reel);
   
}
?>
