const token = ~~[Math.random() * 12345678];
const pictures = ["1.jpg", "2.jpg", "3.jpg"];
const body = document.body;

function login(username) {
  const proses1 = document.createElement("h3");
  proses1.textContent = "prossesing validasi data!";
  body.append(proses1);
  console.log("prossesing validasi data!");
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (username != "mahsun") failed("Sorry Wrong Data");

      success({ token, username });
    }, 200);
  });
}

function getUser(token) {
  const proses2 = document.createElement("h3");
  proses2.textContent = "Prossesing apikey now...";
  body.append(proses2);
  console.log("Prossesing apikey now...");
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (!token) failed("Token Not Found");

      success({ apiKey: "xkey123" });
    }, 500);
  });
}
function getPictures(apiKey) {
  const proses3 = document.createElement("h3");
  proses3.textContent = "Prossesing Getting Picture now...";
  body.append(proses3);
  console.log("Prossesing Getting Picture now...");
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (apiKey) success(pictures);
      else failed("apiKey not Found");
    }, 1000);
  });
}

async function userDisplay() {
  const user = await login("mahsun");
  const { apiKey } = await getUser(user.token);
  const pict = await getPictures(apiKey);

  const cetakHasil = document.createElement("p");
  cetakHasil.innerHTML = `<br>   Nama Anda adalah : ${user.username}<br> 
    Token Anda adalah : ${user.token}<br> 
    ApiKey Anda adalah : ${apiKey}<br> 
    Request Gambar Anda Berikut : ${pict}`;
  body.append(cetakHasil);

  console.log(
    `   Nama Anda adalah : ${user.username}
    Token Anda adalah : ${user.token}
    ApiKey Anda adalah : ${apiKey}
    Request Gambar Anda Berikut : ${pict}`
  );
}

userDisplay();
