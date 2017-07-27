CApp.controller("AddArticle",
  ['$scope','$rootScope','$http','$templateCache','$location', '$localStorage', '$window','Data',
  function ($scope,$rootScope, $http, $templateCache,$location, $localStorage, $window, Data) {
     $scope.add={};
     
     $scope.add.form=true;
     $scope.add.adding=false;
     $scope.add.succ=false;
     alert('value of user_id inside add article controller : '+$localStorage.user_details.hasura_id);
     $scope.add.addArticle = function(article){
      alert('AddArticle pressed');
      alert('value of user_id inside add article : '+$localStorage.user_details.hasura_id);
      var data=
{
  "type": "insert",
  "args":{
    "table":"article",
    "objects":[
      {
        "user_id":$localStorage.user_details.hasura_id,
        "title":article.title,
      "category":article.category,
      "content":article.content
      }]
  }
};

      
    Data.addArticle(data)
            .success(function (success) {
              console.log('succ '+success);
              console.log('message '+success.message);
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
                console.log('err '+$scope.status);
                console.log(error);
            });
     };
}]);
