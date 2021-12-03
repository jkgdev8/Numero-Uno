window.alert("TEST");

function fetchdata() {
  fetch("https://api-football-standings.azharimm.site/leagues/eng.1")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      const html = (data.data)

        .join("");
      console.log(html);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchdata();
