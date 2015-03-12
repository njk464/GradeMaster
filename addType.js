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
  if (name.val()==""|| percent.val()=="")
  {
    var txt = document.createElement('p');
    txt.innerHTML = "Please fill in all requirements";
    var txt2 = $(txt)
    txt2.css('color', 'red');
    $("#error").append(txt2);
    return false;
  }
  typeCount = 0+getCookie("class" + currentClassId + "size");
  typeCount = parseInt(typeCount);
  setCookie("class"+currentClassId+"type"+typeCount+"name",name.val(),365);
  name.val("");
  setCookie("class"+currentClassId+"type"+typeCount+"percent",percent.val(),365);
  percent.val("");
  setCookie("class"+currentClassId+"size", typeCount+1, 365);
  return true;
}