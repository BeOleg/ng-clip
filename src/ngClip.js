'use strict';

angular.module('ngClipboard', []).
  provider('ngClip', function() {
    var self = this;
    this.path = '//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/1.2.3/ZeroClipboard.swf';
    return {
      setPath: function(newPath) {
       self.path = newPath
      },
      $get: function() {
        return {
          path: self.path
        };
      }
    }
  }).
  run(['$document', 'ngClip', function($document, ngClip) {
    ZeroClipboard.config({
      moviePath: ngClip.path,
      trustedDomains: ["*"],
      allowScriptAccess: "always",
      forceHandCursor: true
    });
  directive('clipCopy', ['$window', 'ngClip', 'zeroclipboardService', function ($window, ngClip, zeroclipboardService) {
    return {
      scope: {
        clipCopy: '&',
        clipClick: '&'
      },
      restrict: 'A',
      link: function (scope, element, attrs) {
        var clip = zeroclipboardService.get(scope.objId) || new ZeroClipboard();
        scope.objId = objId || zeroclipboardService.set(clip);
        clip.on( 'load', function(client) {
          var onMousedown = function (client) {
            client.setText(scope.$eval(scope.clipCopy));
            if (angular.isDefined(attrs.clipClick)) {
              scope.$apply(scope.clipClick);
            }
          };
          client.on('dataRequested', onMousedown);

          scope.$on('$destroy', function() {
            client.off('dataRequested', onMousedown);
            client.unglue(element);
          });
        });
      }
    }
  }]).
  service('zeroclipboardService', function(){
    var zcList = [];
    return{
      get: function(id){
        return zcList[id];
      },
      set: function(obj){
        zcList.push(obj);
        return zcList.length - 1;
      }
    }
  });