console.log(document.title);
document.title = "DOM JS | SunStudio";

const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn2");
const body = document.body;
const defaultText = (btn1.textContent = "klik saya 1");

btn1.style.border = "none";
btn1.style.padding = "8px";
btn1.style.fontSize = "24px";
btn1.style.background = "tomato";
btn1.style.cursor = "pointer";
btn1.style.margin = "1rem";

console.log(btn2);

function clickButton() {
  btn1.style.background = "skyblue";
  btn1.style.color = "white";
  const newText = document.createElement("p");
  newText.textContent = "Halo Apa Kabar";
  body.append(newText);
}

function ubahTeks() {
  btn1.textContent = "kok ganti";
}

function balikanTeks() {
  btn1.textContent = defaultText;
}

function tampilkanNama() {
  const newText2 = document.createElement("h3");
  newText2.innerText = "Halo nama Saya Mahsun";
  body.append(newText2);
}

function ubahWarnaText() {
  const h3 = document.querySelectorAll("h3");
  for (let i = 0; i < h3.length; i++) {
    h3[i].style.color = "purple";
  }
}
