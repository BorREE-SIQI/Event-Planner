var c = 0;

function count()
{
    c = c+1;
    document.getElementById("blank").innerHTML = c;
}

function function1()
{
    const n = new Date();
    //const date = document.createElement("post-time")
    // const a = document.getElementsByClassName("post-time");
    document.getElementById("posts").innerText = n;

    var x = document.getElementById("t").value;
    var e = document.createElement("div");
    e.innerHTML+= x;
    document.getElementById("posts").appendChild(e);
}