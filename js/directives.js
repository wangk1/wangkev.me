var directives=angular.module('mdirective',[]);

//directive for the navigation bar
directives.directive('dtNavigate',function() {
	return {
		templateUrl: 'partials/dt-navigate.html',
		
		restrict:'E'
	};


});

directives.directive('dtFooter',function() {
	return {
		templateUrl: 'partials/dt-footer.html',
		
		restrict:'E'

	};

});
