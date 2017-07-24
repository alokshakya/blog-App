CApp.directive('commentInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      comment: '=' 
    }, 
    templateUrl: '/views/commentInfo.html' 
  }; 
});
