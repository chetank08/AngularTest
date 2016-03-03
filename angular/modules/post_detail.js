angular
  .module('mainApp')
  .controller('postDetailController', ['$scope', '$http', '$timeout', '$state', '$filter', 'profileDbAccessService', 'apiUrlService', 'toastr', 'postInfo', 'postComments',
    function($scope, $http, $timeout, $state, $filter, profileDbAccessService, apiUrlService, toastr, postInfo, postComments) {
  
    var ctrl = this;
    //get post details
    ctrl.postDetails = postInfo.data;
    ctrl.postComments = postComments.data;
  }]);