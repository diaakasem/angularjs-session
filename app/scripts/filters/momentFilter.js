angular.module('angularSessionApp')
  .filter('momentFilter', function () {
    return function (input) {
      return  moment(input).fromNow();
    };
  });
