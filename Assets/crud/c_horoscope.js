document.getElementById("myForm").addEventListener("submit", async (event) => {
event.preventDefault(); // Prevent form submission

  const api = "western_horoscope";
  const userId = "624428";
  const apiKey = "a949db00ab0cbf4b3ea1a60d9563a6a4";

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

  // console.log(data);
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
      console.log(res)
      return res;
    })
    .then(function (responseData) {
      console.log(responseData);
      fetch("http://localhost:8080/r_horoscope", {
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
          // console.log(res)                  // print
          return res;
        })
        .then(function (responseData) {
          console.log(responseData);
          
          let tabledata = "";
          // let data = "";

          // responseData..map((element) => {
          //   daydata += `
          //         <tr>
          //             <td>${element.time}</td>
          //             <td>${element.muhurta}</td>
          //         <tr>
          //         `
          // });
          // responseData.chaughadiya.night.map((element) => {
          //   nightdata += `
          //         <tr>
          //             <td>${element.time}</td>
          //             <td>${element.muhurta}</td>
          //         <tr>
          //         `
          // });
          
            tabledata = `<div class="review" style="background: radial-gradient(#fff,#A9A9A9);">
                  <div class="small-container">
                    <h2 class="title"style="margin:0 15px;">Horoscope Details</h2>
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
                      </table>
                    </div>
                  </div>
                </div>        
        <div class="review" style="background: radial-gradient(#fff,#A9A9A9);">
          <div class="small-container">
            <div class="row">
                <div class="col-2">
                    <div class="title"style="margin:0 15px;">
                        <h4><b> Planets </b> </h4>
                    </div>
                    <table>
                        <tr>
                          <th>Name</th>
                          <td>${responseData.planets[0].name}</td>
                        </tr>
                        <tr>
                          <th>Full Degree</th>
                          <td>${responseData.planets[0].full_degree}</td>
                        </tr>
                        <tr>
                          <th>Normal Degree</th>
                          <td>${responseData.planets[0].norm_degree}</td>
                        </tr>
                        <tr>
                          <th>Speed</th>
                          <td>${responseData.planets[0].speed}</td>
                        </tr>
                        <tr>
                          <th>Is Retro ?</th>
                          <td>${responseData.planets[0].is_retro}</td>
                        </tr>
                        <tr>
                          <th>Sign</th>
                          <td>${responseData.planets[0].sign}</td>
                        </tr>
                        <tr>
                          <th>House</th>
                          <td>${responseData.planets[0].house}</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="col-2">
                    <div class="title" style="margin:0 1px;">
                        <h4><b> Lilith </b> </h4>
                    </div>
                    <table>
                        <tr>
                          <th>Name</th>
                          <td>${responseData.lilith.name}</td>
                        </tr>
                        <tr>
                          <th>Full Degree</th>
                          <td>${responseData.lilith.full_degree}</td>
                        </tr>
                        <tr>
                          <th>Normal Degree</th>
                          <td>${responseData.lilith.norm_degree}</td>
                        </tr>
                        <tr>
                          <th>Speed</th>
                          <td>${responseData.lilith.speed}</td>
                        </tr>
                        <tr>
                          <th>Is Retro ?</th>
                          <td>${responseData.lilith.is_retro}</td>
                        </tr>
                        <tr>
                          <th>Sign ID</th>
                          <td>${responseData.lilith.sign_id}</td>
                        </tr>
                        <tr>
                          <th>Sign</th>
                          <td>${responseData.lilith.sign}</td>
                        </tr>
                        <tr>
                          <th>House</th>
                          <td>${responseData.lilith.house}</td>
                        </tr>                        
                    </table>
                </div>
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
  });