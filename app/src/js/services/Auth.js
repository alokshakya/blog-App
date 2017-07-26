CApp.factory('Auth', ['$http', '$localStorage', '$window', function($http, $localStorage,$window){
        var baseUrl = "http://auth.c100.hasura.me";
        var Auth={};
        Auth.signup = function(data){
    return $http.post(baseUrl+'/signup',data);
};

Auth.login = function(data){
    return $http.post(baseUrl+'/login',data);
};
Auth.logout = function(){
    $http.post(baseUrl+'/user/logout');
    //alert('token from localStorage : '+token);
    delete $localStorage.auth_token;
    //return $http({method:post,url:baseUrl+'/user/logout',headers:{Authorization:'Bearer '+token}
    return {"message":"logged out"};
};
Auth.del = function(){
    delete $localStorage.auth_token;
};
return Auth;      
 
}]);