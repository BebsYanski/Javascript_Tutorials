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