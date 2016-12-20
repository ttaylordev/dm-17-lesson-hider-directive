(() => {
  'use strict';
  angular.module("directivePractice").directive("lessonHiderDir", function() {
    return {
      templateUrl: './../html/lessonHider.html',
      // controller: 'controllerNameCtrl',
      template: '',
      restrict: 'E' // ,
      // link: () => {}
    };

  });
})();
