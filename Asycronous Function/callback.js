const token = ~~[Math.random() * 12345678];
const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username, callback) {
  console.log("prossesing validasi data!");
  setTimeout(() => {
    callback({ token, username });
  }, 200);
}

function getUser(token, callback) {
  console.log("Prossesing apikey now...");
  if (token)
    setTimeout(() => {
      callback({ apiKey: "xkey123" });
    }, 500);
}
function getPictures(apiKey, callback) {
  console.log("Prossesing Getting Picture now...");
  if (apiKey)
    setTimeout(() => {
      callback(pictures);
    }, 500);
}

login("mahsun", function (response) {
  const { token } = response;
  getUser(token, function (responeApiKey) {
    const { apiKey } = responeApiKey;
    getPictures(apiKey, function (responsePicture) {
      const pict = responsePicture;
      console.log(pict);
    });
  });
});
