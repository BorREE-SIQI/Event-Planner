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
    var d= document.getElementById("main");
    d = document.getElementById("menu");
    // if(d.style.display == "none") {
    //     d = document.getElementById("menu");
    // }
    // else {
    //     d.style.display = "none";
    // }
}