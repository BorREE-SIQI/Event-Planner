var c = 0;

function count()
{
    c = c+1;
    document.getElementById("blank").innerHTML = c;
}

function function1()
{
    const n = new Date();
    const a = document.createElement("span");
    a.className = "post-time";
    a.innerText = n+"\n"+"\n";
    document.getElementById("posts").appendChild(a);

    var x = document.getElementById("t").value;
    const b = document.createElement("span");
    b.className = "post-content";
    b.innerHTML = x;
    document.getElementById("posts").appendChild(b);

}

function hide()
{

    document.getElementById("main").innerHTML= document.getElementById("menu").innerHTML;

}

function back()
{
    //document.getElementById("menu") = "none";

    document.getElementById("menu") = "none";
    //.innerHTML= document.getElementById("main").innerHTML;
}