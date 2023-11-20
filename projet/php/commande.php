<?php
class Commande{

    static $ajouter_reccour = "INSERT INTO recours (id_student, module, nature, note_affiche, note_reel) VALUES (:id_student, :module, :nature, :noteaffiche, :notereel);";
    static $ajouter_statu = "UPDATE recours SET status = :status WHERE id = :id";
    static $ajouter_etudiant = "INSERT INTO students (nom, prenom, email, groupe) VALUES (:nom, :prenom, :email, :groupe);";
    static $get_reccour = "SELECT recours.id, recours.id_student, students.nom AS student_nom, students.prenom AS student_prenom,students.email AS student_email, students.groupe AS student_groupe, recours.module, recours.nature, recours.note_affiche, recours.note_reel, recours.status FROM recours INNER JOIN students ON recours.id_student = students.id ORDER BY status ASC; ";
    static $get_etudiants = "SELECT * FROM students";
    static $filtre_nom = "SELECT * FROM students WHERE LOWER(nom) LIKE LOWER(':nom%');";
    static $filtre_prenom = "SELECT * FROM students WHERE LOWER(prenom) LIKE LOWER(':prenom%');";
    static $filtre_email = "SELECT * FROM students WHERE LOWER(email) LIKE LOWER(':email%');";
    static $getid = "SELECT id FROM students WHERE LOWER(nom) = LOWER(:nom) AND LOWER(prenom) = LOWER(:prenom) AND LOWER(email) = LOWER(:email) AND groupe = :groupe";



}

?>