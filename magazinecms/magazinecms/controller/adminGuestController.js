module.controller('adminGuestController', function($scope, $rootScope, $timeout, $http, service) {
  angular.element(document).ready(function() {
      $scope.getAllFalcuties();
      $scope.getAllGuestAccount();
  });
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
  $scope.getAllGuestAccount = function() {
      $scope.sG = null;
      var data = 'callType=getAllGuestAccount&';
      service.makeRequest(data).then(function(response) {
          $scope.returnData = response.data;
          if ($scope.returnData.status == 1) {
              $scope.sG = $scope.returnData.data;
          } else {
              alert($scope.returnData.msg);
          }
      });
  };
  $scope.createGuestAccount = function(){
    var data = 'callType=createGuestAccount&email='+$scope.email+'&password='+$scope.password+'&facultiesName='+$scope.selectedFalcities;
    service.makeRequest(data).then(function(response) {
        $scope.returnData = response.data;
        if ($scope.returnData.status == 1) {
            $scope.getAllGuestAccount();
            alert($scope.returnData.msg);
        } else {
            alert($scope.returnData.msg);
        }
    });
  };
  $scope.editGuestAccount = function(){
    var data = 'callType=editGuestAccount&uid='+$scope.uid+'&currentEmail='+$scope.currentEmail+'&newEmail='+$scope.emailEdit+'&password='+$scope.passwordEdit+'&facultiesName='+$scope.selectedFalcities;
    service.makeRequest(data).then(function(response) {
        $scope.returnData = response.data;
        if ($scope.returnData.status == 1) {
            $scope.getAllGuestAccount();
            alert($scope.returnData.msg);
        } else {
            alert($scope.returnData.msg);
        }
    });
  };
  $scope.deleteGuestAccount = function(index){
    var data = 'callType=deleteGuestAccount&uid='+$scope.sG[index].uid;
    service.makeRequest(data).then(function(response) {
        $scope.returnData = response.data;
        if ($scope.returnData.status == 1) {
            $scope.getAllGuestAccount();
            alert($scope.returnData.msg);
        } else {
            alert($scope.returnData.msg);
        }
    });
  };
  $scope.reset = function() {
      $scope.email = "";
      $scope.password = "";
      $scope.selectedFalcities = "";
  };
  $scope.showEdit = function(index) {
      $('.abc1').hide();
      $('.abc2').show();
      $scope.uid = $scope.sG[index].uid;
      $scope.currentEmail = $scope.sG[index].email;
      $scope.emailEdit = $scope.sG[index].email;
      $scope.passwordEdit = "";
      $scope.selectedFalcitiesEdit = $scope.sG[index].falcuties_name;
      $scope.currentPassword = $scope.sG[index].password;
  };
  $scope.showCreate = function() {
    $('.abc2').hide();
    $('.abc1').show();
    $scope.reset();
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
});
