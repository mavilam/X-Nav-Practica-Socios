
$(document).ready(function() {
	$('#tabs').tab();
    var updatemsg;

    $.getJSON( "update.json", function( data ) {
    	updatemsg = data;
    	var count = 0;
		for (var i in data) {
		    if (data.hasOwnProperty(i)) {
		       ++count;
		    }
		}
		console.log(count);
    	$("#update").html("Update " + count + " msg");
    });

    $.getJSON( "timeline.json", function( data ) {
    	$.each( data, function(i, item) {
    		var div = "#"+i+"timeline";
	       $("#timelinemsg").append("<div class=\"alert alert-danger \" id=\"" + i +"timeline\" role=\"alert\"></div>");
	       var inner = "<div class ='container'><div class='row'><div class='col-md-9'>";
				inner += "<h3>"+item["Author"]+"</h3><h4> "+item["Title"]+"</h4></br><button type='button' data-toggle='collapse' ";
				inner += "data-target='#all"+i+"' class='btn btn-danger'>Abrir</button>";
				inner += "<div class='collapse' id='all"+i+"'><div class='well'><p> "+item["Content"]+"</p></div></div></div>";
				inner += "<div class='col-md-2'><img class='Avatar' src='"+item["Avatar"]+"'></img>";
				inner += "<p>Date: "+item["Date"]+"</p>"
				inner += "</div></div></div></div></br>";
			$(div).append(inner);
	    });

	   
    });
    
    $.getJSON( "myline.json", function( data ) {
    	$.each( data, function(i, item) {
    		var div = "#"+i+"myline";
	       $("#mylinemsg").append("<div class=\"alert alert-danger \" id=\"" + i +"myline\" role=\"alert\"></div>");
	       var inner = "<div class ='container'><div class='row'><div class='col-md-9'>";
				inner += "<h3>"+item["Author"]+"</h3><h4> "+item["Title"]+"</h4></br><button type='button' data-toggle='collapse' ";
				inner += "data-target='#mylineall"+i+"' class='btn btn-danger'>Abrir</button>";
				inner += "<div class='collapse' id='mylineall"+i+"'><div class='well'><p> "+item["Content"]+"</p></div></div></div>";
				inner += "<div class='col-md-2'><img class='Avatar' src='"+item["Avatar"]+"'></img>";
				inner += "<p>Date: "+item["Date"]+"</p>"
				inner += "</div></div></div></div></br>";
			$(div).append(inner);
	    });
    });


    $("#update").click(function(){
	    $.each( updatemsg, function(i, item) {
	    	console.log(item);
    		var div = "#"+i+"updatetimeline";
	       $("#updatetimeline").append("<div class=\"alert alert-danger \" id=\"" + i +"updatetimeline\" role=\"alert\"></div>");
	       var inner = "<div class ='container'><div class='row'><div class='col-md-9'>";
				inner += "<h3>"+item["Author"]+"</h3><h4> "+item["Title"]+"</h4></br><button type='button' data-toggle='collapse' ";
				inner += "data-target='#newall"+i+"' class='btn btn-danger'>Abrir</button>";
				inner += "<div class='collapse' id='newall"+i+"'><div class='well'><p> "+item["Content"]+"</p></div></div></div>";
				inner += "<div class='col-md-2'><img class='Avatar' src='"+item["Avatar"]+"'></img>";
				inner += "<p>Date: "+item["Date"]+"</p>"
				inner += "</div></div></div></div></br>";
			$(div).append(inner);
	    });
	    $(this).parent().remove();
	 });
   

});