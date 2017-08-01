CApp.controller("AllArticle2",['$scope','$http','$rootScope','AuthService','Data',
 function ($scope, $http, $templateCache,$rootScope,AuthService,Data) {
     $scope.all={};
     $scope.all.articles=[];
     $scope.all.date= new Date();
     alert({
      title: 'Date',
      template: $scope.all.date
     });
    // alert(' current date '+$scope.all.date);
     $scope.all.busy=false;
     $scope.all.end=false;
     $scope.all.error='';
     $scope.all.error_condition=false;
     //function for loading new articles
     $scope.all.nextPage = function()
     {
      if(($scope.all.busy) && (!$scope.all.end))
      {
        return;
      }
      $scope.all.busy=true;
      var query=
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
      $http.post('http://data.c100.hasura.me/v1/query',query)
              .then(function successCallback(response) {
                var l=response.data.length;
                      if(l===0)
                      {
                        $scope.all.busy=false;
                        $scope.all.end=true;
                        return;
                      }
                $scope.all.date=response.data[l-1].created;
                      for(var i=0;i<l;i++)
                      {
                        $scope.all.articles.push(response.data[i]);
                      }
                $scope.all.busy=false;
                }, function errorCallback(response) {
                   $scope.all.error='Request failed at server please check Internet_Connection';
                   $scope.all.error_condition=true;

                });


     };
     $scope.all.addLikes = function(article_id){
  alert('inside data controller '+article_id);
  var likedata=
{
  "type": "insert",
  "args":{
    "table":"article_like",
    "objects":[
      {
        "user_id":$scope.data.user_id,
      "article_id":article_id
      }]
  }
};
              Data.addLike(likedata)
              .success(function (success) {
              console.log('succ '+success);
             // requst succes

            })
            .error(function (error) {
              //requst failed
                $scope.status = 'Unable to post article: ' + error.message;
                $scope.add.error='Server Error';
                $scope.add.adding=false;
                console.log('err '+$scope.status);
                console.log(error);
            });


 };
}]);
