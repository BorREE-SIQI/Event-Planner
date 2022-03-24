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

    var boldCheck = document.getElementById("boldCheck").checked;
    var italicCheck = document.getElementById("italicCheck").checked;

    var blueCheck = document.getElementById("blueCheck").checked;
    var redCheck = document.getElementById("redCheck").checked;

    var x = document.getElementById("t").value;
    const b = document.createElement("p");
    b.className = "post-content";
    //b.innerHTML = x;
    //document.getElementById("posts").appendChild(b);

     if(boldCheck == true)
    {
        boldText = x.bold();
        b.innerHTML = boldText;
    }

    if(italicCheck == true)
    {
        italicText = x.italics();
        b.innerHTML = italicText;
    }

    if(boldCheck == true && italicCheck == true)
    {
        boldText = x.bold();
        italicText = boldText.italics();
        b.innerHTML = italicText;
    }
    if (boldCheck == false && italicCheck == false)
    {
        b.innerHTML = x;
    }

    if()

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
    let i = document.getElementById("name").value

    document.body.style.backgroundColor = i;
}

function slide()
{
    var integer = document.getElementById("r").value;

    document.getElementById("posts").getElementsByTagName("div");

}