CApp.factory('Auth', ['$http', '$localStorage', '$window', function($http, $localStorage,$window){
        var baseUrl = "http://auth.c100.hasura.me";
        var Auth={};
        Auth.signup = function(data){
    return $http.post(baseUrl+'/signup',data)
    .then(function successCallback(response) {
    // this callback will be called asynchronously
    $localStorage.auth_token=response.data.auth_token;
    $localStorage.user_id=response.data.hasura_id;
    $localStorage.role=response.data.hasura_roles;
    
$window.location.href='/#/home';
return {"message":"signup succes"};
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    $localStorage.auth_token=undefined;
    alert('signup in Auth Service errorCallback and auth_token '+$localStorage.auth_token);
    return {"message":"signup Failed"};
  });
};

Auth.login = function(data){
    var res={};
    return $http.post(baseUrl+'/login',data)
    .then(function successCallback(response) {
    // this callback will be called asynchronously
    $localStorage.auth_token=response.data.auth_token;
    $localStorage.user_id=response.data.hasura_id;
    $localStorage.role=response.data.hasura_roles;
    
$window.location.href='/#/home';
return {"message":"login succes"};
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    $localStorage.auth_token=undefined;
    alert('login in Auth Service errorCallback and auth_token '+$localStorage.auth_token);
    return {"message":"login Failed"};
  });
    
};
Auth.logout = function(){
    delete $localStorage.auth_token;
    delete $localStorage.user_id;
    delete $localStorage.role;
  return  $http.post(baseUrl+'/user/logout');
    
    //alert('token from localStorage : '+token);
    
    //return $http({method:post,url:baseUrl+'/user/logout',headers:{Authorization:'Bearer '+token}

};
Auth.getUserId=function(){
return $localStorage.user_id;
};

return Auth;      
 
}]);