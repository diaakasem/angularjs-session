describe('Controller: TasksCtrl', function () {

  // load the controller's module
  beforeEach(module('angularSessionApp'));

  var TasksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TasksCtrl = $controller('TasksCtrl', {
      $scope: scope
    });
  }));

  it('should have tasks array', function () {
      expect(scope.tasks).toBeDefined();
  });

  it('should have a task object', function(){
      expect(scope.task).toBeDefined();
  });

  describe('create method', function(){
      it('should save the tasks in localStorage', function(){
          spyOn(localStorage, 'setItem');
          scope.create();
          expect(localStorage.setItem).toHaveBeenCalled();
      });
  });

});
