angular
  .module('mainApp')
  .controller('userDatailController', ['$scope', '$http', '$timeout', '$state', '$filter', 'profileDbAccessService', 'apiUrlService', 'toastr', 'userData', 'userTodos',
    function($scope, $http, $timeout, $state, $filter, profileDbAccessService, apiUrlService, toastr, userData, userTodos) {
  
    var ctrl = this;
    //get user details from resolve
    ctrl.userDetails = userData.data;
    ctrl.UserTodos = userTodos.data;
  }]);