var names=[];
function submit() {
    var name=document.getElementById("names").value;
    names.push(name);
    console.log(names);
    document.getElementById("guests").innerHTML=names;
    document.getElementById("names").value="";
    document.getElementById("names").focus();
}
function show(){
    var display=[];
    for(var i=0;i<names.length;i++)
    {
        display.push(names[i]+"<br>");
    }
    document.getElementById("show_guests").innerHTML=display.join(" ");
}
function sorting(){
    names.sort();
    var display=[];
    for(var i=0;i<names.length;i++)
    {
        display.push(names[i]+"<br>");
    }
    document.getElementById("sort_guests").innerHTML=display.join(" ");
}
function search(){
    s=document.getElementById("search").value;
    var f=0;
    for(i=0;i<names.length;i++)
    {
        if(s==names[i])
            f++;
    }
    if(f>0)
        document.getElementById("search_guests").innerHTML="Name found "+f+" time(s)";
    else
    document.getElementById("search_guests").innerHTML="Name not found.";
}