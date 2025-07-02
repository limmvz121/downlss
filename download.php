<?php
$file = $_GET['file'];
$filepath = 'downloads/' . $file;

// Catat download di database atau file log
// ... logika tracking ...

// Force download
header('Content-Description: File Transfer');
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="'.basename($filepath).'"');
header('Content-Length: ' . filesize($filepath));
readfile($filepath);
exit;
?>