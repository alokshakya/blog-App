CApp.service('AuthService', function($q, $http, USER_ROLES) {
 //var LOCAL_USER_DETAILS = 'user_details';
 var BearerToken ='auth_token';
  var isAuthenticated = false;
  var auth_token;
  var user_id;
  var role;
  var baseUrl='http://auth.alokshakya.hasura.me';
 
  function loadUserCredentials() {
    var token = window.localStorage.getItem(BearerToken);
    if (token) {
      useCredentials(token);
    }
  }
 
  function storeUserCredentials(token) {
    window.localStorage.setItem(BearerToken, token);
    useCredentials(window.localStorage.getItem(BearerToken));
  }
 
  function useCredentials(token) {
    
    isAuthenticated = true;
    auth_token = token;
   // alert('auth_token '+auth_token);
      
    // Set the token as header for your requests!
    if(auth_token){
    $http.defaults.headers.common['Authorization'] = 'Bearer '+auth_token;
    }//delete $http.defaults.headers.common['Authorization'];
  }
 
  /*function destroyUserCredentials() {
    
    
  };*/
 
  var login = function(data) {
        // Make a request and receive your auth token from your server
    return  $http.post(baseUrl+'/login',data)
    .then(function successCallback(response) {
    // this callback will be called asynchronously
   // alert('inside login successCallback token in service '+response.data.auth_token);
    window.localStorage.setItem('user_id',response.data.hasura_id);
    window.localStorage.setItem('role',response.data.hasura_roles);
    storeUserCredentials(response.data.auth_token);
    var userdata=
    {
      "type":"select",
      "args":
      {
      "table":"user_details",
      "columns":["name"],
      "where":{"user_id":response.data.hasura_id}

     }
    };
    $http.post('http://data.alokshakya.hasura.me/v1/query',userdata)
    .then(function successCallback(response){
      //alert('user name inside service response.data.name '+response.data[0].name);
      window.localStorage.setItem('user_name',response.data[0].name);


    },function errorCallback(response){
      //alert('user name inside service errorCallback response.data.name '+response.data.name);
      //window.localStorage.setItem('user_name',response.data[0].name);

    });

        window.location.href='/';
  // return $window.location.href='/#/home';
    // when the response is available
    return response;
  }, function errorCallback(response) {
      //alert('inside login errorCallback message in service '+response.data.message);
      return response;
  });
        //storeUserCredentials(name + '.yourServerToken');
        
      
       
  
  };
  var signup = function(data,name) {
        // Make a request and receive your auth token from your server
    return  $http.post(baseUrl+'/signup',data)
    .then(function successCallback(response) {
    // this callback will be called asynchronously
    //alert('inside signup successCallback token '+response.data.auth_token);
    window.localStorage.setItem('user_id',response.data.hasura_id);
    window.localStorage.setItem('role',response.data.hasura_roles);
    storeUserCredentials(response.data.auth_token);
    var q=
    {
       "type":"insert",
       "args":{
        "table":"user_details",
        "objects":[
      {
        "user_id":response.data.hasura_id,
        "name":name
      }
      ]
       
       }
    };
    $http.post('http://data.alokshakya.hasura.me/v1/query',JSON.stringify(q))
    .then (function successCallback(response){

    }, function errorCallback(response){

    });
    window.location.href='/';
    
    return response;
    // when the response is available
  }, function errorCallback(response) {
      //alert('inside login errorCallback message '+response.data.message);
       return response;
  });
  
  };
 
  var logout = function() {
    return $http.post(baseUrl+'/user/logout')
    .then(function successCallback(response) {
    // this callback will be called asynchronously
   // alert('AuthService logged out server successCallback');
    isAuthenticated = false;
   // $http.defaults.headers.common['Authorization'] = undefined;
    window.localStorage.removeItem(BearerToken);
    window.localStorage.removeItem('user_id');
    window.localStorage.removeItem('user_name');
    window.location.href='/';

    return response;
    // when the response is available
  }, function errorCallback(response) {
    //alert('AuthService logged out server errorCallback');
    //if request is also cancealed give success logout message
    window.localStorage.removeItem(BearerToken);
    window.localStorage.removeItem('user_id');
    window.localStorage.removeItem('user_name');
    window.location.href='/';
     return response;
     
  });
  };
 
  var isAuthorized = function(authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (isAuthenticated && authorizedRoles.indexOf(role) !== -1);
  };
  var getUserId = function(){
     var user_id = window.localStorage.getItem('user_id');
     return user_id;
  };
  var getUserName = function(){
     var user_name = window.localStorage.getItem('user_name');
     return user_name;
  };
  var getUserRole = function(){
     var role = window.localStorage.getItem('role');
     return role;
  };
  role=window.localStorage.getItem('role');
 //destroyUserCredentials();
 //window.localStorage.removeItem(LOCAL_USER_DETAILS);
  loadUserCredentials();
 
  return {
    login: login,
    signup: signup,
    logout: logout,
    isAuthorized: isAuthorized,
    isAuthenticated: function() {return isAuthenticated;},
    role: getUserRole,
    getUserId : getUserId,
    getUserName : getUserName
  };
});
