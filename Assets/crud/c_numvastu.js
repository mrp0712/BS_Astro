document.getElementById("myForm").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  const api = "numero_place_vastu";
  const userId = "624429";
  const apiKey = "1a5f960dbadf808e77c76c87974a4db8";
  const data = {
    day: date,
    month: month,
    year: year,
    name: name,
  };

  //var auth = "Basic " + new Buffer(userId + ":" + apiKey).toString("base64");

  const auth = "Basic " + btoa(userId + ":" + apiKey);

  console.log(data);
  fetch("https://json.astrologyapi.com/v1/" + api, {
    method: "POST",
    headers: {
      Authorization: auth,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("API request failed. Status: " + response.status);
      }
      const res = response.json();
      return res;
    })
    .then(function (responseData) {
      console.log(responseData);
      fetch("http://localhost:8080/r_numvastu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, ...responseData }),
      })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("API request failed. Status: " + response.status);
        }
        const res = response.json();
        return res;
      })
      .then(function (responseData) {
        console.log(responseData);

        // Redirect to d_numvastu.html page
        
        const encodedData = encodeURIComponent(JSON.stringify(responseData));
        window.location.href = './place_vastu.html?data=' + encodedData;

      });
  })
  .catch(function (error) {
    console.log(error);
  });
});