// Modify HTML elements
// document.getElementByID("...") - Older
// document.querySelector() (Newer, more Powerful)

document.querySelector("#myButton").onclick =function(){
    const h1 = document.querySelector("#myH1");
    const underline = document.createElement("u");
    underline.innerText = "Bye World"
    h1.innerText = "";
    h1.append(underline);

    const p = document.querySelectorAll(".myP"); //Used to select a group of elements.
    // p[1].innerText = "Whoaaaaa!";
    p.forEach(element => element.innerText = "Whoaaaa!");

    // const button = document.querySelector("button");
    // button.remove();

    const buttons = document.querySelectorAll("button");
    // buttons[0].remove();
    buttons.forEach(element => element.remove());
}