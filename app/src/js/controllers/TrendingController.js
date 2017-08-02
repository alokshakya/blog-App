CApp.controller("TrendingController",
 function ($scope, $http, $templateCache,$rootScope,AuthService,Data,DataService) {
     $scope.all={};
     $scope.all.articles=[];
    $scope.all.data={};
    // alert(' current date '+$scope.all.date);
     $scope.all.busy=false;
     $scope.all.end=false;
     $scope.all.error='';
     $scope.all.error_condition=false;

       $scope.all.user_id=AuthService.getUserId();
    if(!$scope.all.user_id)
        {
          alert('Login First to use filtering by Trending category');
          window.location.href='/#/login';
          
        }
     //function for loading new articles
     $scope.all.nextPage = function()
     {
      if((!$scope.all.busy) && ($scope.all.end))
      {
        return;
      }
      $scope.all.busy=true;
    var cr;
    if(!$scope.all.articles[$scope.all.articles.length-1])
    {
      cr=100000;
    }
    if($scope.all.articles[$scope.all.articles.length-1])
    {
      cr=$scope.all.articles[$scope.all.articles.length-1].comments;
    }
var query=
{
  "type":"select",
  "args":{
    "table":"all_articles",
    "columns":["article_id","title","category","created","content","name","comments"],
    "where":{"comments":{"$lt":cr}},
    "order_by":"-comments",
    "limit":5
  }
};

              DataService.addLike(JSON.stringify(query))
              .then(function successCallback(response) {
                var l=response.data.length;
                      if(l===0)
                      {
                        $scope.all.busy=false;
                        $scope.all.end=true;
                        return;
                      }
                $scope.all.article_id=response.data[l-1].article_id;
                console.log('response.data[l-1].article_id '+response.data[l-1].article_id);
                console.log('new article_id '+$scope.all.article_id);
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
     
});
