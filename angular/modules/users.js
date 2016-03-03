angular
  .module('mainApp')
  .controller('userController', ['$scope', '$http', '$timeout', '$state', '$filter', 'profileDbAccessService', 'apiUrlService', 'toastr', 'usersData',
    function($scope, $http, $timeout, $state, $filter, profileDbAccessService, apiUrlService, toastr, usersData) {
  
    var ctrl = this;
    
    //get users information from resolve
    ctrl.users = usersData.data;
  }]);