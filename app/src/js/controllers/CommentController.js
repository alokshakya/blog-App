CApp.controller("CommentController", function ($scope, $http, $templateCache) {
     $scope.dep={};
     $scope.dep.available=false;
     $scope.dep.comments=[];
     $scope.dep.c=[
     {
      "name":"Aman Singh",
      "content":"Really Damn! Good Article for all. Help all of us by providing such a great articles.",
      "likes":"2",
      "comments":"4",
      "created":"23/07/2017",
      "comment_id":"3",
      "article_id":"1",
      "parent_id":"3"
    },
    {
      "name":"Dharmendra Singh",
      "content":"Thanks Bro. Your Article are Really inspiring.",
      "likes":"1",
      "comments":"2",
      "created":"22/07/2017",
      "comment_id":"4",
      "article_id":"1",
      "parent_id":"4"
     }
     ];

    
      $scope.dep.fetchComment = function(name) {
        $scope.dep.available=false;
        alert('fetchComment Pressed and name is : '+name);

        
        console.log('fetchComment Pressed and name is :'+name);
        
    
     for (var i = 0; i < $scope.dep.c.length; i++) {
            $scope.dep.comments.push($scope.dep.c[i]);
              console.log($scope.dep.c[i]);
         }
         if($scope.comments.length>0)
         {
          $scope.dep.available=true;
         }
     /* $scope.code = null;
      $scope.response = null;
      var article_id=$scope.info.article_id;
      alert('fetchComment Pressed and article_id is :'+article_id);
      console.log('article_id is :'+article_id);

      $http({method: 'POST', url: '/comments',data: { article_id: article_id }, cache: $templateCache}).
        then(function(response) {
          $scope.status = response.status;
          $scope.comments = response.data;
        }, function(response) {
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
      });*/
    };
    
      
});
