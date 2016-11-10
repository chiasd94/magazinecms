module.controller('falcutiesController', function($scope, $rootScope, $timeout, $http, service) {
    angular.element(document).ready(function() {
        $scope.getAllFalcuties();
    });
    $scope.createFalcuties = function() {
        var data = 'callType=createFalcuties&falcutiesName=' + $scope.falcutiesName;
        service.makeRequest(data).then(function(response) {
            $scope.returnData = response.data;
            if ($scope.returnData.status == 1) {
                alert($scope.returnData.msg);
                $scope.getAllFalcuties();
            } else {
                alert($scope.returnData.msg);
            }
        });
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
    $scope.reset = function() {
        $scope.falcutiesName = "";
    };
    $scope.showEdit = function(index) {
        $('.abc1').hide();
        $('.abc2').show();
        $scope.editFalcutiesName = $scope.aFalcuties[index].falcuties_name;
        $scope.selectedfalcutiesName = $scope.aFalcuties[index].falcuties_name;
    };
    $scope.showCreate = function() {
      $('.abc2').hide();
      $('.abc1').show();
      $scope.editFalcutiesName = "";
      $scope.selectedfalcutiesName = "";
    };
    $scope.edit = function() {
      if ($scope.editFalcutiesName!=$scope.selectedfalcutiesName) {
        var data = 'callType=editFalcuties&falcutiesName='+$scope.selectedfalcutiesName+'&newFalcutiesName='+$scope.editFalcutiesName;
        service.makeRequest(data).then(function(response) {
            $scope.returnData = response.data;
            if ($scope.returnData.status == 1) {
                alert($scope.returnData.msg);
                $scope.getAllFalcuties();
            } else {
                alert($scope.returnData.msg);
            }
        });
      }else {
        alert('no change!');
      }
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
