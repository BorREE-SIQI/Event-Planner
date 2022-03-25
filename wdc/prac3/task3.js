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

    var color = "";

    var x = document.getElementById("t").value;
    const b = document.createElement("p");
    b.className = "post-content";
    //b.innerHTML = x;
    //document.getElementById("posts").appendChild(b);

if(blueCheck == true)
    {
        // const cont = document.getElementsByClassName("post-content");
        // cont[0].style.color = "blue";
        document.getElementsByClassName("post-content")[0].style.color = "blue;"
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
}

 if(redCheck == true)
{
    // const cont = document.getElementsByClassName("post-content");
    // cont[0].style.color = "red";

    document.getElementsByClassName("post-content")[0].style.color = "red;"

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
}
 if(redCheck == false && blueCheck == false)
{
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
}



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

    const container = document.getElementById("posts").getElementsByTagName("div")[0];

    // for(i = container.children.length-1; i > container.children.length-integer;i--)
    // {
    //     document.write(container);
    //     container.children[i].remove();
    // }
    document.write(container);
}