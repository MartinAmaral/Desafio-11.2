const URL = "https://jsonplaceholder.typicode.com/users";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit").onclick = async () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fecha = document.getElementById("fecha").value;

    let data = { nombre, apellido, fecha };
    console.log(data);

    const respuesta = await hacerPost(URL, data);
    console.log(respuesta);
  };
});

async function hacerPost(url, data) {
  let respose = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await respose.json();
  return responseData;
}
