(() => {
  'use strict';
  angular.module("directivePractice").controller("lessonCtrl", ['$scope', function($scope){
    $scope.lessonsArr = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
    $scope.test = 'Two-way data binding (lessonCtrl)!';
  }]);
})();
