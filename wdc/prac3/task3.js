var c = 0;

function count()
{
    c = c+1;
    document.getElementById("blank").innerHTML = c;
}

function function1()
{
    const n = new Date();
    const a = document.getElementsByClassName("post-time");
    a[0].innerText += n;

    var x = document.getElementById("t").value;
    const b = document.getElementsByClassName("post-content");
    b[0].innerHTML += x;
}