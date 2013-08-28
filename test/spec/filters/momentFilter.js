describe('Filter: momentFilter', function () {

  // load the filter's module
  beforeEach(module('angularSessionApp'));

  // initialize a new instance of the filter before each test
  var momentFilter;
  beforeEach(inject(function ($filter) {
    momentFilter = $filter('momentFilter');
  }));

  it('should return date in few seconds', function () {
    var date = new Date();
    var result = momentFilter(date);
    expect(result).toBe('a few seconds ago');
  });

});
