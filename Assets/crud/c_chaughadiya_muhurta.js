document.getElementById("myForm").addEventListener("submit", async (event) => {
event.preventDefault(); // Prevent form submission

  const api = "chaughadiya_muhurta";
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

  //   console.log(data);
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
      fetch("http://localhost:8080/r_chaughadiya_muhurta", {
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
          console.log(res)                  // print
          return res;
        })
        .then(function (responseData) {

          console.log(responseData);
          // console.log(responseData.)
          
          let tabledata = "";
          let daydata = "";
          let nightdata = "";

          responseData.chaughadiya.day.map((element) => {
            daydata += `
                  <tr>
                      <td>${element.time}</td>
                      <td>${element.muhurta}</td>
                  <tr>
                  `
          });
          responseData.chaughadiya.night.map((element) => {
            nightdata += `
                  <tr>
                      <td>${element.time}</td>
                      <td>${element.muhurta}</td>
                  <tr>
                  `
          });
          
            tabledata = `<div class="review" style="background: radial-gradient(#fff,#A9A9A9);">
                  <div class="small-container">
                    <h2 class="title"style="margin:0 15px;">Chaughadiya Muhurta</h2>
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
                    <div class="title" style = "margin:0 10px;">
                        <h4><b> Day </b> </h4>
                    </div>
                    <table>
                        <tr>
                            <th>Time</th>
                            <th>Muhurta</th>
                        </tr>
                        ${daydata}
                    </table>
                </div>
                <div class="col-2">
                    <div class="title" style="margin:0 10px;">
                        <h4><b> Night </b> </h4>
                    </div>
                    <table>
                        <tr>
                            <th>Time</th>
                            <th>Muhurta</th>
                        </tr>
                        ${nightdata}
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

//           let nightdata=""  // day print
//           for (let i = 0; i < responseData.chaughadiya.night.length; i++) {
//             nightdata += `<tr>
//                       <td>${responseData.chaughadiya.night[i].time}</td> &nbsp; &nbsp; &nbsp; &nbsp;
//                       <td>${responseData.chaughadiya.night[i].muhurta}</td><br>
//             <tr>`
//             document.getElementById("nightdata").innerHTML = nightdata;
//           }