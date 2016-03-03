angular
  .module('mainApp')
  .controller('postController', ['$scope', '$http', '$timeout', '$state', '$filter', 'profileDbAccessService', 'apiUrlService', 'toastr', 'postsData',
    function($scope, $http, $timeout, $state, $filter, profileDbAccessService, apiUrlService, toastr, postsData) {
  
    var ctrl = this;
    //get post info
    ctrl.posts = postsData.data;
  }]);