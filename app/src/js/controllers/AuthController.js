CApp.controller("AuthController",
  ['$scope','$rootScope','$http','$templateCache','$location', '$localStorage', '$window','Auth',
  function ($scope,$rootScope, $http, $templateCache,$location, $localStorage, $window, Auth) {
    $scope.auth={};
    $scope.auth.signup_error_condition=false;
    $scope.auth.signup_error='';
    $scope.auth.login_error_condition=false;
    $scope.auth.login_error='';
    $scope.auth.logout_error_condition=false;
    $scope.auth.logout_error='';
    
    $scope.auth.signup = function(user){
      var data=
      {
        "username":user.name,
        "email":user.email,
        "password":user.password
      };
      Auth.signup(data)
            .then(function(response) {

          console.log('response '+response);
              console.log('auth_token is '+response.data.auth_token);
              //store auth token in local storage using ngStorage
              $scope.auth.signup_error_condition=false;
              $localStorage.auth_token=response.data.auth_token;
              $localStorage.user_details=response.data;
              console.log('$localStorage.auth_token '+$localStorage.auth_token);
              $window.location.href='/ui.html';

        }, function(response) {
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
          $scope.auth.signup_error_condition=true;
          $scope.auth.signup_error=response.data.message;
          console.log('error message '+response.data.message);

      });


    }; 
    //login functioin
  $scope.auth.login = function(user)  {
    var data={"email":user.email,"password":user.password};
    Auth.login(data)
          .then(function(response) {

          console.log('response '+response);
              console.log('auth_token is '+response.data.auth_token);
              //store auth token in local storage using ngStorage
              $scope.auth.login_error_condition=false;
              $localStorage.auth_token=response.data.auth_token;
              $localStorage.user_details=response.data;
              console.log('$localStorage.auth_token '+$localStorage.auth_token);
              $window.location.href='/ui.html';

        }, function(response) {
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
          $scope.auth.login_error_condition=true;
          $scope.auth.login_error=response.data.message;
          console.log('error message '+response.data.message);

      });
            
  };
  // logout function
  $scope.auth.logout = function(user)  {
    alert('Logout pressed');
    Auth.logout()
            .then(function(response) {
              $window.location.href='/signup';

        }, function(response) {
          alert('Inside failed logout');

          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
          $scope.auth.logout_error_condition=true;
          $scope.auth.logout_error=response.message;
          console.log('error message '+response.message);
      });
  };

 
      
        
      
    
  $scope.auth_token = $localStorage.token; 
}]);