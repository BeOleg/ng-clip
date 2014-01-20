'use strict';
describe('clip-copy', function(){
	var scope, compile, html, zcService;
	
	beforeEach(function(){
		module('ngClip');
		inject(function($compile, $rootScope, $injector){
			scope = $rootScope.$new();
			zcService = $injector.$get('zeroclipboardService');
			scope.valueFn = function(elem){
				switch(elem){
					case scope.elem1:
						return function(){ return 'val1'};
					case scope.elem2:
						return function(){ return 'val2'};
					case scope.elem3: 
						return function(){ return 'val3'};
				}
			}
			scope.callbackFn = function(elem){
				switch(elem){
					case scope.elem1:
						return function(){ scope.callback['elem1'] = true};
					case scope.elem2:
						return function(){ scope.callback['elem2'] = true };
					case scope.elem3: 
						return function(){ scope.callback['elem3'] = true};

				}
			}

			html = '<span clip-copy="valFn(elem1)()" clip-click="callbackFn(elem1)()">Text node</span>';
			scope.elem1 = $compile(html)(scope);
			html = '<span clip-copy="valFn(elem2)()" clip-click="callbackFn(elem2)()">Text node</span>';
			scope.elem2 = $compile(html)(scope);
			html = '<span clip-copy="valFn(elem3)()" clip-click="callbackFn(elem3)()">Text node</span>';
			scope.elem3 = $compile(html)(scope);
			scope.callback = {};

		})
	});
 	it('should copy the data bound to a single element and call the callback', function(){

 	});
 	it('should copy the data bound to multiple elements and call the appropriate callback for each element', function(){

 	});
 	it('should unbind any existing delelgations on $destroy', function(){

 	});

})