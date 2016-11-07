module.service('service',function($rootScope,$http){
  this.makeRequest = function(data) {
    var url = "http://localhost:69/MagazineCMS/server_side/api.php";
    var returnData;
    var request = $http({
      method: "post",
      url: url,
      data: data,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    request.success(function (data) {
      return data;
    });
    request.error(function() {
      return JSON.stringify({ status: 0 },{ msg: 'Make request error'});
    });
    return request;
  };
  this.authen = function(page) {
    var isLogin;
    var role;
    var saveLoginSession = localStorage.getItem('saveLoginSession');
    if (saveLoginSession === 'true') {
      isLogin = localStorage.getItem('isLogin');
      role = localStorage.getItem('role');
      this.switchRole(isLogin,page,role);
    }else if (saveLoginSession==='false' && saveLoginSession!== null && saveLoginSession!== undefined) {
      isLogin = sessionStorage.getItem('isLogin');
      role = sessionStorage.getItem('role');
      this.switchRole(isLogin,page,role);
    }else {
      this.clearLoginData();
      location.replace('login.html');
    }
  };
  this.switchRole = function(isLogin,page,role) {
    if (isLogin === undefined || isLogin === false) {
      location.replace('login.html');
    }else {
      switch (page) {
        case 'admin':
          if (role != 'Admin') {
            this.clearLoginData();
            location.replace('login.html');
          }else {
            $('#body').removeClass("body-hide");
          }
          break;
          case 'MM':
          if (role != 'MM') {
            this.clearLoginData();
            location.replace('login.html');
          }else {
            $('#body').removeClass("body-hide");
          }
          break;
          case 'MC':
          if (role != 'MC') {
            this.clearLoginData();
            location.replace('login.html');
          }else {
            $('#body').removeClass("body-hide");
          }
          break;
          case 'Student':
          if (role != 'Student') {
            this.clearLoginData();
            location.replace('login.html');
          }else {
            $('#body').removeClass("body-hide");
          }
          break;
          case 'Guest':
          if (role != 'Guest') {
            this.clearLoginData();
            location.replace('login.html');
          }else {
            $('#body').removeClass("body-hide");
          }
          break;
        default:

      }
    }
  };
  this.clearLoginData = function() {
    localStorage.removeItem('loginData');
    localStorage.removeItem('isLogin');
    localStorage.removeItem('role');
    localStorage.removeItem('role');
    localStorage.removeItem('saveLoginSession');
  };
  this.uploadImage = function (form_data) {
    var url = "http://localhost:69/MagazineCMS/server_side/upload.php";
    var returnData;
    var request = $http({
      method: "post",
      url: url,
      data: form_data,
      cache: false,
      contentType: false,
      processData: false,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    request.success(function (data) {
      console.log(data);
      return data;
    });
    request.error(function() {
      return JSON.stringify({ status: 0 },{ msg: 'Make request error'});
    });
    return request;
  };
});
module.service('fileUpload', ['$http', function ($http) {
  this.uploadFileToUrl = function(file, uploadUrl){
    var fd = new FormData();
    fd.append('file', file);

    $http.post(uploadUrl, fd, {
      transformRequest: angular.identity,
      headers: {'Content-Type': undefined}
    })

    .success(function(data){
      console.log(data);
    })

    .error(function(){
    });
  };
}]);
