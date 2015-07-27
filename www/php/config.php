<?php

error_reporting(0);
date_default_timezone_get('Asia/Calcutta');
date_default_timezone_set('Asia/Calcutta');
//$host="localhost"; // Host name
//$username="gowrigro"; // Mysql username
//$password="Gpro@!23"; // Mysql password
$host="localhost"; // Host name
$username="root"; // Mysql username
$password=""; // Mysql password
$db_name="branbox"; // Database name

// Connect to server and select databse.
$con = mysql_connect("$host", "$username", "$password")or die("cannot connect");
$db = mysql_select_db("$db_name", $con) or die("cannot select DB");

function convertDate($date){
	$return = '0000-00-00';
	$cdate = explode('/', $date);
	if(count($cdate) == 3){
		$return = $cdate[2].'-'.$cdate[1].'-'.$cdate[0];
	}
	return $return;
	}
function clean($str) {
            $str = @trim($str);
            if(get_magic_quotes_gpc()) {
                    $str = stripslashes($str);
            }
            return mysql_real_escape_string($str);
    }
	?>