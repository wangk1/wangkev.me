var app=angular.module('mwebsite',['mdirective','ngRoute']);

//Main Routing service

app.config(['$routeProvider','$locationProvider',function($rp,$lp) {
	$rp.when('/home',{
		templateUrl:'partials/dt-home.html',
		controller:'ctrlhome'	


	}).when('/about', {
		templateUrl:'partials/dt-about.html',
		controller:'ctrlabout'	


	}).otherwise({
		redirectTo:'/home'	

		
	});


}]);

//main top-layer controller
/*States
 * home
 * about
 * fame
 * projects
 * work
 *
 */
app.controller('ctrlmain',['$scope',function($scope){
	$scope.state="home";




}]);


//Controller for the home page
app.controller('ctrlhome',['$scope',function($scope) {
	$scope.lines={
		startAmt:8,
		num:0,

	};

	$scope.lines.data=[].concat((function c(number){
				return $scope.lines.num>8? [{num:number,val:""}]:
	       					[{num:number,val:""}].concat(c(++$scope.lines.num));

		     })(0));


}]);

//Controller for the about page
app.controller('ctrlabout',['$scope',function($scope) {
	


}]);


//The bottom navigation bar
app.controller('ctrlnav',['$scope',function($scope) {
	$scope.changeState=function(state) {
		$scope.state=state;

	};


}]);


