var CApp = angular.module("UserApp", ['ngRoute','ngStorage']);
CApp.config(['$routeProvider', '$httpProvider',function($routeProvider,$httpProvider) {
    $routeProvider
    .when('/home', {
        templateUrl : 'pages/chome.html',
        controller:'DataController'
     
    })
    .when('/add', {
        templateUrl : 'pages/AddArticle.html',
        controller: 'AddArticle'
    })
    .when('/popular', {
        
        templateUrl : 'pages/popular.html',
        controller: 'DataController'
    })
    .when('/trending', {
        templateUrl : 'pages/trending',
        controller: 'DataController'
    })
    .when('/technology', {
        templateUrl : 'pages/technology.html',
        controller: 'DataController'
    })
    .when('/business', {
        templateUrl : 'pages/business.html',
        controller: 'DataController'
    })
    .when('/sports', {
        templateUrl : 'pages/sports.html',
        controller: 'DataController'
    })
    .when('/other', {
        templateUrl : 'pages/other.html',
        controller: 'DataController'
    })
  
    .otherwise({
      redirectTo: '/home',
    });

    //$httpProvider code here to setup authentication bearer in each request
    $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
            return {
                'request': function (config) {
                    config.headers = config.headers || {};
                    alert('value of $localStorage.auth_token in interceptor '+$localStorage.auth_token);
                    if ($localStorage.auth_token) {
                        config.headers.Authorization = 'Bearer ' + $localStorage.auth_token;
                    }
                   /* else if ($localStorage.auth_token===undefined) {
                        alert('$localStorage.auth_token is null deleting headers');
                       delete config.headers.Authorization;
                       alert('$localStorage.auth_token is null deleted heders headers');
                    }*/
                   
                    return config;
                },
                'responseError': function(response) {
                    if(response.status === 401 || response.status === 403) {
                      //  $location.path('/signin');
                      alert('You must be signed in');
                     // $window.location.href='/signup2.html';
                    }
                    return $q.reject(response);
                }
            };
        }]);
 
}]);

/*CApp.config(['$routeProvider', '$httpProvider','$window', function ($routeProvider, $httpProvider,$window) {
 
    $routeProvider
    .when('/home', {
        templateUrl : 'pages/chome.html',
        controller:'AllArticles'
     
    })
    .when('/add', {
        templateUrl : 'pages/AddArticle.html',
        controller: 'AddArticle'
    })
    .when('/withdraw', {
        templateUrl : 'pages/withdraw.html',
        controller: 'Withdraw'
    })
    .when('/transfer', {
        templateUrl : 'pages/transfer.html',
        controller: 'Transfer'
    })
    .when('/getAcc', {
        templateUrl : 'pages/getAccount.html',
        controller: 'GetAccount'
    })
    .when('/getStatement', {
        templateUrl : 'pages/getStatement.html',
        controller: 'GetStatement'
    })
  
    .otherwise({
      redirectTo: '/home',
    });
 

    //$httpProvider code here to setup authentication bearer in each request
    $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
            return {
                'request': function (config) {
                    config.headers = config.headers || {};
                    if ($localStorage.token) {
                        config.headers.Authorization = 'Bearer ' + $localStorage.token;
                    }
                    return config;
                },
                'responseError': function(response) {
                    if(response.status === 401 || response.status === 403) {
                      //  $location.path('/signin');
                      alert('You must be signed in');
                      $window.location.href='/signup2.html';
                    }
                    return $q.reject(response);
                }
            };
        }]);
}]);*/
