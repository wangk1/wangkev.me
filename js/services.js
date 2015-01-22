var m_service=angular.module('mservice',[]);

//Object that encapsulates global variables
m_service.factory('$global_vars',['$rootScope',function($rootScope) {
	var canvas_id='canvas';
	var canvas_num_hexagon=3;
	var hexagon_percent=10.7;
	var hexagon_radius=hexagon_percent/100*window.innerHeight;
		
	$rootScope.$watch(function() {
		return hexagon_percent;	

	},function(new_var,old_var) {			
		hexagon_radius=hexagon_percent/100*window.innerHeight;

	});	

	return {
		canvas_id:canvas_id,
		hexagon_radius:hexagon_radius	

	};

}]);

//Service for drawing hexagons

m_service.factory('$hexDraw',['$global_vars','$rootScope',function($global,$rootScope){
	//Associative array that holds the key to project_obj pairing
	var hexTracker={};

	var canvas=new fabric.Canvas($global.canvas_id,{width:window.innerWidth,height:window.innerHeight});



	//watch the number of hexagons for change
	$rootScope.$watch(function() {
		return	$global.canvas_num_hexagon;
	}, function(new_,old) {
		generate_hexagon_grid();	

	});
		
	
	//constructor for creating hexagon points
	var Point=function(x,y) {this.x=x,this.y=y};

	var create_hexagon=function(setting_obj,info_object) {
		var angle=30;

		var points=[];
		for(var index=0;index<6;index++) {
			points[index]=new Point(setting_obj.x+Math.sin(angle/180*Math.PI)*setting_obj.radius,
			       setting_obj.y+Math.cos(angle/180*Math.PI)*setting_obj.radius);
			angle+=60;
		
		};

		
		return new fabric.Polygon(points,{
			fill:setting_obj.color,
			selectable:false

		});	
			

	};	
	
	var generate_hexagon_grid=function() {
		

	};	
		
	return {
		Setting:function(x,y,radius,color) {
			this.color=color;
			this.radius=radius;	
			this.x=x;
			this.y=y;
		},


		//Add the hexagon canvas_obj
		add_hexagon:function(id,hexagon){
			hexTracker[id]=hexagon;
			canvas.add(hexagon);		

		},
		create_hexagon:create_hexagon,


		//remove hexagon with id
		remove_hexagon:function(id) {
			if(hexTracker.id) {
			
				canvas.remove(hexTracker[id]);

				delete hexTracker.id;
			}

		},
		
		//set the canvas height to the whole screen
		resetCanvas: function(){
			canvas.setWidth(window.innerWidth);
			canvas.setHeight(window.innerHeight);
			canvas.calcOffset();	

		}	

		
	};
}]);

//Service for htttp request to server to get work experience informations
//app.factory('$
