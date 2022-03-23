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

    document.getElementById("main").style.display="none";
    document.getElementById("menu").style.display="block";

}

function back()
{
    document.getElementById("main").style.display="block";
    document.getElementById("menu").style.display="none";

}

function color()
{
    const i = document.getElementById("name")
    i.addEventListener('i', event => {
        
    }
}