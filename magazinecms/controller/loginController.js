module.controller('loginController', function($scope, $rootScope, $timeout, $http,service) {

  $scope.checkHasLogin = function(){
    if (localStorage.getItem('loginData')!== undefined && localStorage.getItem('loginData') !==null) {
      var loginData = JSON.parse(localStorage.getItem('loginData'));
      var loginReturnData = JSON.parse(localStorage.getItem('loginReturnData'));
      if (loginData.isLogin===true) {
        $scope.router(loginReturnData);
      }else {
        $('#body').removeClass("body-hide");
      }
    }else if (localStorage.getItem('saveLoginSession')==='false') {
      service.clearLoginData();
      $('#body').removeClass("body-hide");
    }else {
      $('#body').removeClass("body-hide");
    }
  };
  $scope.login = function() {
    var data = 'callType=checkLogin&email='+$scope.email+'&password='+$scope.password;
    service.makeRequest(data).then(function(response){
      $scope.returnData = response.data;
      if ($scope.returnData.status == 1) {
        localStorage.setItem('uid',$scope.returnData.uid);
        $scope.saveLoginInfor();
        $scope.router($scope.returnData);
      }else {
        alert($scope.returnData.msg);
      }
    });
  };
  $scope.saveLoginInfor = function(){
    if ($('#remember-me').is(':checked')) {
      var loginData = {isLogin:true};
      localStorage.setItem('loginData',JSON.stringify(loginData));
      localStorage.setItem('loginReturnData',JSON.stringify($scope.returnData));
      return true;
    }else {
      return false;
    }
  };
  $scope.router = function(data) {
    switch (data.role) {
      case 'Admin':
      if ($('#remember-me').is(':checked')) {
        localStorage.setItem('saveLoginSession',true);
        localStorage.setItem('role','Admin');
        localStorage.setItem('isLogin',true);
      }else {
        localStorage.setItem('saveLoginSession',false);
        sessionStorage.setItem('role','Admin');
        sessionStorage.setItem('isLogin',true);
      }
      localStorage.setItem('fullName',data.fullName);
      location.replace("admin.html");
      break;
      case 'MM':
      if ($('#remember-me').is(':checked')) {
        localStorage.setItem('saveLoginSession',true);
        localStorage.setItem('role','MM');
        localStorage.setItem('isLogin',true);
      }else {
        localStorage.setItem('saveLoginSession',false);
        sessionStorage.setItem('role','MM');
        sessionStorage.setItem('isLogin',true);
      }
      localStorage.setItem('fullName',data.fullName);
      location.replace("mm-view-magazine.html");
      break;
      case 'MC':
      if ($('#remember-me').is(':checked')) {
        localStorage.setItem('saveLoginSession',true);
        localStorage.setItem('role','MC');
        localStorage.setItem('isLogin',true);
      }else {
        localStorage.setItem('saveLoginSession',false);
        sessionStorage.setItem('role','MC');
        sessionStorage.setItem('isLogin',true);
      }
      localStorage.setItem('fullName',data.fullName);
      location.replace("mc-view-all-articles.html");
      break;
      case 'Student':
      if ($('#remember-me').is(':checked')) {
        localStorage.setItem('saveLoginSession',true);
        localStorage.setItem('role','Student');
        localStorage.setItem('isLogin',true);
      }else {
        localStorage.setItem('saveLoginSession',false);
        sessionStorage.setItem('role','Student');
        sessionStorage.setItem('isLogin',true);
      }
      localStorage.setItem('fullName',data.fullName);
      location.replace("student-view-all-articles.html");
      break;
      case 'Guest':
      if ($('#remember-me').is(':checked')) {
        localStorage.setItem('saveLoginSession',true);
        localStorage.setItem('role','Guest');
        localStorage.setItem('isLogin',true);
      }else {
        localStorage.setItem('saveLoginSession',false);
        sessionStorage.setItem('role','Guest');
        sessionStorage.setItem('isLogin',true);
      }
      localStorage.setItem('fullName',data.fullName);
      location.replace("guest.html");
      break;
      default:
    }
  };
});
