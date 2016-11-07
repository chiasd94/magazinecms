module.controller('MMController', function($scope, $rootScope, $timeout, $http, service) {
  $scope.$on('$viewContentLoaded', function() {
    $scope.authen();
  });
  $scope.authen = function() {
    console.log('authen');
    service.authen('MM');
    $scope.setUserInfor();
    $scope.getAllMagazine();
    $scope.getAllAcademyYear();
    $scope.getAllFalcuties();
    $scope.getAllArticleForMM();
    $scope.getCurrentMagazine();
    $scope.currentStatus = 'submited';
  };
  $scope.logout = function() {
    service.clearLoginData();
    window.location.replace('login.html');
  };
  $scope.setUserInfor = function() {
    $scope.fullName = localStorage.getItem('fullName');
    $scope.fullNameWithRole = localStorage.getItem('fullName') + ' - ' + localStorage.getItem('role');
    $scope.role = localStorage.getItem('role');
    $('#fullName').text($scope.fullName);
    $('#fullNameWithRole').text($scope.fullNameWithRole);
    $('#role').text($scope.role);
  };
  $scope.getAllFalcuties = function() {
    var data = 'callType=getAllFalcuties&';
    service.makeRequest(data).then(function(response) {
      $scope.returnData = response.data;
      if ($scope.returnData.status == 1) {
        $scope.aFalcuties = $scope.returnData.data;
      } else {
        alert($scope.returnData.msg);
      }
    });
  };
  $scope.getAllAcademyYear = function() {
    var data = 'callType=getAllAcademyYear&';
    $scope.sAY = null;
    service.makeRequest(data).then(function(response) {
      $scope.returnData = response.data;
      if ($scope.returnData.status == 1) {
        $scope.sAY = $scope.returnData.data;
        var index = $scope.sAY.indexOf($scope.currentAY);
        $scope.sAY.splice(index,1);
      } else {
        alert($scope.returnData.msg);
      }
    });
  };
  $scope.getCurrentMagazine = function() {
    var data = 'callType=getCurrentMagazine&';
    service.makeRequest(data).then(function(response) {
      $scope.returnData = response.data;
      if ($scope.returnData.status == 1) {
        if ($scope.validMagazineDay($scope.returnData.data[0].start_date,$scope.returnData.data[0].end_date)) {
          $scope.isCanApprove = true;
          console.log('can approve');
        }else {
          $scope.isCanApprove = false;
          console.log('can not approve');
        }
      } else {
        $scope.isCanApprove = false;
        alert($scope.returnData.msg);
      }
    });
  };
  $scope.getAllMagazine = function() {
    var data = 'callType=getAllMagazine&';
    $scope.sMA = null;
    service.makeRequest(data).then(function(response) {
      $scope.returnData = response.data;
      console.log($scope.returnData);
      if ($scope.returnData.status == 1) {
        $scope.sMA = $scope.returnData.data;
      } else {
        alert($scope.returnData.msg);
      }
    });
    var d = new Date();
    var year = d.getFullYear();
    $scope.currentAY = year;
  };
  $scope.getAllArticleForMM = function(){
    var data = 'callType=getArticleForMM&';
    service.makeRequest(data).then(function(response) {
      $scope.returnData = response.data;
      console.log($scope.returnData);
      if ($scope.returnData.status == 1) {
        $scope.sAT = $scope.returnData.data;
      }else {
        alert($scope.returnData.msg);
      }
    });
  };
  $scope.createMagazine = function(){
    var data = 'callType=createMagazine&magazine_name='+$scope.magazineName+'&start_date='+$scope.startDate+'&end_date='+$scope.endDate;
    service.makeRequest(data).then(function(response) {
      $scope.returnData = response.data;
      if ($scope.returnData.status == 1) {
        $scope.getAllMagazine();
        alert($scope.returnData.msg);
      } else {
        alert($scope.returnData.msg);
      }
    });
  };
  $scope.editMagazine = function() {
    var data = 'callType=editMagazine&mid='+$scope.selectedMid+'&new_magazine_name='+$scope.magazineNameEdit+'&start_date='+$scope.startDateEdit+'&end_date='+$scope.endDateEdit;
    console.log(data);
    service.makeRequest(data).then(function(response) {
      $scope.returnData = response.data;
      if ($scope.returnData.status == 1) {
        $scope.getAllMagazine();
        $scope.getCurrentMagazine();
        alert($scope.returnData.msg);
      } else {
        alert($scope.returnData.msg);
      }
    });
  };
  $scope.validMagazineDay = function(start_date, end_date) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var yyyy = today.getFullYear();
    if(dd<10){
      dd='0'+dd;
    }
    var currentDate = new Date(yyyy, mm, dd);
    var startDateArr =  start_date.split('-');
    var m = startDateArr[1]-1;
    var startDate = new Date(startDateArr[0],m,startDateArr[2]);
    var enddateArr = end_date.split('-');
    var m2 = enddateArr[1]-1;
    var endDate = new Date(enddateArr[0],m2,enddateArr[2]);
    if (startDate > currentDate) {
      return false;
    }else if (currentDate > endDate) {
      return false;
    }else {
      return true;
    }
  };
  $scope.getAllCommentByArticleId = function() {
    var data = 'callType=getAllCommentByArticleId&atid='+$scope.seletedArticle.atid;
    service.makeRequest(data).then(function(response) {
      $scope.returnData = response.data;
      if ($scope.returnData.status == 1) {
        $scope.comment = $scope.returnData.data;
        $scope.hasComment = true;
      } else {
        $scope.hasComment = false;
      }
    });
  };
  $scope.showChangPass = function() {
    $scope.validConfirmPassword = false;
    $scope.confirmPasswordMsg = "Confirm new password required!";
    $('#changePassModal').modal({backdrop: 'static', keyboard: false});
  };
  $scope.checkRequirePass = function() {
    if ($scope.newPass !== null && $scope.confirmNewPass !== null && $scope.newPass !== $scope.confirmNewPass) {
      $scope.confirmPasswordMsg = "Confirm password not match!";
      $scope.validConfirmPassword = false;
    }else if ($scope.newPass !== null && $scope.confirmNewPass !== null && $scope.newPass === $scope.confirmNewPass){
      $scope.validConfirmPassword = true;
    }else {
      $scope.validConfirmPassword = false;
    }
  };
  $scope.changePass = function() {
    var uid = localStorage.getItem('uid');
    var data = 'callType=changePassword&uid='+uid+'&currentPass='+$scope.currentPass+'&newPass='+$scope.newPass;
    service.makeRequest(data).then(function(response) {
      $scope.returnData = response.data;
      if ($scope.returnData.status == 1) {
        alert($scope.returnData.msg);
      } else {
        alert($scope.returnData.msg);
      }
    });
  };
  $scope.closeChangePassView = function() {
    $scope.currentPass = '';
    $scope.newPass = '';
    $scope.confirmNewPass = '';
    $('#changePassModal').modal('hide');
  };
  $scope.view = function(index) {
    $scope.isApproving = false;
    $scope.seletedArticle = $scope.sAT[index];
    if ($scope.seletedArticle.STATUS=='approved') {
      $scope.approveBtn = 'Approved';
      $scope.reJectBtn = 'Reject';
      $scope.isCanApprove = false;
      $scope.isCanReject = false;
    }else if ($scope.seletedArticle.STATUS=='rejected') {
      $scope.approveBtn = 'Approved';
      $scope.reJectBtn = 'Rejected';
      $scope.isCanApprove = false;
      $scope.isCanReject = false;
    }else if ($scope.seletedArticle.STATUS=='submited') {
      $scope.approveBtn = 'Approve';
      $scope.reJectBtn = 'Reject';
      $scope.isCanApprove = true;
      $scope.isCanReject = true;
    }
    $scope.getAllCommentByArticleId();
    $('#photo').attr('src','file/image/'+$scope.seletedArticle.img_source);
    $('#detailModal').modal({backdrop: 'static', keyboard: false});
  };
  $scope.approve = function() {
    $scope.isProcessing = true;
    $scope.approveBtn = 'Approving...';
    $scope.reJectBtn = 'Rejecte';
    $scope.isCanReject = false;
    var uid = localStorage.getItem('uid');
    data = 'callType=approveArticle&studentName='+$scope.seletedArticle.st_name+'&stid='+$scope.seletedArticle.uid+'&mmid='+uid+'&atid='+$scope.seletedArticle.atid+'&articleTitle='+$scope.seletedArticle.title+'&magazine='+$scope.seletedArticle.magazine_name;
    service.makeRequest(data).then(function(response) {
      $scope.returnData = response.data;
      if ($scope.returnData.status == 1) {
        alert($scope.returnData.msg);
        $scope.isProcessing = false;
        $scope.getAllArticleForMM();
        $scope.closeView();
      } else {
        $scope.isProcessing = false;
        alert($scope.returnData.msg);
      }
    });
  };
  $scope.reject = function() {
    $scope.isProcessing = true;
    $scope.reJectBtn = 'Rejecting...';
    $scope.isCanApprove = false;
    var uid = localStorage.getItem('uid');
    data = 'callType=rejectArticle&studentName='+$scope.seletedArticle.st_name+'&stid='+$scope.seletedArticle.uid+'&mmid='+uid+'&atid='+$scope.seletedArticle.atid+'&articleTitle='+$scope.seletedArticle.title+'&magazine='+$scope.seletedArticle.magazine_name;
    service.makeRequest(data).then(function(response) {
      $scope.returnData = response.data;
      if ($scope.returnData.status == 1) {
        alert($scope.returnData.msg);
        $scope.isProcessing = false;
        $scope.getAllArticleForMM();
        $scope.closeView();
      } else {
        $scope.isProcessing = false;
        alert($scope.returnData.msg);
      }
    });
  };
  $scope.closeView = function() {
    $scope.getAllArticleForMM();
    $('#detailModal').modal('hide');
  };
  $scope.fillterYear = function(){
    var d = new Date();
    var year = d.getFullYear();
    if ($scope.currentAY == 'Current') {
      $scope.currentAY = year;
      $scope.currentFal = "";
    }
    if ($scope.currentAY != year) {
      $scope.isCanApprove = false;
    }
  };
  $scope.fillterFauclties = function(){
    if ($scope.currentFal == 'All') {
      $scope.currentFal = "";
    }
  };
  $scope.fillterStatus = function() {
    if ($scope.currentStatus == 'All') {
      $scope.currentStatus = "";
    }
  };
  $scope.reset = function() {
    $scope.magazineName = "";
    $scope.startDate = "";
    $scope.endDate = "";
  };
  $scope.showEdit = function(index) {
    $('.abc1').hide();
    $('.abc2').show();
    $scope.magazineNameEdit = $scope.sMA[index].magazine_name;
    $scope.startDateEdit = $scope.sMA[index].start_date;
    $scope.endDateEdit = $scope.sMA[index].end_date;
    $scope.selectedMid = $scope.sMA[index].mid;
  };
  $scope.showCreate = function() {
    $('.abc2').hide();
    $('.abc1').show();
    $scope.reset();
  };
});
