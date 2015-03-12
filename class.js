classes = new Array();
map = {};
function clas ()
{
    this.index=0;
    this.name="";
    this.hours=0;
    this.grade=0;
    this.points=0;
    this.type = new Array();
    this.size = 0;
    this.semester="";
    this.completed=false;
}
clas.prototype.setIndex = function (index){this.index = index;}
clas.prototype.getIndex = function (){return this.index;}
clas.prototype.setName = function (name){this.name = name;}
clas.prototype.getName = function (){return this.name;}
clas.prototype.setGrade = function (grade){this.grade = grade;}
clas.prototype.getGrade = function (){return this.grade;}
clas.prototype.setHours = function (hours){this.hours = hours;}
clas.prototype.getHours = function (){return this.hours;}
clas.prototype.setPoints = function (points){this.points = points;}
clas.prototype.getPoints = function (){return this.points;}
clas.prototype.addType = function (type){this.type[this.type.length] = type;}
clas.prototype.removeType = function (index){this.type.slice (index, index+1);}
clas.prototype.getType = function (index){return this.type[index];}
clas.prototype.setSemester = function (semester){this.semester = semester;}
clas.prototype.getSemester = function (){return this.semester;}
clas.prototype.setCompleted = function (comp){this.completed = comp;}
clas.prototype.getCompleted = function (){return this.completed;}
clas.prototype.setSize = function (size){this.size = size;}
clas.prototype.getSize = function (){return this.size;}
function type ()
{
    this.name="";
    this.percent=0;
    this.index=0;
    this.assignments=new Array();
    this.size=0;
}
type.prototype.setName = function (name){this.name = name;}
type.prototype.getName = function (){return this.name;}
type.prototype.setPercent = function (percent){this.percent = percent;}
type.prototype.getPercent = function (){return this.percent;}
type.prototype.setIndex = function (index){this.index = index;}
type.prototype.getIndex = function (){return this.index;}
type.prototype.addAssign = function (assignment){this.assignments[this.assignments.length] = assignment;}
type.prototype.removeAssign = function (index){this.assignments.slice (index, index+1);}
type.prototype.getAssign = function (index){return this.assignments[index];}
type.prototype.setSize = function (size){this.size = size;}
type.prototype.getSize = function (){return this.size;}
function assignment ()
{
    this.name;
    this.grade;
    this.percent;
    this.completed;
    this.index;
}
assignment.prototype.setName = function (name){this.name = name;}
assignment.prototype.getName = function (){return this.name;}
assignment.prototype.setGrade = function (grade){this.grade = grade;}
assignment.prototype.getGrade = function (){return this.grade;}
assignment.prototype.setPercent = function (percent){this.percent = percent;}
assignment.prototype.getPercent = function (){return this.percent;}
assignment.prototype.setCompleted = function (comp){this.completed = comp;}
assignment.prototype.getCompleted = function (){return this.completed;}
assignment.prototype.setIndex = function (index){this.index = index;}
assignment.prototype.getIndex = function (){return this.index;}
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
function calculate_grades () {
    classCount = parseInt( 0 + getCookie("classCount"));
    for (var i = 0; i < classCount; i++)
    {
        if (classes[i].getCompleted() != "yes")
        {
            var grade = 0.0;
            var points = 0.0;
            for (var x = 0; x< classes[i].getSize();x++)
            {
                var t = classes[i].getType(x);
                var div = 1.0*t.getPercent();
                for (var y = 0;y < t.getSize(); y++)
                {
                    var a = t.getAssign(y);
                    if (a.getCompleted() =="yes")
                    {
                        grade += a.getGrade()/100.0*a.getPercent()*div;
                        points += div *a.getPercent();
                    } 
                }
            }
            console.log(grade);
            console.log(points);
            grade = grade/points*100;
            console.log(grade);
            classes[i].setGrade("F");
            getCookie("class"+i+"grade", classes[i].getGrade(),365);
            if (grade > 60)
            {
                classes[i].setGrade("D-");
                setCookie("class"+i+"grade", classes[i].getGrade(),365);
            }
            if (grade > 64)
            {
                classes[i].setGrade("D");
                setCookie("class"+i+"grade", classes[i].getGrade(),365);
            }
            if (grade > 67)
            {
                classes[i].setGrade("D+");
                setCookie("class"+i+"grade", classes[i].getGrade(),365);
            }
            if (grade > 70)
            {
                classes[i].setGrade("C-");
                setCookie("class"+i+"grade", classes[i].getGrade(),365);
            }
            if (grade > 74)
            {
                classes[i].setGrade("C");
                setCookie("class"+i+"grade", classes[i].getGrade(),365);
            }
            if (grade > 77)
            {
                classes[i].setGrade("C+");
                setCookie("class"+i+"grade", classes[i].getGrade(),365);
            }
            if (grade > 80)
            {
                classes[i].setGrade("B-");
                setCookie("class"+i+"grade", classes[i].getGrade(),365);
            }
            if (grade > 84)
            {
                classes[i].setGrade("B");
                setCookie("class"+i+"grade", classes[i].getGrade(),365);
            }
            if (grade > 87)
            {
                classes[i].setGrade("B+");
                setCookie("class"+i+"grade", classes[i].getGrade(),365);
            }
            if (grade > 90)
            {
                classes[i].setGrade("A-");
                setCookie("class"+i+"grade", classes[i].getGrade(),365);
            }
            if (grade > 93)
            {
                classes[i].setGrade("A");
                setCookie("class"+i+"grade", classes[i].getGrade(),365);
            }
        }
    }
}
function load ()
{
    classCount = parseInt( 0 + getCookie("classCount"));
    console.log(classCount);
    for (var i = 0; i < classCount; i++)
    {
        classes[i] = new clas();
        classes[i].setIndex(i);
        classes[i].setName(getCookie("class"+i+"name"));
        classes[i].setIndex(i);
        classes[i].setHours(parseInt(getCookie("class"+i+"hours")));
        classes[i].setCompleted(getCookie("class"+i+"comp"));
        if (classes[i].getCompleted()=="yes")
            classes[i].setGrade(getCookie("class"+i+"grade"));
        classes[i].setSemester(getCookie("class"+i+"semester"));
        classes[i].setSize(parseInt(0+getCookie("class"+i+"size")));
        for (var x = 0; x < classes[i].getSize(); x++)
        {
            var t = new type();
            t.setIndex(x);
            t.setName(getCookie("class"+i+"type"+x+"name"));
            t.setPercent(getCookie("class"+i+"type"+x+"percent"));
            t.setSize(0 + parseInt(getCookie("class"+i+"type"+x+"size")));
            for (var y = 0; y < t.getSize(); y++)
            {
                var a = new assignment();
                a.setIndex(y);
                a.setName(getCookie("class"+i+"type"+x+"assign"+y+"name"));
                a.setGrade(0 + parseInt(getCookie("class"+i+"type"+x+"assign"+y+"grade")));
                a.setPercent(0 + parseInt(getCookie("class"+i+"type"+x+"assign"+y+"percent")));
                a.setCompleted(getCookie("class"+i+"type"+x+"assign"+y+"comp"));
                t.addAssign(a);
                map[classes[i].getName()+i+t.getName()+x+a.getName()] = y;
            }
            classes[i].addType(t);
            map[classes[i].getName()+i+t.getName()]= x;
        }
        $("#classes").append("<option id =" +i+">" + classes[i].getName() +"</option>");
        map[classes[i].getName()] = i;
    }
}
load();
$(document).ready(function() {
	load();
    calculate_grades();
    $("#Select").on("click", function() {
        console.log("gets here");
        $("#EditClass").remove();
        $("#addType").remove();
        $("#Categories").remove();
        $("#cat").remove();
        $("#selectc").remove();
        $("#assignments").remove();
        $("#classinfo").remove();
        $("#table").append("<input type=button id=EditClass value=EditClass></input>");
        $("#table").append("<div id=classinfo></div>");
        $("#table").append("<input type=button id=addType value=AddType></input>");
        $("#table").append("<label id=Categories>Categories</label>");
        $("#table").append("<select id=cat></select>");
        $("#table").append("<input type = button id =selectc value =Select></input>");
        $("#table").append("<div id = assignments></div>");

        var elem = $("#classes").val();
        var index = map[elem];
        $("#classinfo").append("<p>Class Name = "+elem+"</p>");
        $("#classinfo").append("<p>Complete? = "+classes[index].getCompleted()+"</p>");
        $("#classinfo").append("<p>Class Grade = "+classes[index].getGrade()+"</p>");
        $("#classinfo").append("<p>Number of categories = "+classes[index].getSize()+"</p>");
        $("#classinfo").append("<p>Number of Hours = "+classes[index].getHours()+"</p>");
        $("#classinfo").append("<p>Semester = "+classes[index].getSemester()+"</p>");
        console.log(index);
        setCookie("currentClassId", index, 365);
        var size = classes[index].getSize();
        for (var i = 0; i < size; i++)
        {
            var t = classes[index].getType(i);
            console.log(t.getName());
            $("#cat").append("<option id =" +i+">" + t.getName() +"</option>");
        }
    });  
});
$(document).on('click', '#EditClass', function() {
    window.open("editClass.html");
    window.close();    
});
$(document).on('click', '#addType', function() {
    window.open("addType.html");  
    window.close();
});
$(document).on('click', '#selectc', function() {
    $("#EditType").remove();
    $("#addAssign").remove();
    $("#Assignments").remove();
    $("#ass").remove();
    $("#selecta").remove();
    $("#typeinfo").remove();
    $("#table").append("<input type=button id=EditType value=EditCategory></input>");
    $("#table").append("<div id = typeinfo></div>");
    $("#table").append("<input type=button id=addAssign value=AddAssign></input>");
    $("#table").append("<label id=Assignments>Assignments</label>");
    $("#table").append("<select id=ass></select>");
    $("#table").append("<input type = button id =selecta value =Select></input>");
    var elem = $("#classes").val();
    var elem2 = $("#cat").val();
    var index = map[elem];
    var index2 = map[elem+index+elem2];
    $("#typeinfo").append("<p>Category Name = "+elem2+"<p>");
    $("#typeinfo").append("<p>Percent of Total Grade = "+classes[index].getType(index2).getPercent()+"<p>");
    $("#typeinfo").append("<p>Number of Assignments = "+classes[index].getType(index2).getSize()+"<p>");
    console.log(index2);
    setCookie("currentTypeId", index2, 365);
    var size = classes[index].getType(index2).getSize();
    for (var i = 0; i < size; i++)
    {
        var t = classes[index].getType(index2).getAssign(i);
        console.log(t.getName());
        $("#ass").append("<option id =" +i+">" + t.getName() +"</option>");
    }
});
$(document).on('click', '#EditType', function() {
    window.open("editType.html");
    window.close();
});
$(document).on('click', '#addAssign', function() {
    window.open("addAssign.html");
    window.close();    
});
$(document).on('click', '#selecta', function() {
    $("#EditAssign").remove();
    $("#assigninfo").remove();
    $("#table").append("<input type=button id=EditAssign value=EditAssign></input>");
    $("#table").append("<div id = assigninfo></div>");
    var elem = $("#classes").val();
    var elem2 = $("#cat").val();
    var elem3 = $("#ass").val();
    var index = map[elem];
    var index2 = map[elem+index+elem2];
    var index3 = map[elem+index+elem2+index2+elem3];
    $("#assigninfo").append("<p>Name of Assignment = "+elem3+"<p>");
    $("#assigninfo").append("<p>Percentage of Category = "+classes[index].getType(index2).getAssign(index3).getPercent()+"<p>");
    $("#assigninfo").append("<p>Current Grade = "+classes[index].getType(index2).getAssign(index3).getGrade()+"<p>");
    $("#assigninfo").append("<p>Completed?= "+classes[index].getType(index2).getAssign(index3).getCompleted()+"<p>");
    console.log(index3);
    setCookie("currentAssignId", index3, 365);
});
$(document).on('click', '#EditAssign', function() {
    window.open("editAssign.html");
    window.close();
});