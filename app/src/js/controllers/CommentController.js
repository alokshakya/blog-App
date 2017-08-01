CApp.controller("CommentController", function ($scope, $http, $templateCache,AuthService,DataService,Data) {
     $scope.dep={};
     $scope.dep.available=false;
     $scope.dep.comments=[];
     $scope.dep.like_color='blue';
     



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

    
      $scope.dep.fetchComment = function(article_id) {
        $scope.dep.available=false;
        var qdata=
        {
          "type":"select",
          "args":
          {
            "table":"comment",
            "columns":[
                        "content","created",
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
         
        }, function(response) {
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
      });
        
    
     
         console.log('now comments object');
         for (var i = 0; i < $scope.dep.comments.length; i++) {
            
              console.log($scope.dep.comments[i]);
         }
    };
    $scope.dep.addLikes = function(article_id) {
        $scope.dep.available=false;
        $scope.dep.user_id=AuthService.getUserId();
        alert('addLikes Pressed and article_id is : '+article_id); 
        alert('addLikes Pressed and user_id is : '+$scope.dep.user_id); 
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
    $scope.dep.fetchUsers = function(article_id) {
        $scope.dep.available=false;
        $scope.dep.user_id=AuthService.getUserId();
        alert('addLikes Pressed and article_id is : '+article_id); 
        alert('addLikes Pressed and user_id is : '+$scope.dep.user_id); 
       var selectquery=
{
  "type": "select",
  "args":{
    "table":"article_like",
    "columns":[

        "user_id",
             
      ]
  }
};
   Data.addLike(likedata)
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
    
      
});
