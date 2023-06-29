document.getElementById("myForm").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form submission
  
    const api = "astro_details";
    const userId = "624429";
    const apiKey = "1a5f960dbadf808e77c76c87974a4db8";
    
    const data = {
      day: document.getElementById("day").value,
      month: document.getElementById("month").value,
      year: document.getElementById("year").value,
      hour: document.getElementById("hour").value,
      min: document.getElementById("min").value,
      lat: document.getElementById("lat").value,
      lon: document.getElementById("lon").value,
      tzone: document.getElementById("tzone").value
    };
  
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
        return res;
      })
      .then(function (responseData) {
        console.log(responseData);
        fetch("http://localhost:8080/r_free_kundli", {
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
            // console.log(responseData)
  
            // Print data
            let basic_output = "";
            // let kundli_output = "";
  
          basic_output = `
          <div class="review" style="background: radial-gradient(#fff,#A9A9A9);">
          <div class="small-container">
            <div class="row" style="flex-wrap:wrap;">
                <div class="col-2" style="flex-wrap: wrap;">
                    <div class="title" style = "margin:0 10px;">
                        <h4><b> Basic Details </b> </h4>
                    </div>
                    <table>
                      <tr>
                        <th>Name</th>
                        <td>${document.getElementById("name").value}</td>
                      </tr>
                      <tr>
                        <th>Gender</th>
                        <td>${document.getElementById("gender").value}</td>
                      </tr>
                      <tr>
                        <th>Day</th>
                        <td>${responseData.day}</td>
                      </tr>
                      <tr>
                        <th>Month</th>
                        <td>${responseData.mon}</td>
                      </tr>
                      <tr>
                        <th>Year</th>
                        <td>${responseData.year}</td>
                      </tr>
                      <tr>
                        <th>Birth Place</th>
                        <td>${document.getElementById("location").value}</td>
                      </tr>
                      <tr>
                        <th>Hour</th>
                        <td>${responseData.hour}</td>
                      </tr>
                      <tr>
                        <th>Minute</th>
                        <td>${responseData.min}</td>
                      </tr>
                      <tr>
                        <th>Second</th>
                        <td>${document.getElementById("sec").value}</td>
                      </tr>
                      <tr>
                        <th>Latitude</th>
                        <td>${responseData.lat}</td>
                      </tr>
                      <tr>
                        <th>Longitude</th>
                        <td>${responseData.lon}</td>
                      </tr>
                      <tr>
                        <th>Time Zone</th>
                        <td>GMT ${responseData.tzone}</td>
                      </tr>
                      <tr>
                        <th>ayanamsha</th>
                        <td>${responseData.day}</td>
                      </tr>
                      <tr>
                        <th>sunrise</th>
                        <td>${responseData.day}</td>
                      </tr>
                    </table>
                    </div>
                    <div class="col-2">
                      <div class="title" style="margin:0 10px;">
                        <h4><b> Avakhada Details </b> </h4>
                      </div>
                      <table>
                      <tr>
                        <th>Ascendant</th>
                        <td>${responseData.ascendant}</td>
                      </tr>
                      <tr>
                        <th>Ascendant Lord</th>
                        <td>${responseData.ascendant_lord}</td>
                      </tr>
                      <tr>
                        <th>Varna</th>
                        <td>${responseData.Varna}</td>
                      </tr>
                      <tr>
                        <th>Vashya</th>
                        <td>${responseData.Vashya}</td>
                      </tr>
                      <tr>
                        <th>Yoni</th>
                        <td>${responseData.Yoni}</td>
                      </tr>
                      <tr>
                        <th>Gan</th>
                        <td>${responseData.Gan}</td>
                      </tr>
                      <tr>
                        <th>Nadi</th>
                        <td>${responseData.Nadi}</td>
                      </tr>
                      <tr>
                        <th>SignLord</th>
                        <td>${responseData.SignLord}</td>
                      </tr>
                      <tr>
                        <th>Sign</th>
                        <td>${responseData.sign}</td>
                      </tr>
                      <tr>
                        <th>Naksahtra</th>
                        <td>${responseData.Naksahtra}</td>
                      </tr>
                      <tr>
                        <th>NaksahtraLord</th>
                        <td>${responseData.NaksahtraLord}</td>
                      </tr>
                      <tr>
                        <th>Charan</th>
                        <td>${responseData.Charan}</td>
                      </tr>
                      <tr>
                        <th>Yog</th>
                        <td>${responseData.Yog}</td>
                      </tr>
                      <tr>
                        <th>Karan</th>
                        <td>${responseData.Karan}</td>
                      </tr>
                      <tr>
                        <th>Tithi</th>
                        <td>${responseData.Tithi}</td>
                      </tr>
                      <tr>
                        <th>Yunja</th>
                        <td>${responseData.yunja}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>`
            // console.log(basic_output)
            document.getElementById("basic_output").innerHTML = basic_output;
         
            })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  });