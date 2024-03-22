const token = ~~[Math.random() * 12345678];
const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username) {
  console.log("prossesing validasi data!");
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (username != "mahsun") failed("Sorry Wrong Data");

      success({ token, username });
    }, 200);
  });
}

function getUser(token) {
  console.log("Prossesing apikey now...");
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (!token) failed("Token Not Found");

      success({ apiKey: "xkey123" });
    }, 500);
  });
}
function getPictures(apiKey) {
  console.log("Prossesing Getting Picture now...");
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (apiKey) success(pictures);
      else failed("apiKey not Found");
    }, 1000);
  });
}

const user = login("mahsun");
user
  .then(function (respon) {
    const username = respon.username;
    const tokenn = respon.token;
    console.log(`Token anda adalah ${token} dan username anda ${username}`);
    const getApiKey = getUser(tokenn);
    getApiKey
      .then(function (respon) {
        const { apiKey } = respon;
        console.log(apiKey);

        const getPict = getPictures(apiKey);
        getPict
          .then(function (response) {
            const pict = response;
            console.log(pict);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  })
  .catch((error) => console.error(error));
