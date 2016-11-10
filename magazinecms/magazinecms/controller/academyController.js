module.controller('academyController', function($scope, $rootScope, $timeout, $http, service) {
    angular.element(document).ready(function() {
        $scope.getAllAcademyYear();
    });
    $scope.createAcademyYear = function() {
        var data = 'callType=createAcademyYear&year=' + $scope.academyYear;
        service.makeRequest(data).then(function(response) {
            $scope.returnData = response.data;
            if ($scope.returnData.status == 1) {
                alert($scope.returnData.msg);
                $scope.getAllAcademyYear();
            } else {
                alert($scope.returnData.msg);
            }
        });
    };
    $scope.getAllAcademyYear = function() {
        var data = 'callType=getAllAcademyYear&';
        service.makeRequest(data).then(function(response) {
            $scope.returnData = response.data;
            if ($scope.returnData.status == 1) {
                $scope.aYear = $scope.returnData.data;
            } else {
                alert($scope.returnData.msg);
            }
        });
    };
    $scope.reset = function() {
        $scope.academyYear = "";
    };
    $scope.showEdit = function(index) {
        $('.abc1').hide();
        $('.abc2').show();
        $scope.editYear = $scope.aYear[index].year;
        $scope.selectedYear = $scope.aYear[index].year;
    };
    $scope.showCreate = function() {
      $('.abc2').hide();
      $('.abc1').show();
      $scope.editYear = "";
      $scope.selectedYear = "";
    };
    $scope.edit = function() {
      if ($scope.selectedYear!=$scope.editYear) {
        var data = 'callType=editAcademyYear&year='+$scope.selectedYear+'&newYear='+$scope.editYear;
        service.makeRequest(data).then(function(response) {
            $scope.returnData = response.data;
            if ($scope.returnData.status == 1) {
                alert($scope.returnData.msg);
                $scope.getAllAcademyYear();
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
