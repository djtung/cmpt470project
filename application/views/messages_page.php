<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>

<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Messages</title>

		<link rel="stylesheet" href="/css/header.css">
		<link rel="stylesheet" href="/css/login.css">
		<link rel="stylesheet" href="/css/message.css">

		<!--<script src="/js/jquery-3.3.1.min.js"></script>
		<script type='text/javascript' src="/js/header.js"></script>
		<script type='text/javascript' src="/js/messages.js"></script>
		<script><link rel="stylesheet" href="/css/login.css"></script>
		<link rel="stylesheet" href="/css/header.css">-->
	</head>
	
	<body class="loginContainer" onload="getContacts()">
  		<h1>Messages</h1>
			<!--<div class="button" onclick="getContacts()">Get Contacts</div>-->

			<div id="test">
			</div>

			<div class="dropdown">
  				<button class="dropbtn">Your Previous Contacts</button>
  				<div class="dropdown-content" id="dropMenu"></div>
			</div>

			<div class="messageDisplay" id="message">
			</div>

			<div id="newMessag" class="modal">
				<div id="newMessageContent" class="modalContent">
					<div id="modalHeader" class="modalHeader">
						<p id="messageTitle">--------New Message--------</p>
					</div>
					<div id="messageBody" class="modalBody">
						<textarea id="textarea" rows="10" cols="73" name="message" autofocus required></textarea>
						<input id="messageButton" class="messageButton" type="submit" value="Send Message" onclick="sendMessage()"></input>
					</div>
				</div>
			</div>

		</div>
	</body>

	<script src="/js/jquery-3.3.1.min.js"></script>
    <script type='text/javascript' src="/js/messages.js"></script>
	<!--<script type='text/javascript' src="/js/header.js"></script>-->
	
</html>
