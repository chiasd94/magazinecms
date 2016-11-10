module.controller('adminMMController', function($scope, $rootScope, $timeout, $http, service) {
    angular.element(document).ready(function() {
        $scope.getAllMMAccount();
        $scope.getAllOldMMAccount();
    });
    $scope.createMMAccount = function() {
        var data = 'callType=createMMAccount&fullName='+$scope.fullNameCreate+'&dob='+$scope.dob+'&gender='+$scope.gender+'&password='+$scope.password+'&phone='+$scope.phone+'&email='+$scope.email;
        service.makeRequest(data).then(function(response) {
            $scope.returnData = response.data;
            if ($scope.returnData.status == 1) {
                alert($scope.returnData.msg);
                $scope.getAllMMAccount();
                $scope.getAllOldMMAccount();
            } else {
                alert($scope.returnData.msg);
            }
        });
    };
    $scope.getAllMMAccount = function() {
        var data = 'callType=getAllMMAccount&';
        $scope.sMM = null;
        service.makeRequest(data).then(function(response) {
            $scope.returnData = response.data;
            if ($scope.returnData.status == 1) {
                $scope.sMM = $scope.returnData.data;
            } else {
                alert($scope.returnData.msg);
            }
        });
    };
    $scope.getAllOldMMAccount = function() {
      var data = 'callType=getAllOldMMAccount&';
      $scope.oMM = null;
      service.makeRequest(data).then(function(response) {
          $scope.returnData = response.data;
          if ($scope.returnData.status == 1) {
              $scope.oMM = $scope.returnData.data;
          } else {
              alert($scope.returnData.msg);
          }
      });
    };
    $scope.editMMAccount = function() {
      var data = 'callType=editMMAccount&uid='+$scope.uid+'&fullName='+$scope.fullNameEdit+'&dob='+$scope.dobEdit+'&gender='+$scope.genderEdit+'&currentPassword='+$scope.currentPassword+'&password='+$scope.passwordEdit+'&phone='+$scope.phoneEdit+'&currentEmail='+$scope.currentEmail+'&newEmail='+$scope.emailEdit;
      service.makeRequest(data).then(function(response) {
          $scope.returnData = response.data;
          if ($scope.returnData.status == 1) {
              alert($scope.returnData.msg);
              $scope.getAllMMAccount();
              $scope.getAllOldMMAccount();
          } else {
              alert($scope.returnData.msg);
          }
      });
    };
    $scope.deleteMMRole = function(index) {
      var data = 'callType=deteleMMRole&uid='+$scope.sMM[index].uid;
      service.makeRequest(data).then(function(response) {
          $scope.returnData = response.data;
          if ($scope.returnData.status == 1) {
            $scope.getAllMMAccount();
            $scope.getAllOldMMAccount();
              alert($scope.returnData.msg);
          } else {
              alert($scope.returnData.msg);
          }
      });
    };
    $scope.remakeMMRole = function(index){
      var data;
      if ($scope.sMM===undefined || $scope.sMM===null) {
        data = 'callType=remakeMMRole&uid='+$scope.oMM[index].uid+'&currentMMId=';
      }else {
        data = 'callType=remakeMMRole&uid='+$scope.oMM[index].uid+'&currentMMId='+$scope.sMM[0].uid;
      }
      service.makeRequest(data).then(function(response) {
          $scope.returnData = response.data;
          if ($scope.returnData.status == 1) {
              alert($scope.returnData.msg);
              $scope.getAllMMAccount();
              $scope.getAllOldMMAccount();
          } else {
              alert($scope.returnData.msg);
          }
      });
    };
    $scope.reset = function() {
        $scope.fullNameCreate = "";
        $scope.dob = "";
        $scope.gender = "";
        $scope.email = "";
        $scope.password = "";
        $scope.phone = "";
        $scope.selectedFalcities = "";
    };
    $scope.showEdit = function(index) {
        $('.abc1').hide();
        $('.abc2').show();
        $scope.uid = $scope.sMM[index].uid;
        $scope.fullNameEdit = $scope.sMM[index].full_name;
        $scope.dobEdit = $scope.sMM[index].dob;
        $scope.genderEdit = $scope.sMM[index].gender;
        $scope.emailEdit = $scope.sMM[index].email;
        $scope.passwordEdit = "";
        $scope.phoneEdit = $scope.sMM[index].phone;
        $scope.currentEmail = $scope.sMM[index].email;
        $scope.currentPassword = $scope.sMM[index].password;
    };
    $scope.showEditRemake = function(index) {
        $('.abc1').hide();
        $('.abc2').show();
        $scope.uid = $scope.oMM[index].uid;
        $scope.fullNameEdit = $scope.oMM[index].full_name;
        $scope.dobEdit = $scope.oMM[index].dob;
        $scope.genderEdit = $scope.oMM[index].gender;
        $scope.emailEdit = $scope.oMM[index].email;
        $scope.passwordEdit = "";
        $scope.phoneEdit = $scope.oMM[index].phone;
        $scope.currentEmail = $scope.oMM[index].email;
        $scope.currentPassword = $scope.oMM[index].password;
    };
    $scope.showCreate = function() {
      $('.abc2').hide();
      $('.abc1').show();
      $scope.reset();
    };$scope.showChangPass = function() {
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
