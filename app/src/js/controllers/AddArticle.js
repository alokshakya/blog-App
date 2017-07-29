CApp.controller("AddArticle",
  ['$scope','$rootScope','$http','$templateCache','$location', '$localStorage', '$window','Data','AuthService',
  function ($scope,$rootScope, $http, $templateCache,$location, $localStorage, $window, Data,AuthService) {
     $scope.add={};
     
     $scope.add.form=true;
     $scope.add.adding=false;
     $scope.add.loading_preview=false;
     $scope.add.succ=false;
     $scope.add.message='';
     $scope.add.preview=false;
     $scope.add.preview_data={};
     $scope.add.succes1={};


     $scope.add.addArticle = function(article){
      alert('AddArticle pressed');
      $scope.add.user_id = AuthService.getUserId();
      
      alert('value of user_id inside add article function : '+$scope.add.user_id);
      var data=
{
  "type": "insert",
  "args":{
    "table":"article",
    "objects":[
      {
        "user_id":$scope.add.user_id,
        "title":article.title,
      "category":article.category,
      "content":article.content
      }],
      "returning":["article_id"]
  }
};

      $scope.add.adding=true;
    Data.addArticle(data)
            .success(function (success) {
              console.log('succ '+success);
              alert('Article id returned '+success.returning[0].article_id);
              //alert('success.data.returning.article_id '+success.data.returning);
              $scope.add.article_id=success.returning[0].article_id;
              $scope.add.adding=false;
              $scope.add.form=true;
              $scope.add.message="Article Added successfully";
              $scope.add.succ=true;
              var likedata=
{
  "type": "insert",
  "args":{
    "table":"article_like",
    "objects":[
      {
        "user_id":$scope.add.user_id,
      "article_id":$scope.add.article_id
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
              var emptycommentdata=
{
  "type": "insert",
  "args":{
    "table":"comment",
    "objects":[
      {
        "user_id":$scope.add.user_id,
      "article_id":$scope.add.article_id,
      "parent_id":$scope.add.article_id,
      "content":"read it"
      }]
  }
};
              Data.addEmptyComment(emptycommentdata)
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
              $scope.add.succ=true;

            })
            .error(function (error) {
                $scope.status = 'Unable to post article: ' + error.message;
                $scope.add.error='Server Error';
                $scope.add.adding=false;
                console.log('err '+$scope.status);
                console.log(error);
            });
     };

     
     
}]);


