module.controller('adminMCController', function($scope, $rootScope, $timeout, $http, service) {
    angular.element(document).ready(function() {
        $scope.getAllFalcuties();
        $scope.getAllMCAccount();
        $scope.getAllOldMCAccount();
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
    $scope.createMCAccount = function() {
        var data = 'callType=createMCAccount&fullName='+$scope.fullNameCreate+'&dob='+$scope.dob+'&gender='+$scope.gender+'&password='+$scope.password+'&phone='+$scope.phone+'&email='+$scope.email+'&facultiesName='+$scope.selectedFalcities;
        console.log(data);
        service.makeRequest(data).then(function(response) {
            $scope.returnData = response.data;
            if ($scope.returnData.status == 1) {
                alert($scope.returnData.msg);
                $scope.getAllMCAccount();
                $scope.getAllOldMCAccount();
            } else {
                alert($scope.returnData.msg);
            }
        });
    };
    $scope.getAllMCAccount = function() {
        $scope.sMC = null;
        var data = 'callType=getAllMCAccount&';
        service.makeRequest(data).then(function(response) {
            $scope.returnData = response.data;
            if ($scope.returnData.status == 1) {
                $scope.sMC = $scope.returnData.data;
            } else {
                alert($scope.returnData.msg);
            }
        });
    };
    $scope.getAllOldMCAccount = function() {
        var data = 'callType=getAllOldMCAccount&';
        service.makeRequest(data).then(function(response) {
            $scope.returnData = response.data;
            if ($scope.returnData.status == 1) {
                $scope.oMC = $scope.returnData.data;
            } else {
                alert($scope.returnData.msg);
            }
        });
    };
    $scope.editMCAccount = function() {
      var data = 'callType=editMCAccount&uid='+$scope.uid+'&fullName='+$scope.fullNameEdit+'&dob='+$scope.dobEdit+'&gender='+$scope.genderEdit+'&currentPassword='+$scope.currentPassword+'&password='+$scope.passwordEdit+'&phone='+$scope.phoneEdit+'&currentEmail='+$scope.currentEmail+'&newEmail='+$scope.emailEdit+'&newFacultiesName='+$scope.selectedFalcitiesEdit;
      service.makeRequest(data).then(function(response) {
          $scope.returnData = response.data;
          if ($scope.returnData.status == 1) {
              alert($scope.returnData.msg);
              $scope.getAllMCAccount();
              $scope.getAllOldMCAccount();
          } else {
              alert($scope.returnData.msg);
          }
      });
    };
    $scope.deleteMCRole = function(index) {
      var data = 'callType=deteleMCRole&uid='+$scope.sMC[index].uid;
      service.makeRequest(data).then(function(response) {
          $scope.returnData = response.data;
          if ($scope.returnData.status == 1) {
            $scope.getAllMCAccount();
            $scope.getAllOldMCAccount();
              alert($scope.returnData.msg);
          } else {
              alert($scope.returnData.msg);
          }
      });
    };
    $scope.remakeMCRole = function(index){
      var data;
      if ($scope.sMC===undefined || $scope.sMC===null) {
        data = 'callType=remakeMCRole&uid='+$scope.oMC[index].uid+'&facultiesName='+$scope.oMC[index].falcuties_name+'&currentMCId=';
      }else {
        data = 'callType=remakeMCRole&uid='+$scope.oMC[index].uid+'&facultiesName='+$scope.oMC[index].falcuties_name+'&currentMCId='+$scope.sMC[0].uid;
      }
      service.makeRequest(data).then(function(response) {
          $scope.returnData = response.data;
          if ($scope.returnData.status == 1) {
              alert($scope.returnData.msg);
              $scope.getAllMCAccount();
              $scope.getAllOldMCAccount();
          } else {
              alert($scope.returnData.msg);
          }
      });
    };
    $scope.fillterFaculties = function() {
      if ($scope.selectedFalcitiesFillter=="All") {
        $scope.selectedFalcitiesFillter = "";
      }
    };
    $scope.fillterMC = function () {
      console.log('start');
      if ($scope.selectedFalcitiesFillter1 == 'All') {
        console.log('here');
        $scope.selectedFalcitiesFillter1 = "";
      }
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
        $scope.uid = $scope.sMC[index].uid;
        $scope.fullNameEdit = $scope.sMC[index].full_name;
        $scope.dobEdit = $scope.sMC[index].dob;
        $scope.genderEdit = $scope.sMC[index].gender;
        $scope.emailEdit = $scope.sMC[index].email;
        $scope.passwordEdit = "";
        $scope.phoneEdit = $scope.sMC[index].phone;
        $scope.currentEmail = $scope.sMC[index].email;
        $scope.selectedFalcitiesEdit = $scope.sMC[index].falcuties_name;
        $scope.currentPassword = $scope.sMC[index].password;
    };
    $scope.showEditRemake = function(index) {
        $('.abc1').hide();
        $('.abc2').show();
        $scope.uid = $scope.oMC[index].uid;
        $scope.fullNameEdit = $scope.oMC[index].full_name;
        $scope.dobEdit = $scope.oMC[index].dob;
        $scope.genderEdit = $scope.oMC[index].gender;
        $scope.emailEdit = $scope.oMC[index].email;
        $scope.passwordEdit = "";
        $scope.phoneEdit = $scope.oMC[index].phone;
        $scope.currentEmail = $scope.oMC[index].email;
        $scope.selectedFalcitiesEdit = $scope.oMC[index].falcuties_name;
        $scope.currentPassword = $scope.oMC[index].password;
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
