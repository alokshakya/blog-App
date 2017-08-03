CApp.controller("RecentActivityController",
 function ($scope, $http, $templateCache,$rootScope,AuthService,DataService) {
  $scope.rec={};
  $scope.rec.published_articles=[];
  $scope.rec.commented_on=[];
  $scope.rec.liked_article=[];
  $scope.rec.article_article={};
  $scope.rec.comment_article={};
  $scope.rec.like_article={};

  $scope.rec.article_fetched=false;
    $scope.rec.comment_fetched=false;
      $scope.rec.like_fetched=false;
  $scope.rec.error_condition=false;
  $scope.rec.error='';
  $scope.rec.article_fetch_error='';
  $scope.rec.article_fetch_error_condition=false;
  $scope.rec.user_id=AuthService.getUserId();
var query=
{
  "type":"select",
  "args":{
    "table":"user_details",
    "columns":
    [
      
      {
        "name":"published_articles",
        "columns":[
                      "article_id","title","created"
                  ],
        "order_by":"-created"
      },
      {
        "name":"commented_on",
        "columns":[
                      "content","created",
                      {
                        "name":"commented_on_article",
                        "columns":["title","article_id"]
                      }
                  ],
        "order_by":"-created"
      },
      {
        "name":"liked_article",
        "columns":[
                    {
                      "name":"liked_on_article",
                      "columns":
                                [
                                  "article_id","title","created"
                                ]
                    }
                  ],
        "order_by":"-liked_on_article.created"
      }
    ],
    "where":{"user_id":$scope.rec.user_id}
    
  }
};
     DataService.addLike(JSON.stringify(query))
     .then (function successCallback(response){
      console.log('published_articles.length '+ response.data[0].published_articles.length);
      console.log('commented_on.length '+ response.data[0].commented_on.length);
      console.log('liked_article.length '+ response.data[0].liked_article.length);
      for(var i=0;i<response.data[0].published_articles.length;i++)
      {
        $scope.rec.published_articles.push(response.data[0].published_articles[i]);
        console.log('rec.published_articles.length '+ $scope.rec.published_articles.length);

      }
      for(var i=0;i<response.data[0].commented_on.length;i++)
      {
        $scope.rec.commented_on.push(response.data[0].commented_on[i]);
        console.log('rec.commented_on.length '+ $scope.rec.commented_on.length);
      }
      for(var i=0;i<response.data[0].liked_article.length;i++)
      {
        $scope.rec.liked_article.push(response.data[0].liked_article[i]);
        console.log('rec.liked_article.length '+ $scope.rec.liked_article.length);
      }

     },function errorCallback(response){
        $scope.rec.error='Unable to fetch Recent Activity check internet connection ';
        $scope.rec.error_condition=true;

     });
// function for fetching particular article
     $scope.rec.fetchArticle = function(article_id,type){

var q=
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
    "where":
    {
      "article_id":{"$eq":article_id}
    },
    
    "order_by":"-created",
    "limit":5
  }
};
           DataService.addLike(JSON.stringify(q))
           .then (function successCallback(response){
            if(type===1)
            {
              $scope.rec.article_article=response.data[0];
              $scope.rec.article_fetched=true;
            }
            if(type===2)
            {
              $scope.rec.comment_article=response.data[0];
              $scope.rec.comment_fetched=true;
            }
            if(type===3)
            {
              $scope.rec.like_article=response.data[0];
              $scope.rec.like_fetched=true;
            }
            $scope.rec.article=response.data[0];
            $scope.rec.fetched=true;
           },function errorCallback(response){
            $scope.rec.article_fetch_error='Unable to fetch details of article check connection';
            $scope.rec.article_fetch_error_condition=true;

           });
     };

     
});
