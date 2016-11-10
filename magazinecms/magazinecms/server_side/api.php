<?php
include "backend.php";
if($_SERVER['REQUEST_METHOD'] == "POST"){
  $callType=$_POST['callType'];
  switch ($callType) {
    case 'createAccount':
    $full_name = isset($_POST['fullName']) ? $_POST['fullName'] : "";
    $dob = isset($_POST['dob']) ? $_POST['dob'] : "";
    $gender = isset($_POST['gender']) ? $_POST['gender'] : "";
    $email = isset($_POST['email']) ? $_POST['email'] : "";
    $password = isset($_POST['password']) ? $_POST['password'] : "";
    $phone = isset($_POST['phone']) ? $_POST['phone'] : "";
    $roleID = isset($_POST['roleID']) ? $_POST['roleID'] : "";
    $data = createAccount($full_name,$dob,$gender,$email,$password,$phone,$roleID);
    break;
    case 'createStudentAccount':
    $full_name = isset($_POST['fullName']) ? $_POST['fullName'] : "";
    $dob = isset($_POST['dob']) ? $_POST['dob'] : "";
    $gender = isset($_POST['gender']) ? $_POST['gender'] : "";
    $email = isset($_POST['email']) ? $_POST['email'] : "";
    $password = isset($_POST['password']) ? $_POST['password'] : "";
    $phone = isset($_POST['phone']) ? $_POST['phone'] : "";
    $falcutiesName = isset($_POST['falcutiesName']) ? $_POST['falcutiesName'] : "";
    $data = createStudentAccount($full_name,$dob,$gender,$email,$password,$phone,$falcutiesName);
    break;
    case 'getAllStudentAccount':
    $data = getAllStudent();
    break;
    case 'editStudentAccount':
    $uid = isset($_POST['uid']) ? $_POST['uid'] : "";
    $full_name = isset($_POST['fullName']) ? $_POST['fullName'] : "";
    $dob = isset($_POST['dob']) ? $_POST['dob'] : "";
    $gender = isset($_POST['gender']) ? $_POST['gender'] : "";
    $currentEmail = isset($_POST['currentEmail']) ? $_POST['currentEmail'] : "";
    $newEmail = isset($_POST['newEmail']) ? $_POST['newEmail'] : "";
    $currentPassword = isset($_POST['currentPassword']) ? $_POST['currentPassword'] : "";
    $password = isset($_POST['password']) ? $_POST['password'] : "";
    $phone = isset($_POST['phone']) ? $_POST['phone'] : "";
    $falcutiesName = isset($_POST['falcutiesName']) ? $_POST['falcutiesName'] : "";
    $data = editStudentAccount($uid,$full_name,$dob,$gender,$currentEmail,$newEmail,$currentPassword,$password,$phone,$falcutiesName);
    break;
    case 'deleteStudentAccount':
    $uid = isset($_POST['uid']) ? $_POST['uid'] : "";
    $data = deleteStudentAccount($uid);
    break;
    case 'createMMAccount':
    $full_name = isset($_POST['fullName']) ? $_POST['fullName'] : "";
    $dob = isset($_POST['dob']) ? $_POST['dob'] : "";
    $gender = isset($_POST['gender']) ? $_POST['gender'] : "";
    $email = isset($_POST['email']) ? $_POST['email'] : "";
    $password = isset($_POST['password']) ? $_POST['password'] : "";
    $phone = isset($_POST['phone']) ? $_POST['phone'] : "";
    $data = createMMAccount($full_name,$dob,$gender,$email,$password,$phone);
    break;
    case 'getAllMMAccount':
    $data = getAllMMAccount();
    break;
    case 'editMMAccount':
    $uid = isset($_POST['uid']) ? $_POST['uid'] : "";
    $full_name = isset($_POST['fullName']) ? $_POST['fullName'] : "";
    $dob = isset($_POST['dob']) ? $_POST['dob'] : "";
    $gender = isset($_POST['gender']) ? $_POST['gender'] : "";
    $currentEmail = isset($_POST['currentEmail']) ? $_POST['currentEmail'] : "";
    $newEmail = isset($_POST['newEmail']) ? $_POST['newEmail'] : "";
    $currentPassword = isset($_POST['currentPassword']) ? $_POST['currentPassword'] : "";
    $password = isset($_POST['password']) ? $_POST['password'] : "";
    $phone = isset($_POST['phone']) ? $_POST['phone'] : "";
    $data = editMMAccount($uid,$full_name,$dob,$gender,$currentEmail,$newEmail,$currentPassword,$password,$phone);
    break;
    case 'deteleMMRole':
    $uid = isset($_POST['uid']) ? $_POST['uid'] : "";
    $data = deteleMMRole($uid);
    break;
    case 'getAllOldMMAccount':
    $data = getAllOldMMAccount();
    break;
    case 'remakeMMRole':
    $cuid = isset($_POST['cuid']) ? $_POST['cuid'] : "";
    $uid = isset($_POST['uid']) ? $_POST['uid'] : "";
    $data = remakeMMRole($uid,$cuid);
    break;
    case 'createMCAccount':
    $full_name = isset($_POST['fullName']) ? $_POST['fullName'] : "";
    $dob = isset($_POST['dob']) ? $_POST['dob'] : "";
    $gender = isset($_POST['gender']) ? $_POST['gender'] : "";
    $email = isset($_POST['email']) ? $_POST['email'] : "";
    $password = isset($_POST['password']) ? $_POST['password'] : "";
    $phone = isset($_POST['phone']) ? $_POST['phone'] : "";
    $facultiesName = isset($_POST['facultiesName']) ? $_POST['facultiesName'] : "";
    $data = createMCAccount($full_name,$dob,$gender,$email,$password,$phone,$facultiesName);
    break;
    case 'getAllMCAccount':
    $data = getAllMCAccount();
    break;
    case 'editMCAccount':
    $uid = isset($_POST['uid']) ? $_POST['uid'] : "";
    $full_name = isset($_POST['fullName']) ? $_POST['fullName'] : "";
    $dob = isset($_POST['dob']) ? $_POST['dob'] : "";
    $gender = isset($_POST['gender']) ? $_POST['gender'] : "";
    $currentEmail = isset($_POST['currentEmail']) ? $_POST['currentEmail'] : "";
    $newEmail = isset($_POST['newEmail']) ? $_POST['newEmail'] : "";
    $currentPassword = isset($_POST['currentPassword']) ? $_POST['currentPassword'] : "";
    $password = isset($_POST['password']) ? $_POST['password'] : "";
    $phone = isset($_POST['phone']) ? $_POST['phone'] : "";
    $newFacultiesName = isset($_POST['newFacultiesName']) ? $_POST['newFacultiesName'] : "";
    $data = editMCAccount($uid,$full_name,$dob,$gender,$currentEmail,$newEmail,$currentPassword,$password,$phone,$newFacultiesName);
    break;
    case 'deteleMCRole':
    $uid = isset($_POST['uid']) ? $_POST['uid'] : "";
    $data = deteleMCRole($uid);
    break;
    case 'getAllOldMCAccount':
    $data = getAllOldMCAccount();
    break;
    case 'remakeMCRole':
    $cuid = isset($_POST['cuid']) ? $_POST['cuid'] : "";
    $uid = isset($_POST['uid']) ? $_POST['uid'] : "";
    $facultiesName = isset($_POST['facultiesName']) ? $_POST['facultiesName'] : "";
    $data = remakeMCRole($uid,$cuid,$facultiesName);
    break;
    case 'createGuestAccount':
    $email = isset($_POST['email']) ? $_POST['email'] : "";
    $password = isset($_POST['password']) ? $_POST['password'] : "";
    $facultiesName = isset($_POST['facultiesName']) ? $_POST['facultiesName'] : "";
    $data = createGuestAccount($email,$password,$facultiesName);
    break;
    case 'getAllGuestAccount':
    $data = getAllGuestAccount();
    break;
    case 'editGuestAccount':
    $uid = isset($_POST['uid']) ? $_POST['uid'] : "";
    $currentEmail = isset($_POST['currentEmail']) ? $_POST['currentEmail'] : "";
    $newEmail = isset($_POST['newEmail']) ? $_POST['newEmail'] : "";
    $password = isset($_POST['password']) ? $_POST['password'] : "";
    $facultiesName = isset($_POST['facultiesName']) ? $_POST['facultiesName'] : "";
    $data = editGuestAccount($uid,$currentEmail,$newEmail,$password,$facultiesName);
    break;
    case 'deleteGuestAccount':
    $uid = isset($_POST['uid']) ? $_POST['uid'] : "";
    $data = deleteGuestAccount($uid);
    break;
    case 'checkLogin':
    $email = isset($_POST['email']) ? $_POST['email'] : "";
    $password = isset($_POST['password']) ? $_POST['password'] : "";
    $data = checkLogin($email,$password);
    break;
    case 'createRole':
    $roleName = isset($_POST['roleName']) ? $_POST['roleName'] : "";
    $data = createRole($roleName);
    break;
    case 'getAllRole':
    $data = getAllRole();
    break;
    case 'editRole':
    $roleName = isset($_POST['roleName']) ? $_POST['roleName'] : "";
    $newRoleName = isset($_POST['newRoleName']) ? $_POST['newRoleName'] : "";
    $data = editRole($roleName,$newRoleName);
    break;
    case 'deleteRole':
    $roleName = isset($_POST['roleName']) ? $_POST['roleName'] : "";
    $data = deleteRole($roleName);
    break;
    case 'createAcademyYear':
    $year = isset($_POST['year']) ? $_POST['year'] : "";
    $data = createAcademyYear($year);
    break;
    case 'getAllAcademyYear':
    $data = getAllAcademyYear();
    break;
    case 'editAcademyYear':
    $year = isset($_POST['year']) ? $_POST['year'] : "";
    $newYear = isset($_POST['newYear']) ? $_POST['newYear'] : "";
    $data = editAcademyYear($year,$newYear);
    break;
    case 'deleteAcademyYear':
    $year = isset($_POST['year']) ? $_POST['year'] : "";
    $data = deleteAcademyYear($year);
    break;
    case 'createFalcuties':
    $falcutiesName = isset($_POST['falcutiesName']) ? $_POST['falcutiesName'] : "";
    $data = createFalcuties($falcutiesName);
    break;
    case 'getAllFalcuties':
    $data = getAllFalcuties();
    break;
    case 'editFalcuties':
    $falcutiesName = isset($_POST['falcutiesName']) ? $_POST['falcutiesName'] : "";
    $newFalcutiesName = isset($_POST['newFalcutiesName']) ? $_POST['newFalcutiesName'] : "";
    $data = editFalcuties($falcutiesName,$newFalcutiesName);
    break;
    case 'deleteFalcuties':
    $falcutiesName = isset($_POST['falcutiesName']) ? $_POST['falcutiesName'] : "";
    $data = deleteFalcuties($falcutiesName);
    break;
    case 'createMagazine':
    $magazine_name = isset($_POST['magazine_name']) ? $_POST['magazine_name'] : "";
    $start_date = isset($_POST['start_date']) ? $_POST['start_date'] : "";
    $end_date = isset($_POST['end_date']) ? $_POST['end_date'] : "";
    $data = createMagazine($magazine_name,$start_date,$end_date);
    break;
    case 'getAllMagazine':
    $data = getAllMagazine();
    break;
    case 'getCurrentMagazine':
    $data = getCurrentMagazine();
    break;
    case 'editMagazine':
    $mid = isset($_POST['mid']) ? $_POST['mid'] : "";
    $new_magazine_name = isset($_POST['new_magazine_name']) ? $_POST['new_magazine_name'] : "";
    $start_date = isset($_POST['start_date']) ? $_POST['start_date'] : "";
    $end_date = isset($_POST['end_date']) ? $_POST['end_date'] : "";
    $data = editMagazine($mid,$new_magazine_name,$start_date,$end_date);
    break;
    case 'createArticle':
    $uid = isset($_POST['uid']) ? $_POST['uid'] : "";
    $title = isset($_POST['title']) ? $_POST['title'] : "";
    $description = isset($_POST['description']) ? $_POST['description'] : "";
    $imgDir = isset($_POST['imgDir']) ? $_POST['imgDir'] : "";
    $docDir = isset($_POST['docDir']) ? $_POST['docDir'] : "";
    $data = createArticle($uid,$title, $description, $imgDir, $docDir);
    break;
    case 'getArticleByUser':
    $uid = isset($_POST['uid']) ? $_POST['uid'] : "";
    $data = getArticleByUser($uid);
    break;
    case 'getAllArticleByMcId':
    $uid = isset($_POST['uid']) ? $_POST['uid'] : "";
    $data = getAllArticleByMcId($uid);
    break;
    case 'editArticle':
    break;
    case 'delteArticle':
    break;
    case 'submitArticle':
    $studentName = isset($_POST['studentName']) ? $_POST['studentName'] : "";
    $stid = isset($_POST['stid']) ? $_POST['stid'] : "";
    $mcid = isset($_POST['mcid']) ? $_POST['mcid'] : "";
    $mcName = isset($_POST['mcName']) ? $_POST['mcName'] : "";
    $atid = isset($_POST['atid']) ? $_POST['atid'] : "";
    $articleTitle = isset($_POST['articleTitle']) ? $_POST['articleTitle'] : "";
    $magazine = isset($_POST['magazine']) ? $_POST['magazine'] : "";
    $data = submitArticleToMM($studentName,$stid,$mcid,$mcName,$atid,$articleTitle,$magazine);
    break;
    case 'getArticleForMM':
    $data = getArticleForMM();
    break;
    case 'approveArticle':
    $studentName = isset($_POST['studentName']) ? $_POST['studentName'] : "";
    $stid = isset($_POST['stid']) ? $_POST['stid'] : "";
    $mmid = isset($_POST['mmid']) ? $_POST['mmid'] : "";
    $atid = isset($_POST['atid']) ? $_POST['atid'] : "";
    $articleTitle = isset($_POST['articleTitle']) ? $_POST['articleTitle'] : "";
    $magazine = isset($_POST['magazine']) ? $_POST['magazine'] : "";
    $data = approveArticle($studentName,$stid,$mmid,$atid,$articleTitle,$magazine);
    break;
    case 'rejectArticle':
    $studentName = isset($_POST['studentName']) ? $_POST['studentName'] : "";
    $stid = isset($_POST['stid']) ? $_POST['stid'] : "";
    $mmid = isset($_POST['mmid']) ? $_POST['mmid'] : "";
    $atid = isset($_POST['atid']) ? $_POST['atid'] : "";
    $articleTitle = isset($_POST['articleTitle']) ? $_POST['articleTitle'] : "";
    $magazine = isset($_POST['magazine']) ? $_POST['magazine'] : "";
    $data = rejectArticle($studentName,$stid,$mmid,$atid,$articleTitle,$magazine);
    break;
    case 'comment':
    $uid = isset($_POST['uid']) ? $_POST['uid'] : "";
    $atid = isset($_POST['atid']) ? $_POST['atid'] : "";
    $comment = isset($_POST['comment']) ? $_POST['comment'] : "";
    $data = comment($uid,$atid,$comment);
    break;
    case 'getAllCommentByArticleId':
    $atid = isset($_POST['atid']) ? $_POST['atid'] : "";
    $data = getAllCommentByArticleId($atid);
    break;
    case 'changePassword':
    $uid = isset($_POST['uid']) ? $_POST['uid'] : "";
    $currentPass = isset($_POST['currentPass']) ? $_POST['currentPass'] : "";
    $newPass = isset($_POST['newPass']) ? $_POST['newPass'] : "";
    $data = changePassword($uid,$currentPass,$newPass);
    break;
    default:
    $data = array("status" => 0, "msg" => "No match function for API call");
    break;
  }
}else {
  $data = array("status" => 0, "msg" => "Request method not accepted");
}
// Output header
header('Content-type: application/json');
echo json_encode($data);
?>
