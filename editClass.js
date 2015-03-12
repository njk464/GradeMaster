currentClassId = getCookie("currentClassId");
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
$(document).ready(function() {
	load();
	$("#submit").on("click", function() {
		if (readInput())
		{
			window.open("Classes.html")
			window.close();
		}
	});
});
function load() {
	console.log(currentClassId);
	var name = getCookie("class"+currentClassId+"name");
	var hours = getCookie("class"+currentClassId+"hours");
	var comp = getCookie("class"+currentClassId+"comp");
	var grade = getCookie("class"+currentClassId+"grade");
	var semester = getCookie("class"+currentClassId+"semester").split(" ");
	var year = semester[1];
	var season = semester[0];
	$("#name").val(name);
	$("#hours").val(hours);
	$("#comp").val(comp);
	$("#grade").val(grade);
	$("#year").val(year);
	$("#season").val(season);
}
function readInput(){
	var name = $("#name");
	var hours = $("#hours");
	var comp = $("#comp");
	var grade = $("#grade");
	var year = $("#year");
	var season = $("#season");
	var c = comp.val();
	var g = grade.val();
	var y = year.val();
	var s = season.val();
	if (name.val()==""|| hours.val()=="" || c=="--"||(c=="yes"&&g=="--")
		||y=="--"||s=="--")
	{
		var txt = document.createElement('p');
		txt.innerHTML = "Please fill in all requirements";
		var txt2 = $(txt)
		txt2.css('color', 'red');
		$("#error").append(txt2);
		return false;
	}
	setCookie("class"+currentClassId+"name",name.val(),365);
	name.val("");
	setCookie("class"+currentClassId+"hours",hours.val(),365);
	hours.val("");
	setCookie("class"+currentClassId+"comp",comp.val(),365);
	comp.val("");
	setCookie("class"+currentClassId+"grade",grade.val(),365);
	grade.val("");
	setCookie("class"+currentClassId+"semester",season.val() + " " + year.val(),365);
	year.val("");
	season.val("");
	return true;
}