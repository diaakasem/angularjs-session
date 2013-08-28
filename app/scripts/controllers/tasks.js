angular.module('angularSessionApp')
  .controller('TasksCtrl', function ($scope) {
      var taskModel = {title: '', description:'', time:''};
      $scope.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      $scope.task = taskModel;
      
      $scope.create = function(){
          $scope.task.time = new Date();
          $scope.tasks.push($scope.task);
          $scope.task = taskModel;
          localStorage.setItem('tasks', JSON.stringify($scope.tasks));
      };
  });
