<?php
include_once("commande.php");

class Gestion {

    
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function ajouter_etudiant($nom, $prenom, $email, $groupe) {
        try {
            $stmt = $this->pdo->prepare(Commande::$ajouter_etudiant);
            $stmt->bindParam(":nom", $nom);
            $stmt->bindParam(":prenom", $prenom);
            $stmt->bindParam(":email", $email);
            $stmt->bindParam(":groupe", $groupe);
            $stmt->execute();
        } catch (PDOException $e) {
            echo "Error adding student: " . $e->getMessage();
        }
    }

    public function get_etudiant() { 
        try {

            $stmt = $this->pdo->prepare(Commande::$get_etudiants);
            $table = array();
            $stmt->execute();
            $table = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $table;


        }catch(PDOException $e) {
            echo "". $e->getMessage();
        }
    }

    public function get_reccours() { 
        try {

            $stmt = $this->pdo->prepare(Commande::$get_reccour);
            $table = array();
            $stmt->execute();
            $table = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $table;


        }catch(PDOException $e) {
            echo "". $e->getMessage();
        }
    }

    public function accepte_reccour($id) {
        try {
            $stmt = $this->pdo->prepare(Commande::$ajouter_statu);
            $stmt->bindParam(":id", $id, PDO::PARAM_INT); // Assuming $id is an integer, adjust if needed
            $status = 1;
            $stmt->bindParam(":status", $status, PDO::PARAM_INT); // Assuming $status is an integer, adjust if needed
             // Set the value for status
            $stmt->execute();
        } catch (PDOException $e) {
            echo "" . $e->getMessage();
        }
    }

    public function desline_reccour($id) {
        try {
            $stmt = $this->pdo->prepare(Commande::$ajouter_statu);
            $stmt->bindParam(":id", $id, PDO::PARAM_INT); // Assuming $id is an integer, adjust if needed
            $status = 2;
            $stmt->bindParam(":status", $status, PDO::PARAM_INT); // Assuming $status is an integer, adjust if needed
             // Set the value for status
            $stmt->execute();
        } catch (PDOException $e) {
            echo "" . $e->getMessage();
        }
    }

    public function getid($nom, $prenom, $email, $groupe) {
        try {
            $stmt = $this->pdo->prepare(Commande::$getid);
            $stmt->bindParam(":nom", $nom);
            $stmt->bindParam(":prenom", $prenom);
            $stmt->bindParam(":email", $email);
            $stmt->bindParam(":groupe", $groupe, PDO::PARAM_INT);
            $stmt->execute();
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            echo json_encode($result);
        } catch (PDOException $e) {
            echo "" . $e->getMessage();
        }
    }


    public function ajouter_reccour($id, $module, $nature, $note_afficher,$note_reel) {
        try {
            $stmt = $this->pdo->prepare(Commande::$ajouter_reccour);
            $stmt->bindParam(":id_student", $id,PDO::PARAM_INT);
            $stmt->bindParam(":module", $module,PDO::PARAM_STR);
            $stmt->bindParam(":nature", $nature, PDO::PARAM_INT);
            $stmt->bindParam(":noteaffiche", $note_afficher, PDO::PARAM_INT);
            $stmt->bindParam(":notereel", $note_reel, PDO::PARAM_INT);
            $stmt->execute();
            echo "add succes";
        } catch (PDOException $e) {
            echo "" . $e->getMessage();
        }
    }
    

}
?>
