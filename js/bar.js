$(document).ready(function () {

	var ctx = $("#bar-chartcanvas");

	var data = {
		labels : [1,2,3,4,5],
		datasets : [
			{
				label : "Cl Content",
				data : [10, 50, 25, 70, 40],
				backgroundColor : [
					"rgba(10, 20, 30, 0.3)",
					"rgba(10, 20, 30, 0.3)",
					"rgba(10, 20, 30, 0.3)",
					"rgba(10, 20, 30, 0.3)",
					"rgba(10, 20, 30, 0.3)"
				],
				borderColor : [
					"rgba(10, 20, 30, 1)",
					"rgba(10, 20, 30, 1)",
					"rgba(10, 20, 30, 1)",
					"rgba(10, 20, 30, 1)",
					"rgba(10, 20, 30, 1)"
				],
				borderWidth : 1
			},
			
		]
	};

	var options = {
		title : {
			display : true,
			position : "top",
			text : "Bar Graph",
			fontSize : 18,
			fontColor : "#111"
		},
		legend : {
			display : true,
			position : "bottom"
		},
		scales : {
			yAxes : [{
				ticks : {
					min : 0
				}
			}]
		}
	};

	var chart = new Chart( ctx, {
		type : "bar",
		data : data,
		options : options
	});

});