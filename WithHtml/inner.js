//  Create HTML elements
// h1.innerHTML (Vulnerable to XSS attacks)
// h1.innerText (better);

const h1 = document.createElement("h1");
h1.innerHTML = "<u>Hello World</u>";
document.body.append(h1);

const h2 = document.createElement("h1");
const underline = document.createElement("u");
underline.innerText = "Hello World";
h2.append(underline);
document.body.append(h2);

const h3 = document.createElement("h1");
const italic = document.createElement("i");
italic.innerText = "Sup?";
h3.append(italic);
document.body.append(h3);

const p = document.createElement("p");
const bold = document.createElement("i");
const under = document.createElement("u");
bold.innerText ="Here is a Paragraph of it's own";
under.append(bold);
p.append(under);
document.body.append(p);
