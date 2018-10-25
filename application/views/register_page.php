<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html>
    <head>
        <title>Register</title>
        <script type='text/javascript' src="/js/registration.js"></script>
        <script type='text/javascript' src="/js/header.js"></script>
        <link rel="stylesheet" href="/css/login.css">
        <link rel="stylesheet" href="/css/header.css">
    </head>

    <body>
        <h1>Register</h1>
        <div class="container">
            <div class="signin">
                <?php
                    echo validation_errors(); 
                ?>
                <form method="post" action="register/create" onsubmit="return checkSubmit()" name="registrationForm">
                    <p>
                        <label><b>Name</b></label>
                        <br>
                        <input type="text" name="name" placeholder="Enter Name"/>
                        <br>
                    </p> 

                    <p>
                        <label><b>Email</b></label>
                        <br>
                        <input type="email" name="email" placeholder="Enter Email"/>
                        <br>
                    </p>

                    <p>
                        <label><b>Password</b></label>
                        <br>
                        <input type="password" name="password" placeholder="Enter Password"/>
                        <br>
                    </p>

                    <p id="error"></p>

                    <input class="button" type="submit" value="Register"/>            
                </form>
            </div>
        </div>
    </body>