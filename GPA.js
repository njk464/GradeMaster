var GPA = 0;
var fGPA = 0;
ActiveClasses = new Array();
CompClasses = new Array();
TempClasses = new Array();
function calculateGPA() {
	classCount = parseInt( 0 + getCookie("classCount"));
    var a = 0;
    var b = 0;
    var hours = 0.0;
    var fhours = 0.0;
    for (var i = 0; i < classCount; i++)
    {
    	var c = {
			grade: getCookie("class"+i+"grade"),
			hours: parseInt(getCookie("class"+i+"hours")),
    	};
    	fhours+=c.hours;
    	if (getCookie("class"+i+"comp")=="yes")
    	{
    		hours += c.hours;
    		CompClasses[a] = c;
    		a++;
    	}
    	else
    	{
    		ActiveClasses[b] = c;
    		b++;
    	}
    }

    for (var x = 0; x < CompClasses.length; x++)
    {
    	var t = CompClasses[x];
    	if (t.grade == "A")
    		GPA+= 4.0*t.hours/hours;
    	if (t.grade == "A-")
    		GPA+= 3.67*t.hours/hours;
    	if (t.grade == "B+")
    		GPA+= 3.33*t.hours/hours;
    	if (t.grade == "B")
    		GPA+= 3.0*t.hours/hours;
    	if (t.grade == "B-")
    		GPA+= 2.67*t.hours/hours;
    	if (t.grade == "C+")
    		GPA+= 2.33*t.hours/hours;
    	if (t.grade == "C")
    		GPA+= 2.0*t.hours/hours;
    	if (t.grade == "C-")
    		GPA+= 1.67*t.hours/hours;
    	if (t.grade == "D+")
    		GPA+= 1.33*t.hours/hours;
    	if (t.grade == "D")
    		GPA+= 1.0*t.hours/hours;
    	if (t.grade == "D-")
    		GPA+= 0.67*t.hours/hours;
    	if (t.grade == "F+")
    		GPA+= 0.33*t.hours/hours;
    	if (t.grade == "F")
    		GPA+= 0.0;
    }
    fGPA += GPA*hours/fhours;
    console.log(fhours);
    for (var y = 0; y < ActiveClasses.length;y++)
    {
    	var t = ActiveClasses[y];
    	console.log(t.grade);
    	if (t.grade == "A")
    		fGPA += 4.0*t.hours/fhours;
    	if (t.grade == "A-")
    		fGPA += 3.67*t.hours/fhours;
    	if (t.grade == "B+")
    		fGPA += 3.33*t.hours/fhours;
    	if (t.grade == "B")
    		fGPA += 3.0*t.hours/fhours;
    	if (t.grade == "B-")
    		fGPA += 2.67*t.hours/fhours;
    	if (t.grade == "C+")
    		fGPA += 2.33*t.hours/fhours;
    	if (t.grade == "C")
    		fGPA += 2.0*t.hours/fhours;
    	if (t.grade == "C-")
    		fGPA += 1.67*t.hours/fhours;
    	if (t.grade == "D+")
    		fGPA += 1.33*t.hours/fhours;
    	if (t.grade == "D")
    		fGPA += 1.0*t.hours/fhours;
    	if (t.grade == "D-")
    		fGPA += 0.67*t.hours/fhours;
    	if (t.grade == "F+")
    		fGPA += 0.33*t.hours/fhours;
    	if (t.grade == "F")
    		fGPA += 0.0;
    }
    console.log (fGPA);
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
	calculateGPA();
	console.log(GPA);
	var sgpa = ""+GPA;
	var fgpa = ""+fGPA
	if (sgpa.length >= 4)
		sgpa = sgpa.substring(0,4);
	if (fgpa.length >= 4)
		fgpa = fgpa.substring(0,4);
	$("#gpa").append("<label id = cgpa class = GPA>Your Actual GPA is equal to "+sgpa+"!!!\n  Your GPA with current predicted grades is "+fgpa+"!!!</label>");
});
