var c = 0;

function count()
{
    c = c+1;
    document.getElementById("blank").innerHTML = c;
}

function function1()
{
    const n = new Date();
    var posts=[]
    var date= document.getElementsByClassName("post-time");
    var content= document.getElementsByClassName("post-content");
    posts.push({
        "date": date,
        "content": content

    })
    for(var i=0;i<posts.length;i++){
        a[0].innerText += n;
        b[0].innerHTML += x;
    }
    const a = document.getElementsByClassName("post-time");
    a[0].innerText += n;

    var x = document.getElementById("t").value;
    const b = document.getElementsByClassName("post-content");
    b[0].innerHTML += x;
}