(() => {
  'use strict';
  angular.module("directivePractice").directive("lessonHiderDir", function() {

    return {
      templateUrl: './../html/lessonHider.html',
      // controller: 'controllerNameCtrl',
      template: '',
      restrict: 'E',
      scope: {
        lesson: '=' 
      },
      link: (scope, element, attrs) => {
        console.log(scope);
        console.log(element);
        console.log(attrs);
      }
    }
  });
})();
