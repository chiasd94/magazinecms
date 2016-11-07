<?php
    $zip = new ZipArchive;
    $download = 'download.zip';
    $zip->open($download, ZipArchive::CREATE);
    foreach (glob("images/*.jpg") as $file) { /* Add appropriate path to read content of zip */
        $zip->addFile($file);
    }
    $zip->close();
    header('Content-Type: application/zip');
    header("Content-Disposition: attachment; filename = $download");
    header('Content-Length: ' . filesize($download));
    header("Location: $download");
 ?>
