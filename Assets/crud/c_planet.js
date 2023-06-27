document.getElementById("myForm").addEventListener("submit", async (event) => {
event.preventDefault(); // Prevent form submission

  const api = "planets";
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
    tzone: now.getTimezoneOffset()/60
  }

  const auth = "Basic " + btoa(userId + ":" + apiKey);
  // console.log(data)

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
      // console.log(res)
      return res;
    })
    .then(function (responseData) {
      // console.log(responseData)
      fetch("http://localhost:8080/r_planet", {
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
        // console.log(res)
        return res;
      })
      .then(function (responseData) {
        // console.log(responseData);

        let tabledata = "";
        let daydata = "";

        responseData.planet.map((element) => {
          daydata += `<div class="review" style="background: radial-gradient(#fff,#A9A9A9);">
                        <div class="small-container">
                          <div class="row">
                            <div class="col-2" width="100%">
                              <div class="title" style="margin:0 15px;">
                                <h4><b> Planet Details </b> </h4>
                              </div>
                              <table>
                                  <tr>  
                                  <td>Name</td>
                                  <td>${element[0].name}</td>
                                </tr>
                                <tr>
                                  <td>fullDegree</td>
                                  <td>${element[0].fullDegree}</td>
                                </tr>
                                <tr>
                                  <td>normDegree</td>
                                  <td>${element.normDegree}</td>
                                </tr>
                                <tr>
                                  <td>speed</td>
                                  <td>${element.speed}</td>
                                </tr>
                                <tr>
                                  <td>isRetro</td>
                                  <td>${element.isRetro}</td>
                                </tr>
                                <tr>
                                  <td>sign</td>
                                  <td>${element.sign}</td>
                                </tr>
                                <tr>
                                  <td>signLord</td>
                                  <td>${element.signLord}</td>
                                </tr>
                                <tr>
                                  <td>nakshatra</td>
                                  <td>${element.nakshatra}</td>
                                </tr>
                                <tr>
                                  <td>nakshatraLord</td>
                                  <td>${element.nakshatraLord}</td>
                                </tr>
                                <tr>
                                  <td>nakshatra_pad</td>
                                  <td>${element.nakshatra_pad}</td>
                                </tr>
                                <tr>
                                  <td>house</td>
                                  <td>${element.house}</td>
                                </tr>
                                <tr>
                                  <td>is_planet_set</td>
                                  <td>${element.is_planet_set}</td>
                                </tr>
                                <tr>
                                  <td>planet_awastha</td>
                                  <td>${element.planet_awastha}</td>
                                </tr>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div> `
        });
        tabledata = `<div class="review" style="background: radial-gradient(#fff,#A9A9A9);">
                      <div class="small-container">
                        <h2 class="title"style="margin:0 15px;">Planet Transit</h2>
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
                          ${daydata}
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
  });
});