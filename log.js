function saveData() {
    var uname = document.forms["myForm"]["uname"].value;
    var psw = document.forms["myForm"]["psw"].value;
    var gmail = document.forms["myForm"]["gmail"].value;

    localStorage.setItem("uname", uname);
    localStorage.setItem("psw", psw);
    localStorage.setItem("gmail", gmail);

    
    document.forms["myForm"]["uname"].value = "";
    document.forms["myForm"]["psw"].value = "";
    document.forms["myForm"]["gmail"].value = "";
}