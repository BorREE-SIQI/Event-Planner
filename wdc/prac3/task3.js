var c = 0;

function count()
{
    c = c+1;
    document.getElementById("blank").innerHTML = c;
}

function function1()
{
    const n = new Date();
    const a = document.createElement("p");
    a.className = "post-time";
    a.innerText = n;
    document.getElementById("posts").appendChild(a);

    var radios = document.getElementsByName("style").value;
    if(radios === "bold")
    {
        var x = document.getElementById("t").value;
        let boldText = x.bold();
        const b = document.createElement("p");
        b.className = "post-content";
        b.innerHTML = boldText;
        document.getElementById("posts").appendChild(b);
    }
    if(radios === "italic")
    {
        var x = document.getElementById("t").value;
        let italicText = x.italics();
        const b = document.createElement("p");
        b.className = "post-content";
        b.innerHTML = italicText;
        document.getElementById("posts").appendChild(b);
    }

    else{
    var x = document.getElementById("t").value;
    const b = document.createElement("p");
    b.className = "post-content";
    b.innerHTML = x;
    document.getElementById("posts").appendChild(b);
    }



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
    let i = document.getElementById("name").value

    document.body.style.backgroundColor = i;
}