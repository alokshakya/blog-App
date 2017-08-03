CApp.controller("AllArticle2",
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
    /*if(!$scope.all.user_id)
        {
          alert('Login First to visit this page');
          window.location.href='/#/login';
          
        }*/
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
      cr=new Date();
    }
    if($scope.all.articles[$scope.all.articles.length-1])
    {
      cr=$scope.all.articles[$scope.all.articles.length-1].created;
    }
var query=
{
  "type":"select",
  "args":{
    "table":"article",
    "columns":["article_id","title","category","created","content",
    {
      "name":"published_by",
      "columns":["name"]
    }
    ],
    "where":{"created":{"$lt": cr}},
    "order_by":"-created",
    "limit":5
  }
};
//alert('query '+query);
//console.log('article_id after query '+$scope.all.article_id);
            $http.post('http://data.alokshakya.hasura.me/v1/query',JSON.stringify(query))
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
