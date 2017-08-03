CApp.controller("AuthController",
  ['$scope','$rootScope','$http','$templateCache','$location', '$window','AuthService',
  function ($scope,$rootScope, $http, $templateCache,$location, $window, AuthService) {
    $scope.auth={};
    

    $scope.auth.signup_error_condition=false;
    $scope.auth.signup_error='';
    $scope.auth.login_error_condition=false;
    $scope.auth.login_error='';
    $scope.auth.logout_error_condition=false;
    $scope.auth.logout_error='';
    $scope.auth.login_form=false;
    $scope.auth.signup_form=false;
    $scope.auth.user_id=AuthService.getUserId();
    $scope.auth.user_name=AuthService.getUserName();
    //alert('username in auth '+$scope.auth.user_name);
   
    if($scope.auth.user_id){
      $scope.auth.logoutButton=true;
      $scope.auth.loginButton=false;
      $window.location.href='/#/home';
    }
    else if(!$scope.auth.user_id){
         $scope.auth.loginButton=true;
         $scope.auth.logoutButton=false;
         $window.location.href='/#/login';
    }
    



    $scope.auth.signup = function(user){
      var data=
      {
        "username":user.name,
        "email":user.email,
        "password":user.password
      };
      AuthService.signup(JSON.stringify(data),user.name)
            .then(function(response) {

        //  console.log('response '+response.data);
             // console.log('response controller message '+response.data.message);
              //store auth token in local storage using ngStorage
              $scope.auth.signup_error_condition=true;
              $scope.auth.signup_error=response.data.message;

        }, function(response) {
          $scope.auth.signup_error_condition=true;
          $scope.auth.signup_error=response.data.message;

      });


    }; 
    //login functioin
  $scope.auth.login = function(user)  {
    var data={"email":user.email,"password":user.password};
    //AuthService.login(data);
    AuthService.login(data)
    .then(function successCallback(response) {
    // this callback will be called asynchronously
    //alert('inside login successCallback in controller ');
    $scope.auth.user_name=AuthService.getUserName();
       $scope.auth.login_error_condition=true;
    $scope.auth.login_error=response.data.message;
    //alert('user from login Controller successCallback '+AuthService.getUserName());
     $window.location.href='/';
  // return $window.location.href='/#/home';
  
    // when the response is available
  }, function errorCallback(response) {
    $scope.auth.user_id=AuthService.getUserId();
    $scope.auth.user_name=AuthService.getUserName();
    //alert('user from login Controller errorCallback '+AuthService.getUserName());
    window.location.href='/';
      //alert('inside login errorCallback message in controller');
    
  });    
          
            
  };
  // logout function
  $scope.auth.logout = function(user)  {
    //alert('Logout pressed');
    AuthService.logout()
            .then(function(response) {
            
            // alert('logout response in controller '+response.data.message);
            

        }, function(response) {
          //alert('Inside failed logout');

          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
         
      });
            
  };

}]);