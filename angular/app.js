var app = angular.module('mainApp', ['ui.router','toastr','angular-loading-bar']);

//define routes 
app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('home', {
	  url: '/',
	  templateUrl: 'angular/html/home.html',
	  controller: 'homeController as homeCtrl',
	})
	.state('users', {
	  url: '/users',
	  templateUrl: 'angular/html/users.html',
	  controller: 'userController as userCtrl',
	  resolve:{
	  	usersData: ['profileDbAccessService','apiUrlService', function(profileDbAccessService,apiUrlService){
           var url = apiUrlService.urls.GET_USERS_INFO();
           return profileDbAccessService.getData(url);
        }],
	  }
	})
	.state('user', {
	  url: '/users/:userId',
	  templateUrl: 'angular/html/user_detail.html',
	  controller: 'userDatailController as userDetailCtrl',
	  resolve:{
	  	userData: ['profileDbAccessService','apiUrlService', '$stateParams', function(profileDbAccessService,apiUrlService,$stateParams){
           var url = apiUrlService.urls.GET_USER_INFO($stateParams.userId);
           return profileDbAccessService.getData(url);
        }],
      userTodos: ['profileDbAccessService','apiUrlService', '$stateParams', function(profileDbAccessService,apiUrlService,$stateParams){
           var url = apiUrlService.urls.GET_USER_TODOS($stateParams.userId);
           return profileDbAccessService.getData(url);
        }],
	  }
	})
	.state('posts', {
	  url: '/posts',
	  templateUrl: 'angular/html/posts.html',
	  controller: 'postController as postCtrl',
	  resolve:{
	  	postsData: ['profileDbAccessService','apiUrlService', function(profileDbAccessService,apiUrlService){
           var url = apiUrlService.urls.GET_POSTS_INFO();
           return profileDbAccessService.getData(url);
        }],
	  }
	})
  .state('spost', {
    url: '/post/:postId',
    templateUrl: 'angular/html/post_detail.html',
    controller: 'postDetailController as postDetailCtrl',
    resolve:{
      postInfo: ['profileDbAccessService','apiUrlService', '$stateParams', function(profileDbAccessService,apiUrlService,$stateParams){
           var url = apiUrlService.urls.GET_POST_INFO($stateParams.postId);
           return profileDbAccessService.getData(url);
        }],
      postComments: ['profileDbAccessService','apiUrlService', '$stateParams', function(profileDbAccessService,apiUrlService,$stateParams){
           var url = apiUrlService.urls.GET_POST_COMMENTS($stateParams.postId);
           return profileDbAccessService.getData(url);
        }],
    }
  })
  .state('new', {
    url: '/posts/new/',
    params: {
      userId: null,
    },
    templateUrl: 'angular/html/new_post.html',
    controller: 'addPostController as addPostCtrl',
    resolve:{
          userIdInfo: ['profileDbAccessService','apiUrlService', '$stateParams', function(profileDbAccessService,apiUrlService,$stateParams){
            return $stateParams.userId;
        }]
    }
  })
  // use the HTML5 History API
       // $locationProvider.html5Mode(true);
}]);

//services for get and post methods
app.service('profileDbAccessService', ['$http', '$q', 'toastr', function($http, $q, toastr){
    //get data function
    this.getData = function(getDataUrl)
    {
      return $q(function(resolve, reject){
        $http({
          method: 'GET',
          url: getDataUrl
        })
        .then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(response) {
          console.log(response);
          if(response.statusText == 'Not Found')
            toastr.error("Not Found!");
          else
            toastr.error("Something went wrong please refresh.");
          return false;
          reject(response);
        });
      });
    }//end getData function

    //post data function
     this.postData = function(postDataUrl,data)
    {
      return $q(function(resolve, reject){
        $http({
          method: 'POST',
          url: postDataUrl,
          data: data
        })
        .then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(response) {
          reject(response);
        });
      });
    }//end getData function
  }]);
