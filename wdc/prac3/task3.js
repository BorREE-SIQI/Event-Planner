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
    var a= document.getElementsByClassName("post-content");
    a[0].innerHTML+= x;
}