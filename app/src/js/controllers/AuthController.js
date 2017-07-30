CApp.controller("AuthController",
  ['$scope','$rootScope','$http','$templateCache','$location', '$localStorage', '$window','AuthService','Auth',
  function ($scope,$rootScope, $http, $templateCache,$location, $localStorage, $window, AuthService,Auth) {
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
   
    if($scope.auth.user_id){
      $window.location.href='/#/home';
    }
    else if(!$scope.auth.user_id){
      $window.location.href='/#/login';
    }
    
$scope.auth.showLogin = function(){
    $scope.auth.signup_form=false;
    $scope.auth.login_form=true;
};

$scope.auth.showSignUp = function(){
$scope.auth.login_form=false;
    $scope.auth.signup_form=true;
};


    $scope.auth.signup = function(user){
      var data=
      {
        "username":user.name,
        "email":user.email,
        "password":user.password
      };
      AuthService.signup(data)
            .then(function(response) {

          console.log('response '+response.data);
              console.log('response controller message '+response.data.message);
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
    alert('email '+user.email);
    alert('password '+user.password);
    var data={"email":user.email,"password":user.password};
    //AuthService.login(data);
    AuthService.login(data)
    .then(function successCallback(response) {
    // this callback will be called asynchronously
    alert('inside login successCallback in controller ');
    $scope.auth.login_error_condition=true;
    $scope.auth.login_error=response.data.message;
 
    // $window.location.href='/#/home';
  // return $window.location.href='/#/home';
  
    // when the response is available
  }, function errorCallback(response) {
      alert('inside login errorCallback message in controller');
    
  });    
          
            
  };
  // logout function
  $scope.auth.logout = function(user)  {
    alert('Logout pressed');
    AuthService.logout()
            .then(function(response) {
             $scope.auth.logout_error_condition=true;
             alert('logout response in controller '+response.data.message);
             $scope.auth.logout_error=response.data.message;

        }, function(response) {
          alert('Inside failed logout');

          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
          $scope.auth.logout_error_condition=true;
          $scope.auth.logout_error=response.data.message;
          console.log('error message '+response.data.message);
      });
            
  };

}]);