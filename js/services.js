var m_service=angular.module('mservice',[]);

//Object that encapsulates global variables
m_service.factory('$global_vars',function() {
	var canvas_id='canvas';
	var hexagon_radius=50;
		
	return {
		canvas_id:canvas_id,
		hexagon_radius:hexagon_radius	

	};

});

//Service for drawing hexagons

m_service.factory('$hexDraw',['$global_vars',function($global){
	//Associative array that holds the key to project_obj pairing
	var hexTracker={};

	var canvas=new fabric.Canvas($global_vars.canvas_id);
	
	var project_obj=function(canvas_obj,info_obj){
		this.canvas_obj=canvas_obj;
		this.info_obj=info_obj;
	};
		
	return {
		//create and return canvas obj. Freeze it after
		create_canvas_obj:function(){
			return {
				

			};
		},

		//Add the hexagon canvas_obj
		add_hexagon:function(x,y,canvas_obj){

		},

		//remove hexagon with id
		remove_hexagon:function(id) {
			if(hexTracker.id) {
				delete hexTracker.id;
			
			}

		}	

		
	};
}]);

//Service for htttp request to server to get work experience informations
