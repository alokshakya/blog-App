CApp.factory('Data', ['$http', '$localStorage', '$window', function($http, $localStorage,$window){
        var baseUrl = "http://data.c100.hasura.me/v1/query";
        var Data={};
Data.addUser_Details = function(data){
    return $http.post(baseUrl,data);
};
Data.addArticle = function(data){

    return $http.post(baseUrl,data);
};
Data.allArticles = function(data){
    console.log('data inside allArticles Data.js service '+data);
    console.log('data.args.columns inside allArticles Data.js service '+data.args.columns);
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