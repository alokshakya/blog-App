CApp.controller("DataController",
  ['$scope','$rootScope','$http','$templateCache','$location', '$localStorage', '$window','Data',
  function ($scope,$rootScope, $http, $templateCache,$location, $localStorage, $window, Data) {
    $scope.data={};
    $scope.data.all_articles=[];
    $scope.data.technology_articles=[];
    $scope.data.business_articles=[];
    $scope.data.sports_articles=[];
    $scope.data.questions_articles=[];
    $scope.data.other_articles=[];
    $scope.data.popular_articles=[];
    $scope.data.trending_articles=[];

//define variables for ng-show for all functions
    $scope.data.all_articles.busy=false;
    $scope.data.all_articles.end=false;
    $scope.data.all_articles.loading=false;


    // put one article custom value
    $localStorage.user_details={};
    
    $scope.data.allArticles = function(){
      var selectquery=
{
  "type": "select",
  "args":{
    "table":"all_articles",
    "columns":[
      "article_id",
        "user_id",
        "name",
        "created",
        "title",
        "category",
        "content",
        "likes",
        "comments"
        
      ]
  }
};
    // now before calling service show loading gif
    $scope.data.all_articles.busy=true;
    $scope.data.all_articles.loading=true;
      Data.allArticles(selectquery)
            .then(function(response) {
          $scope.status = response.status;
          console.log('response '+response);
          if(response.data.length===0){
              
             
          }
          console.log(response.data);
          //loading 5 articles at a time.
          for (var i = 0; i < response.data.length; i++) {
           $scope.data.all_articles.push(response.data[i]);
        } 
          
         
        }, function(response) {
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
      });
            
    }; 
    //login functioin
  $scope.data.popular_articles = function(user)  {
    var data={"email":user.email,"password":user.password};
    Data.popularArticles(data)
            .success(function (success) {
              console.log('succ '+success);
              console.log('auth_token is '+success.auth_token);
              //store auth token in local storage using ngStorage
              $localStorage.auth_token=success.auth_token;
              $localStorage.user_details=success;
              $window.location.href='/ui.html';
                //$scope.students = studs;
            })
            .error(function (error) {
                $scope.status = 'Unable to login ' + error.message;
                console.log('err '+$scope.status);
                console.log(error);
            });
  };
  // logout function
  $scope.data.trending_articles = function(user)  {
    alert('Logout pressed');
    Data.trendingArticles()
            .success(function (success) {
              
              //delete auth token in local storage using ngStorage
              $localStorage.auth_token=null;
              $localStorage.user_details=null;
              console.log(success.message);
              $window.location.href='/signup';
                //$scope.students = studs;
            })
            .error(function (error) {
                $scope.status = 'unable to logut' + error.message;
                console.log('err '+$scope.status);
                console.log(error);
            });
  };

 
      
        
      
    
   
}]);