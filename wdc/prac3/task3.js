var c = 0;

function count()
{
    c = c+1;
    document.getElementById("blank").innerHTML = c;
}

function po()
{
    const n = new Date();
    document.getElementsByClassName("post-time").innerHTML = n;
}