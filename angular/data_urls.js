//keeps all URLS for get and post methods
angular.module('mainApp')
.service("apiUrlService", function($location){
    var BASE_URL =  'http://jsonplaceholder.typicode.com';

    this.urls = {      
      GET_USERS_INFO: function(){return BASE_URL + "/users"},
      GET_USER_INFO: function(id){return BASE_URL + "/users/" + id},
      GET_USER_TODOS: function(id){return BASE_URL + "/users/" + id +"/todos"},
      GET_POSTS_INFO: function(){return BASE_URL + "/posts"},
      GET_POST_INFO: function(id){return BASE_URL + "/posts/" + id},
      GET_POST_COMMENTS: function(id){return BASE_URL + "/posts/" + id+"/comments"},
      POST_NEW_INFO: function(id){return BASE_URL + "/posts"}
    }
  });