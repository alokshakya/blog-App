CApp.controller("AddArticle",
  ['$scope','$rootScope','$http','$templateCache','$location', '$window','Data','AuthService',
  function ($scope,$rootScope, $http, $templateCache,$location,  $window, Data,AuthService) {
     $scope.add={};
     $scope.add.user_id=AuthService.getUserId();
     if(!$scope.add.user_id)
        {
          alert('Login First to add article ');
          window.location.href='/#/login';
          return;
        }
     $scope.add.form=true;
     $scope.add.adding=false;
     $scope.add.loading_preview=false;
     $scope.add.succ=false;
     $scope.add.message='';
     $scope.add.preview=false;
     $scope.add.preview_data={};
     $scope.add.succes1={};
     $scope.add.article=[];
     $scope.add.user_name = AuthService.getUserName();
     $scope.add.created=new Date();


     $scope.add.addArticle = function(article){
      $scope.add.adding=true;
      $scope.add.user_id = AuthService.getUserId();
      $scope.add.user_name = AuthService.getUserName();
     
      $scope.add.created=new Date();
      //alert('value of user_id inside add article function : '+$scope.add.user_id);
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
              //console.log('succ '+success);
             // alert('Article id returned '+success.returning[0].article_id);
              //alert('success.data.returning.article_id '+success.data.returning);
              $scope.add.article_id=success.returning[0].article_id;
              $scope.add.adding=false;
              $scope.add.form=false;
              $scope.add.message="Article Added successfully";
              $scope.add.succ=true;

            })
            .error(function (error) {
                $scope.status = 'Unable to post article: ' + error.message;
                $scope.add.error='Server Error';
                $scope.add.adding=false;
               // console.log('err '+$scope.status);
               // console.log(error);
            });
     };

     
     
}]);


