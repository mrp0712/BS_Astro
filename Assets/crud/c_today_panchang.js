document.getElementById("myForm").addEventListener("submit", async (event) => {
event.preventDefault(); // Prevent form submission

const api = "basic_panchang";
const userId = "624429";
const apiKey = "1a5f960dbadf808e77c76c87974a4db8";

  const now = new Date()
  const data = {
    day: now.getDate(),
    month: now.getMonth() + 1,
    year: now.getFullYear(),
    hour: now.getHours(),
    min: now.getMinutes(),
    lat: document.getElementById("lat").value,
    lon: document.getElementById("lon").value,
    tzone: now.getTimezoneOffset() / 60
  };

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
      // console.log(responseData);
      fetch("http://localhost:8080/r_today_panchang", {
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
          // console.log(responseData);

          let tabledata = "";
            tabledata = `<div class="review" style="background: radial-gradient(#fff,#A9A9A9);">
                  <div class="small-container">
                    <h2 class="title"style="margin:0 15px;">Today Panchang Details</h2>
                    <div class="row">
                      <table>
                        <tr>
                          <th>Day</th>
                          <td>${responseData.day}</td>
                        </tr>
                        <tr>
                          <th>Month</th>
                          <td>${responseData.month}</td>
                        </tr>
                        <tr>
                          <th>Year</th>
                          <td>${responseData.year}</td>
                        </tr>
                        <tr>
                          <th>Hour</th>
                          <td>${responseData.hour}</td>
                        </tr>
                        <tr>
                          <th>Min</th>
                          <td>${responseData.min}</td>
                        </tr>
                        <tr>
                          <th>Lat</th>
                          <td>${responseData.lat}</td>
                        </tr>
                        <tr>
                          <th>Lon</th>
                          <td>${responseData.lon}</td>
                        </tr>
                        <tr>
                          <th>Timezone</th>
                          <td>${responseData.tzone}</td>
                        </tr>
                        <tr>
                          <th>Tithi</th>
                          <td>${responseData.tithi}</td>
                        </tr>
                        <tr>
                          <th>Nakshatra</th>
                          <td>${responseData.nakshatra}</td>
                        </tr>
                        <tr>
                          <th>Yog</th>
                          <td>${responseData.yog}</td>
                        </tr>
                        <tr>
                          <th>Karan</th>
                          <td>${responseData.karan}</td>
                        </tr>
                        <tr>
                          <th>Sunrise</th>
                          <td>${responseData.sunrise}</td>
                        </tr>
                        <tr>
                          <th>Sunset</th>
                          <td>${responseData.sunset}</td>
                        </tr>
                        <tr>
                          <th>Vedic Sunrise</th>
                          <td>${responseData.vedic_sunrise}</td>
                        </tr>
                        <tr>
                          <th>Vedic Sunset</th>
                          <td>${responseData.vedic_sunset}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>`
          // console.log(tabledata)
          document.getElementById("table_body").innerHTML = tabledata;
        })
        .catch(function (error) {
          console.log(error);
        })
    })
    .catch(function (error) {
      console.log(error);
    })
})
