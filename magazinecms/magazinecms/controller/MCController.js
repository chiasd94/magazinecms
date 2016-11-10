module.controller('MCController', function($scope, $rootScope, $timeout, $http, service) {
  $scope.$on('$viewContentLoaded', function() {
    $scope.authen();
  });
  $scope.authen = function() {
    service.authen('MC');
    $scope.setUserInfor();
    $scope.getArticleData();
    $scope.getAllAcademyYear();
    $scope.getCurrentMagazine();
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
  $scope.getArticleData = function() {
    var uid = localStorage.getItem('uid');
    var data = 'callType=getAllArticleByMcId&uid='+uid;
    service.makeRequest(data).then(function(response) {
      $scope.returnData = response.data;
      if ($scope.returnData.status == 1) {
        $scope.sArticle = $scope.returnData.data;
      } else {
        alert($scope.returnData.msg);
      }
    });
    $scope.statusFilter = 'uploaded';
  };
  $scope.getAllAcademyYear = function() {
    var data = 'callType=getAllAcademyYear&';
    var d = new Date();
    var year = d.getFullYear();
    $scope.currentAY = year;
    service.makeRequest(data).then(function(response) {
      $scope.returnData = response.data;
      if ($scope.returnData.status == 1) {
        $scope.sAY = $scope.returnData.data;
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
          $scope.isCanSubmit = true;
        }else {
          $scope.isCanSubmit = false;
        }
      } else {
        $scope.isCanSubmit = false;
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
        // console.log($scope.returnData.msg);
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
  $scope.placeComment = function() {
    if ($scope.txtComment==="" || $scope.txtComment===undefined || $scope.txtComment===null) {
      return false;
    }else {
      var uid = localStorage.getItem('uid');
      var data = 'callType=comment&uid='+uid+'&atid='+$scope.seletedArticle.atid+'&comment='+$scope.txtComment;
      service.makeRequest(data).then(function(response) {
        $scope.returnData = response.data;
        if ($scope.returnData.status == 1) {
          $scope.getAllCommentByArticleId();
          $scope.txtComment = null;
          alert($scope.returnData.msg);
        } else {
          alert($scope.returnData.msg);
        }
      });
      return true;
    }
  };
  $scope.submit = function () {
    $scope.isSubmiting = true;
    $scope.submitBtn = 'Submiting...';
    $scope.isSubmit = true;
    var uid = localStorage.getItem('uid');
    if ($scope.hasComment===true) {
      data = 'callType=submitArticle&studentName='+$scope.seletedArticle.full_name+'&stid='+$scope.seletedArticle.uid+'&mcid='+uid+'&mcName='+$scope.fullName+'&atid='+$scope.seletedArticle.atid+'&articleTitle='+$scope.seletedArticle.title+'&magazine='+$scope.seletedArticle.magazine_name;
      service.makeRequest(data).then(function(response) {
        $scope.returnData = response.data;
        if ($scope.returnData.status == 1) {
          alert($scope.returnData.msg);
          $scope.closeView();
        } else {
          alert($scope.returnData.msg);
        }
      });
    }else {
      alert('You must comment to this article first!');
      $scope.isSubmiting = false;
      $scope.submitBtn = 'Submit';
      $scope.isSubmit = false;
    }
  };
  $scope.view = function(index) {
    $scope.isSubmiting = false;
    $scope.seletedArticle = $scope.sArticle[index];
    if ($scope.seletedArticle.STATUS=='submited') {
      $scope.isSubmit = true;
      $scope.submitBtn = 'Submited';
    }else {
      $scope.isSubmit = false;
      $scope.submitBtn = 'Submit';
    }
    $scope.getAllCommentByArticleId();
    $('#photo').attr('src','file/image/'+$scope.seletedArticle.img_source);
    $('#detailModal').modal({backdrop: 'static', keyboard: false});
  };
  $scope.closeView = function() {
    $scope.getArticleData();
    $scope.comment = null;
    $scope.hasComment = false;
    $('#detailModal').modal('hide');
  };
  $scope.fillterYear = function(index) {
    $scope.currentAY = $scope.sAY[index].year;
  };
  $scope.fillterStatus = function(value) {
    if (value===0) {
      $scope.statusFilter = 'uploaded';
    }else {
      $scope.statusFilter = 'submited';
    }
  };
});
