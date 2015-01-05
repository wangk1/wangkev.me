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
	
	//the default array containing the data to be resetted when the button is clicked
	$scope.default_val=["//Feel free to change things around",
	"var node=document.getElementById('greeting');",
	"node.innerHTML='Hello, Kevin here.';"];

	$scope.lines.data=[].concat((function c(number){
				return $scope.lines.num>8? [{num:number,val:$scope.default_val[number]}]:
	       					[{num:number,val:$scope.default_val[number]}].concat(c(++$scope.lines.num));

		     })(0));

	
	$scope.reset=function() {
		$scope.lines.data.forEach(function(line,index){
			if($scope.default_val[index]) {
				$scope.lines.data[index].val=$scope.default_val[index];

			} else {
				line.val="";

			}

		});

		//refresh
		$scope.submit();	

	};
	
	$scope.submit=function() {
		var input=$scope.lines.data.reduce(function(prev,curr) {
			if(curr.val)
				return prev+curr.val+"\n";

			return prev;
		},"");

		alert("Note to self: add in security for eval");
		
		salert=alert;	
		(function(alert) {
			try{
				eval(input);
			} catch(e) {
				salert("Oops, error:\n "+e);
		
			};
		})();
	};
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


