angular
  .module('mainApp')
  .controller('addPostController', ['$scope', '$http', '$timeout', '$state', '$filter', 'profileDbAccessService', 'apiUrlService', 'toastr', 'userIdInfo',
    function($scope, $http, $timeout, $state, $filter, profileDbAccessService, apiUrlService, toastr,userIdInfo) {
  
    //if userId is not specified on page then go to home
    var ctrl = this;
    if(userIdInfo == '' || userIdInfo == null)
    {
      $state.go('home');
    }

    ctrl.p_title = "";
    ctrl.p_body = "";

    //add new post
    ctrl.add_post = function(){
      //creating data for new post
      var data = {
                title: ctrl.p_title,
                body: ctrl.p_body,
                userId: userIdInfo
              }; 
        // calling post services defined in app.js
        var url = apiUrlService.urls.POST_NEW_INFO();
        var getPromise = profileDbAccessService.postData(url,data);
        
        getPromise.then(function(responseValue){
          //if responsve values are appropriate then show success message
            if(responseValue.statusText == 'Created')
            {            
              toastr.success("New Post has been added.");
            }
            else
            {
              //if there is error white adding posts then display error
              toastr.error("Uh Oh! Something went wrong. We are looking into it");
            }
        }, function(reason){
          toastr.error("Uh Oh! Something went wrong. We are looking into it");
        });
    } 
   
    
  }]);