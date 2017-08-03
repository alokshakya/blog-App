var CApp = angular.module("UserApp", ['ngRoute','infinite-scroll']);
CApp.config(['$routeProvider', '$httpProvider',function($routeProvider,$httpProvider) {
    $routeProvider
    .when('/login', {
        templateUrl : 'pages/login.html',
        controller:'AuthController'
     
    })
    .when('/home', {
        templateUrl : 'pages/chome.html',
        controller:'AllArticle2'
     
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
        templateUrl : 'pages/trending.html',
        controller: 'TrendingController'
    })
    .when('/technology', {
        templateUrl : 'pages/technology.html',
        controller: 'TechnologyController'
    })
    .when('/business', {
        templateUrl : 'pages/business.html',
        controller: 'BusinessController'
    })
    .when('/sports', {
        templateUrl : 'pages/sports.html',
        controller: 'SportsController'
    })
    .when('/questions', {
        templateUrl : 'pages/question.html',
        controller: 'QuestionController'
    })
    .when('/other', {
        templateUrl : 'pages/other.html',
        controller: 'OtherController'
    })
    .when('/activity', {
        templateUrl : 'pages/recentActivity.html',
        controller: 'RecentActivityController'
    })
  
    .otherwise({
      redirectTo: '/home',
    });
/*
    //$httpProvider code here to setup authentication bearer in each request
    $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
            return {
                'request': function (config) {
                    config.headers = config.headers || {};
                    //alert('value of $localStorage.auth_token in interceptor '+$localStorage.auth_token);
                   // console.log('value of $localStorage.user_details.hasura_id in interceptor '+$localStorage.user_details.hasura_id);
                    if ($localStorage.auth_token) {
                        config.headers.Authorization = 'Bearer ' + $localStorage.auth_token;
                    }
                    /*else if ($localStorage.auth_token===undefined) {
                        alert('$localStorage.auth_token is null deleting headers');
                       delete config.headers.Authorization;
                       alert('$localStorage.auth_token is null deleted heders headers');
                    } */
                    
                /*   
                    return config;
                },
                
                'responseError': function(response) {
                    if(response.status === 401 ) {
                      //  $location.path('/signin');
                      alert('Invalid Authorization token login agian');
                     // $window.location.href='/'; window is not defined
                    }
                    else if(response.status === 403){
                        alert('You are not Authorized');
                    }
                    else if(response.status === 400){
                        alert('Bad Request');
                    }
                    else if(response.status === 409){
                        alert('User Already exists');
                    }
                    return $q.reject(response);
                }
            };
        }]);
      */
 
}]);

CApp.factory('AuthInterceptor', function ($rootScope, $q, AUTH_EVENTS) {
  return {
    responseError: function (response) {
      $rootScope.$broadcast({
        401: AUTH_EVENTS.notAuthenticated,
        403: AUTH_EVENTS.notAuthorized
      }[response.status], response);
      return $q.reject(response);
    }
  };
})
 
CApp.config(function ($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
});
CApp.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})
 
CApp.constant('USER_ROLES', {
  admin: 'admin_role',
  user: 'user_role'
});
