console.log("hai");

const endpoint = "https://reqres.in/api/users";

fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "mahsun@gmail.com",
    firstName: "Mahsun",
  }),
})
  .then((result) => result.json())
  .then((data) => console.log(data));

// async function hitAPI() {
//   const api = await fetch(endpoint);
//   const { data } = api.json();
//   console.log(data);
// }
