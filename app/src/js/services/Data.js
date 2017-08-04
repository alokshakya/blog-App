CApp.factory('Data', ['$http',  '$window', function($http, $window){
        var baseUrl = "http://data.alokshakya.hasura.me/v1/query";
        var Data={};
Data.addUser_Details = function(data){
    return $http.post(baseUrl,data);
};
Data.addArticle = function(data){

    return $http.post(baseUrl,data);
};
Data.addLike = function(data){

    return $http.post(baseUrl,data);
};
Data.addEmptyComment = function(data){

    return $http.post(baseUrl,data);
};

Data.fetchArticle = function(data){

    return $http.post(baseUrl,data);
};
Data.allArticles = function(data){
    
    return $http.post(baseUrl,data);
};
Data.popularArticles = function(data){
    return $http.post(baseUrl,data);
};
Data.trendingArticles = function(data){
    return $http.post(baseUrl,data);
};

return Data;      
 
}]);