<?php
    require_once DATABASE . "settings.php";
    require_once DATABASE . "userManagement.php";
    require_once __DIR__ . '/../vendor/autoload.php';

    class Register_model extends CI_Model {
        private $database;

        public function __construct() {
            $this->database = new MongoDB\Client(getDBAddr());
        }

        public function login() {
            
        }
    }

?>