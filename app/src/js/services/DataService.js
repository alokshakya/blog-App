CApp.service('DataService', function($q, $http) {
  var baseUrl='http://data.c100.hasura.me/v1/query';
 
  
 
  var login = function(data) {
        // Make a request and receive your auth token from your server
    return  $http.post(baseUrl+'/login',data)
    .then(function successCallback(response) {
    // this callback will be called asynchronously
    alert('inside login successCallback token in service '+response.data.auth_token);
    window.localStorage.setItem('user_id',response.data.hasura_id);
    window.localStorage.setItem('role',response.data.hasura_roles);
    storeUserCredentials(response.data.auth_token);
    window.location.href='#home';
  // return $window.location.href='/#/home';
    // when the response is available
    return response;
  }, function errorCallback(response) {
      alert('inside login errorCallback message in service '+response.data.message);
      return response;
  });
        //storeUserCredentials(name + '.yourServerToken');
        
      
       
  
  };
  var signup = function(data) {
        // Make a request and receive your auth token from your server
    return  $http.post(baseUrl+'/signup',data)
    .then(function successCallback(response) {
    // this callback will be called asynchronously
    //alert('inside signup successCallback token '+response.data.auth_token);
    window.localStorage.setItem('user_id',response.data.hasura_id);
    window.localStorage.setItem('role',response.data.hasura_roles);
    storeUserCredentials(response.data.auth_token);
    window.location.href='/#/home';
    
    return response;
    // when the response is available
  }, function errorCallback(response) {
      //alert('inside login errorCallback message '+response.data.message);
       return response;
  });
  
  };
 
  var addLike = function(data) {
    return $http.post(baseUrl,data)
    .then(function successCallback(response) {
    // this callback will be called asynchronously
    //alert('inside signup successCallback token '+response.data.auth_token);
    
    
    return response;
    // when the response is available
  }, function errorCallback(response) {
      //alert('inside login errorCallback message '+response.data.message);
       return response;
  });
    
  };
 
  return {
    addLike: addLike,
    
  };
});
