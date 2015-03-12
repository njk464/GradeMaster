cci = getCookie("currentClassId");
cti = getCookie("currentTypeId");
cai = getCookie("currentAssignId");
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
function load(){

    var name = getCookie("class"+cci+"type"+cti+"assign"+cai+"name");
    var percent = getCookie("class"+cci+"type"+cti+"assign"+cai+"percent");
    var grade = getCookie("class"+cci+"type"+cti+"assign"+cai+"grade");
    var comp = getCookie("class"+cci+"type"+cti+"assign"+cai+"comp");
    $("#name").val(name);
    $("#percent").val(percent);
    $("#grade").val(grade);
    $("#comp").val(comp);
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
function readInput(){
	var name = $("#name");
	var percent = $("#percent");
	var comp = $("#comp");
	var grade = $("#grade");
	var c = comp.val();
	if (name.val()==""|| percent.val()=="" || c=="--"||(c=="yes"&&grade==""))
	{
		var txt = document.createElement('p');
		txt.innerHTML = "Please fill in all requirements";
		var txt2 = $(txt)
		txt2.css('color', 'red');
		$("#error").append(txt2);
		return false;
	}
	setCookie("class"+cci+"type"+cti+"assign"+cai+"name",name.val(),365);
	name.val("");
	setCookie("class"+cci+"type"+cti+"assign"+cai+"percent",percent.val(),365);
	grade.val("");
    setCookie("class"+cci+"type"+cti+"assign"+cai+"grade",grade.val(),365);
    percent.val("");
    setCookie("class"+cci+"type"+cti+"assign"+cai+"comp",comp.val(),365);
	comp.val("");
	console.log(grade.val());
	return true;
}