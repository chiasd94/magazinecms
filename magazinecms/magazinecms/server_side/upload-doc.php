<?php
if (!empty( $_FILES ) ) {
  $validextensions = array("doc", "docx");
  $temporary = explode(".", $_FILES["file"]["name"]);
  $file_extension = end($temporary);
  if (in_array($file_extension, $validextensions)) {
    if ($_FILES["file"]["error"] > 0)
    {
      $returnData = array("status" => 0, "msg" => "File error!");
    }
    else
    {
      if (file_exists("../file/doc/" . $_FILES["file"]["name"])) {
        $returnData = array("status" => 0, "msg" => "File ".$_FILES["file"]["name"]." already exists");
      }
      else
      {
        $length = 20;
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
          $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        $sourcePath = $_FILES['file']['tmp_name'];
        $targetPath = "../file/doc/doc-".$randomString.".".$file_extension;
        move_uploaded_file($sourcePath,$targetPath) ;
        $returnData = array("status" => 1, "msg" => "File uploaded!", "file_name" => "doc-".$randomString.".".$file_extension);
      }
    }
  }
  else
  {
    $returnData = array("status" => 0, "msg" => "File type not allowed!");
  }
} else {
  $returnData = array("status" => 0, "msg" => "No file");
}

header('Content-type: application/json');
echo json_encode($returnData);
?>
