CApp.service('DataService', function($q, $http) {
  var baseUrl='http://data.c100.hasura.me/v1/query';
  var likes=[];
  var comments=[];

  var updateLikes = function()
  {
    var findlikequery=
{
  "type": "select",
  "args":{
    "table":"article_likes",
    "columns":[

        "no_article_likes",
        "article_id"
             
      ]
  }
};
     
     $http.post(baseUrl,JSON.stringify(findlikequery))
     .then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    var le=response.data.length;
    //console.log('response.data[0].no_article_likes '+response.data[0].no_article_likes)
    for(var i=0;i<le;i++)
    {
      likes[response.data[i].article_id]=response.data[i].no_article_likes;
     // console.log('likes[article_id]  '+likes[response.data[i].article_id]+' and article_id is'+response.data[i].article_id);
    }
  }, function errorCallback(response) {
      //console.log('inside fialed likesUpdateService failed');
      return response;
  });

  };
  updateLikes();

  var updateComments = function()
  {
    var findcommentquery=
{
  "type": "select",
  "args":{
    "table":"article_comments",
    "columns":[

        "no_comments",
        "article_id"
             
      ]
  }
};
     
     $http.post(baseUrl,JSON.stringify(findcommentquery))
     .then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    var le=response.data.length;
    //console.log('response.data[0].no_comments '+response.data[0].no_comments);
    for(var i=0;i<le;i++)
    {
      comments[response.data[i].article_id]=response.data[i].no_comments;
      //console.log('comments[article_id]  '+comments[response.data[i].article_id]+' and article_id is'+response.data[i].article_id);
    }
  }, function errorCallback(response) {
     // console.log('inside fialed commentsUpdateService failed');
      return response;
  });

  };
  updateComments();
 
  
 
  
  
 
  var addLike = function(data) {
    return $http.post(baseUrl,data)
    .then(function successCallback(response) {
    // this callback will be called asynchronously
    //alert('inside signup successCallback token '+response.data.auth_token);
    
    
    return response;
    // when the response is available
  }, function errorCallback(response) {
      //alert('inside login errorCallback message '+response.data.message);
       return response;
  });
    
  };
  var getLikeCount = function(article_id)
  {
    return likes[article_id];
  }
  var getCommentCount = function(article_id)
  {
    return comments[article_id];
  }
 
  return {
    addLike: addLike,
    getLikeCount: getLikeCount,
    updateLikes: updateLikes,
    getCommentCount: getCommentCount,
    updateComments: updateComments
    
  };
});
