CApp.controller("CommentController", function ($scope, $http, $templateCache,AuthService,DataService,Data) {
     $scope.dep={};
     $scope.dep.available=false;
     $scope.dep.comments=[];
     $scope.dep.liked_by=[];
     $scope.dep.no_likes=[];
     $scope.dep.like_color='blue';
     $scope.dep.fetched=false;
     $scope.dep.liked_by_busy=false;
     $scope.dep.liked_by_fetched=false;
     $scope.dep.comment_content='';

     
$scope.dep.likes = function(article_id)
{
  $scope.dep.a_likes=DataService.getLikeCount(article_id);
  console.log('ng-mouseover working and dep.a_likes '+$scope.dep.a_likes);


};

 
      

    //to fetch comments of a particular article_id
      $scope.dep.fetchComment = function(article_id) {
        $scope.dep.user_id=AuthService.getUserId();
        $scope.dep.comments=[];
        $scope.dep.available=false;
        var qdata=
        {
  "type": "select",
  "args":{
    "table":"comment",
    "columns":[
        "created",
        "content",
        {
          "name":"commented_by",
          "columns":["name"]
          
        }
        
      ],
      "where":{"article_id":article_id}
      
  }
};
        Data.addLike(qdata)
            .then(function(response) {
              var l=response.data.length;
          if(l===0){
              
             
          }
           for (var i = 0; i < l; i++) {
            $scope.dep.comments.push(response.data[i]);
          
         }
         if(l>0)
         {
          $scope.dep.available=true;
         }
         if(!$scope.dep.user_id)
        {
          $scope.dep.showCommentBox=false;
        }
        if($scope.dep.user_id)
        {
          $scope.dep.showCommentBox=true;
        }
         
        }, function(response) {
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
      });
        
    };


    

    // to fetch user names for particular article_id
    $scope.dep.fetchUsers = function(article_id) {
        $scope.dep.available=false;
        $scope.dep.liked_by_busy=true;
      
       var selectquery=
{
  "type": "select",
  "args":{
    "table":"article_like",
    "columns":[
              {
                "name":"liked_by",
                "columns":["name"]
              }

             
           ],
           "where":{"article_id":article_id}
    }
  
};
   Data.addLike(selectquery)
            .then(function(response) {
          $scope.status = response.status;
          console.log('response '+response);
          if(response.data.length===0){
              
             
          }
          console.log(response.data);
          //loading 5 articles at a time.
          for (var i = 0; i < response.data.length; i++) {
           $scope.dep.liked_by.push(response.data[i].liked_by.name);
           console.log(response.data[i].liked_by.name);
        } 
          $scope.dep.liked_by_busy=false;
          $scope.dep.liked_by_fetched=true;
         
        }, function(response) {
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
          $scope.dep.liked_by_busy=false;
          $scope.dep.liked_by_fetched=true;

      });
    };
    
    //function for posting comment
    $scope.dep.postComment = function(article_id) {
      alert('inside post comment function');
        $scope.dep.available=false;
        $scope.dep.user_id=AuthService.getUserId();
        if(!$scope.dep.user_id)
        {
          alert('Login First to Like article');
          return;
        }
       var postdata=
{
  "type": "insert",
  "args":{
    "table":"comment",
    "objects":[
      {
        "user_id":$scope.dep.user_id,
      "article_id":article_id,
      "content":$scope.dep.comment_content
      }]
     
  }
};
   Data.addLike(postdata)
            .then(function(response) {
          $scope.status = response.status;
          DataService.updateLikes();
          $scope.dep.comment_content='';
         $scope.dep.fetchComment(article_id);
        }, function(response) {
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
          alert('You have already liked this article');
      });
    };
      //function for adding likes
      //function for adding likes
//function for posting comment
    $scope.dep.addLikes = function(article_id) {
        $scope.dep.available=false;
        $scope.dep.user_id=AuthService.getUserId();
        if(!$scope.dep.user_id)
        {
          alert('Login First to Like article');
          return;
        }
       var likedata=
{
  "type": "insert",
  "args":{
    "table":"article_like",
    "objects":[
      {
        "user_id":$scope.dep.user_id,
      "article_id":article_id
      }]
     
  }
};
   Data.addLike(likedata)
            .then(function(response) {
          $scope.status = response.status;
          DataService.updateLikes();
          

        }, function(response) {
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
          alert('You have already liked this article');
      });
    };
});
