module.controller('guestController', function($scope, $rootScope, $timeout, $http, service) {
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
