CApp.controller("AllArticles", function ($scope, $http, $templateCache) {
     $scope.dep={};
     $scope.dep.readmore=true;
     $scope.dep.comments=
     [
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

     $scope.dep.articles=
     [
     {"title":"How to Learn Angular",
      "name":"Alok Shakya",
      "category":"Technology",
      "created":"17/07/2017",
      "content":"To develop applications in Angular you need to code using JavaScript.To develop applications in Angular you need to code using JavaScript.To develop applications in Angular you need to code using JavaScript.To develop applications in Angular you need to code using JavaScript.To develop applications in Angular you need to code using JavaScript.To develop applications in Angular you need to code using JavaScript.",
      "likes":"21",
      "comments":"8"
     },
     {"title":"Why Flipkart has to worry about a lot more than Amazon buying BigBasket",
      "name":"Alok Shakya",
      "category":"Business",
      "created":"21/07/2017",
      "content":"BigBasket has proved that smartphone toting people in India do buy groceries on an app, and ‘at scale’ as entrepreneurs always like to say. Even if with expensive help from celebrity endorsements such as Bollywood superstar Shah Rukh Khan.And yet, a lot more people, in fact the majority of us, still do continue to jostle with each other for parking space for our vehicles so we can endure standing in the one queue where the customer four heads further up the line has chosen the very day for a month’s worth of supplies.",
      "likes":"32",
      "comments":"19"
     },
     {"title":"US Grand Prix Gold: Kashyap to Meet Prannoy in All-India Final",
      "name":"Gopal",
      "category":"Sports",
      "created":"23/07/2017",
      "content":"The Indian juggernaut in men's badminton continued to roll with former Commonwealth Games gold-medallist Parupalli Kashyap setting up a title clash with HS Prannoy at the USD 120,000 US Open Grand Prix Gold.After limping out of the court with a calf injury in October 2015, it was the first final for Kashyap in 21 months, while Prannoy, who has always been plagued by injuries,also reached his first summit clash after clinching the Swiss Open last year.",
      "likes":"27",
      "comments":"14"
     },
     {"title":"How could a non-IITian get into Google?",
      "name":"Ashish Kedia, works at Google",
      "category":"Question",
      "created":"22/07/2017",
      "content":"Just like IITians. By working hard, learning programming and then cracking the interviews. I am one of the non-IITians working at Google. There is currently only one IITian in my my team. So it’s safe to say that non-IITians are hired regularly. Any final year student across APAC countries is eligible to take the test. There are usually 4–5 rounds of tests that are conducted every year between August to January. No one asks which university are you from. You simply perform well in the tests and you get an interview call. I think this is a extremely unbiased way of hiring good students. Referrels : f you know someone at Google with whom you have worked closely, you can ask them to file a referral on your behalf.",
      "likes":"56",
      "comments":"34"
     },
     {"title":"Jet Airways asks junior pilots to furnish Rs 1 crore bonds ",
      "name":"Alok Shakya",
      "category":"Other",
      "created":"22/07/2017",
      "content":"Jet AirwaysBSE 0.78 % has asked junior pilots to furnish surety bonds worth up to Rs 1 crore and serve the airline for at least five to seven years, union sources said.The development comes at a time when many of its junior pilots have been asked to take 10 days off every month, a move that would result in up to 30 per cent pay cut, as part of cost saving measure",
      "comments":"2"
     },
     {"title":"How to Learn Angular",
      "name":"Alok Shakya",
      "category":"Technology",
      "created":"17/07/2017",
      "content":"To develop applications in Angular you need to code using JavaScript.To develop applications in Angular you need to code using JavaScript.To develop applications in Angular you need to code using JavaScript.To develop applications in Angular you need to code using JavaScript.To develop applications in Angular you need to code using JavaScript.To develop applications in Angular you need to code using JavaScript.",
      "likes":"21",
      "comments":"8"
     },
     {"title":"Why Flipkart has to worry about a lot more than Amazon buying BigBasket",
      "name":"Alok Shakya",
      "category":"Business",
      "created":"21/07/2017",
      "content":"BigBasket has proved that smartphone toting people in India do buy groceries on an app, and ‘at scale’ as entrepreneurs always like to say. Even if with expensive help from celebrity endorsements such as Bollywood superstar Shah Rukh Khan.And yet, a lot more people, in fact the majority of us, still do continue to jostle with each other for parking space for our vehicles so we can endure standing in the one queue where the customer four heads further up the line has chosen the very day for a month’s worth of supplies.",
      "likes":"32",
      "comments":"19"
     },
     {"title":"US Grand Prix Gold: Kashyap to Meet Prannoy in All-India Final",
      "name":"Gopal",
      "category":"Sports",
      "created":"23/07/2017",
      "content":"The Indian juggernaut in men's badminton continued to roll with former Commonwealth Games gold-medallist Parupalli Kashyap setting up a title clash with HS Prannoy at the USD 120,000 US Open Grand Prix Gold.After limping out of the court with a calf injury in October 2015, it was the first final for Kashyap in 21 months, while Prannoy, who has always been plagued by injuries,also reached his first summit clash after clinching the Swiss Open last year.",
      "likes":"27",
      "comments":"14"
     },
     {"title":"How could a non-IITian get into Google?",
      "name":"Ashish Kedia, works at Google",
      "category":"Question",
      "created":"22/07/2017",
      "content":"Just like IITians. By working hard, learning programming and then cracking the interviews. I am one of the non-IITians working at Google. There is currently only one IITian in my my team. So it’s safe to say that non-IITians are hired regularly. Any final year student across APAC countries is eligible to take the test. There are usually 4–5 rounds of tests that are conducted every year between August to January. No one asks which university are you from. You simply perform well in the tests and you get an interview call. I think this is a extremely unbiased way of hiring good students. Referrels : f you know someone at Google with whom you have worked closely, you can ask them to file a referral on your behalf.",
      "likes":"56",
      "comments":"34"
     },
     {"title":"Jet Airways asks junior pilots to furnish Rs 1 crore bonds ",
      "name":"Alok Shakya",
      "category":"Other",
      "created":"22/07/2017",
      "content":"Jet AirwaysBSE 0.78 % has asked junior pilots to furnish surety bonds worth up to Rs 1 crore and serve the airline for at least five to seven years, union sources said.The development comes at a time when many of its junior pilots have been asked to take 10 days off every month, a move that would result in up to 30 per cent pay cut, as part of cost saving measure",
      "comments":"2"
     }
     
     ];
    
      
    $scope.dep.fetch= function(){
      alert('fetchMore Pressed');
      var selectquery=
{
  "type": "select",
  "args":{
    "table":"all_articles",
    "columns":[
      "article_id",
        "user_id",
        "name",
        "created",
        "title",
        "category",
        "content",
        "likes",
        "comments"
        
      ]
  }
};
      $http({method: 'POST', url: 'http://data.c100.hasura.me/v1/query', data:selectquery, cache: $templateCache}).
        then(function(response) {
          $scope.status = response.status;
          if(response.data.length===0){
              $scope.article.busy=false;
              $scope.article.end=true;
              return;
          }
          console.log(response.data);
          //loading 5 articles at a time.
          for (var i = 0; i < response.data.length; i++) {
           $scope.dep.articles.push(response.data[i]);
        } 
          
         
        }, function(response) {
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
      });
    };

    //function for fetching comments of particular article_id
        $scope.dep.fetchComment= function(){
         // alert('fetchComment pressed');
          //alert('article id is :'+article_id);
          console.log('article id is :'+article_id);

      var selectquery=
{
  "type": "select",
  "args":{
    "table":"comment",
    "columns":[
        "user_id",
        "comment_id",
        "parent_id",
        "created",
        "content"
        
      ],
      "where":{"article_id":article_id}
      
  }
};
      $http({method: 'POST', url: 'http://data.c100.hasura.me/v1/query', data:selectquery, cache: $templateCache}).
        then(function(response) {
          $scope.status = response.status;
          if(response.data.length===0){
              $scope.article.busy=false;
              $scope.article.end=true;
              return;
          }
          //loading 5 articles at a time.
          for (var i = 0; i < response.data.length; i++) {
           $scope.dep.articles.push(response.data[i]);
        } 
          
         
        }, function(response) {
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
      });
    };
    // function for fetching particular Articular details
    $scope.dep.fetchArticle = function(info){
      alert('fetchArticle pressed and name  is :'+info.name);
          console.log('article id is :'+info.name);

      var selectquery=
{
  "type": "select",
  "args":{
    "table":"article",
    "columns":[
        "content"  
      ],
      "where":{"article_id":name}
      
  }
};
$scope.info.content="As the placement season is back so are we to help you ace the interview. We have selected some most commonly asked and must do practice problems for you. We recommend to practice these and ace the coding round with confidence. Happy Coding.As the placement season is back so are we to help you ace the interview. We have selected some most commonly asked and must do practice problems for you. We recommend to practice these and ace the coding round with confidence. Happy Coding.As the placement season is back so are we to help you ace the interview. We have selected some most commonly asked and must do practice problems for you. We recommend to practice these and ace the coding round with confidence. Happy Coding.As the placement season is back so are we to help you ace the interview. We have selected some most commonly asked and must do practice problems for you. We recommend to practice these and ace the coding round with confidence. Happy Coding.As the placement season is back so are we to help you ace the interview. We have selected some most commonly asked and must do practice problems for you. We recommend to practice these and ace the coding round with confidence. Happy Coding.As the placement season is back so are we to help you ace the interview. We have selected some most commonly asked and must do practice problems for you. We recommend to practice these and ace the coding round with confidence. Happy Coding.As the placement season is back so are we to help you ace the interview. We have selected some most commonly asked and must do practice problems for you. We recommend to practice these and ace the coding round with confidence. Happy Coding.As the placement season is back so are we to help you ace the interview. We have selected some most commonly asked and must do practice problems for you. We recommend to practice these and ace the coding round with confidence. Happy Coding.As the placement season is back so are we to help you ace the interview. We have selected some most commonly asked and must do practice problems for you. We recommend to practice these and ace the coding round with confidence. Happy Coding.As the placement season is back so are we to help you ace the interview. We have selected some most commonly asked and must do practice problems for you. We recommend to practice these and ace the coding round with confidence. Happy Coding.As the placement season is back so are we to help you ace the interview. We have selected some most commonly asked and must do practice problems for you. We recommend to practice these and ace the coding round with confidence. Happy Coding.As the placement season is back so are we to help you ace the interview. We have selected some most commonly asked and must do practice problems for you. We recommend to practice these and ace the coding round with confidence. Happy Coding.As the placement season is back so are we to help you ace the interview. We have selected some most commonly asked and must do practice problems for you. We recommend to practice these and ace the coding round with confidence. Happy Coding.As the placement season is back so are we to help you ace the interview. We have selected some most commonly asked and must do practice problems for you. We recommend to practice these and ace the coding round with confidence. Happy Coding.";
      $scope.dep.readmore=false;
      /*$http({method: 'POST', url: 'http://data.c100.hasura.me/v1/query', data:selectquery, cache: $templateCache}).
        then(function(response) {
          $scope.status = response.status;
          if(response.data.length===0){
              $scope.article.busy=false;
              $scope.article.end=true;
              return;
          }
          $scope.info.content=response.data;
          //loading 5 articles at a time.
          for (var i = 0; i < response.data.length; i++) {
           $scope.dep.articles.push(response.data[i]);
        } 
          
         
        }, function(response) {
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
      });*/

    };
      
});
