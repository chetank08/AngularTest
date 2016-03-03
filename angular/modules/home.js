angular
  .module('mainApp')
  .controller('homeController', ['$scope', '$http', '$timeout', '$state', '$filter', 'profileDbAccessService', 'apiUrlService', 'toastr', 
    function($scope, $http, $timeout, $state, $filter, profileDbAccessService, apiUrlService, toastr) {
  
    var ctrl = this;

    ctrl.drpdwn_value = "";
    ctrl.userId = "";
    ctrl.postId = "";

  //angular state decided on input actions
    ctrl.proceed = function(){
      if(ctrl.drpdwn_value == 'user' && ctrl.userId != '')
        //if dropdown value is user and userId not specified then list all users
        $state.go('user',{userId: ctrl.userId});
      else if(ctrl.drpdwn_value == 'user' && ctrl.userId == '')
        //if dropdown value is user and userId is specified then show specific user
        $state.go('users');
      else if(ctrl.drpdwn_value == 'post' && ctrl.postId != '')
        //if dropdown value is post and posId not specified then list all posts
        $state.go('spost',{postId: ctrl.postId});
      else if(ctrl.drpdwn_value == 'post' && ctrl.postId == '')
        //if dropdown value is post and postId is specified then show specific post
        $state.go('posts');
      else if(ctrl.drpdwn_value == 'new_post' && ctrl.userId != '')
        //if dropdown value is new_post then show add post form
        $state.go('new',{userId: ctrl.userId});
    }
    
  }]);