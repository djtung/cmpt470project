<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<body>
    <div class="header">
        <div class="labelContainer"><label onclick="openHome()">470 Project</label></div>  
        <div class="loginregister">
            <div class="buttonContainer" onclick="openSearch()"><p class="navigate" id="search">Search Items</p></div>
        <?php if ($showLogin): ?>
            <div class="buttonContainer" onclick="openLogin()"><p class="navigate login" id="login">Login</p></div>
            <div class="buttonContainer" onclick="openRegister()"><p class="navigate register"id="register">Register</p></div>
        <?php else: ?>
            <?php if ($showPostItem): ?>
                <div class="buttonContainer" onclick="openPostItem()"><button class="navigate" id="addItem">Post New Item</button></div>
            <?php endif;?>

            <div class="buttonContainer" onclick="openLogout()"><button class="navigate" id="logout">Logout</button></div>
        <?php endif; ?>
        </div>
    </div>
</body>