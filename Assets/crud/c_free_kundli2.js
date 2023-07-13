var previousButton = null; // Function for Button Selected
function btnresult(divId, button) {
  var contents = document.getElementsByClassName('content');

  if (previousButton !== null) {
    previousButton.style.backgroundColor = "white"; // Reset the background color of the previous button
  }

  for (var i = 0; i < contents.length; i++) {
    if (contents[i].id === divId) {
      contents[i].classList.remove('hidden');
      button.style.backgroundColor = "#8584e5"; // Change the background color of the clicked button
      previousButton = button; // Set the current button as the previous button
    } else {
      contents[i].classList.add('hidden');
    }
  }
}

function convertSvgToJpg(svgData, backgroundColor) { // convert image
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const img = new Image();
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;

    // Set background color
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(img, 0, 0);

    // Convert canvas to data URL
    const dataUrl = canvas.toDataURL("image/jpeg");

    // Display the converted image
    const convertedImg = document.createElement("img");

    convertedImg.src = dataUrl;
    document.body.appendChild(convertedImg);
  };
  img.src = "data:image/svg+xml;base64," + btoa(svgData);
}

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
      // console.log(res)
      return res;
    })
    .then(function (responseData) {
      // console.log(responseData)
      // fetch("http://localhost:8080/r_free_kundli", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ ...data, ...responseData }),
      // })
      //   .then(function (response) {
      //     if (!response.ok) {
      //       throw new Error("API request failed. Status: " + response.status);
      //     }
      //     const res = response.json();
      //     // console.log(res)
      //     return res;
      //   })
      //   .then(function (responseData) {
      //     console.log(responseData)


          // Print all Data
          // const api2 = "horo_chart_image/:SUN";  // SUN Chart
          // fetch("https://json.astrologyapi.com/v1/" + api2, {
          //   method: "POST",
          //   headers: {
          //     Authorization: auth,
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify(data),
          // })
          //   .then(function (response) {
          //     if (!response.ok) {
          //       throw new Error("API request failed. Status: " + response.status);
          //     }
          //     const res = response.json();
          //     return res;
          //   })

            // .then(function (responseData) {
              // SUN
              // svg response from API
              //  convertSvgToJpg(responseData.svg, "white"); // background color
            // });


          // const api3 = "horo_chart_image/:chalit";  // Chalit Chart
          // fetch("https://json.astrologyapi.com/v1/" + api3, {
          //   method: "POST",
          //   headers: {
          //     Authorization: auth,
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify(data),
          // })
          //   .then(function (response) {
          //     if (!response.ok) {
          //       throw new Error("API request failed. Status: " + response.status);
          //     }
          //     const res = response.json();
          //     return res;
          //   })

            // .then(function (responseData) {
              // chalit:
              //  convertSvgToJpg(responseData.svg, "white")
            // });


          // const api4 = "horo_chart_image/:moon";  // Moon Chart
          // fetch("https://json.astrologyapi.com/v1/" + api4, {
          //   method: "POST",
          //   headers: {
          //     Authorization: auth,
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify(data),
          // })
          //   .then(function (response) {
          //     if (!response.ok) {
          //       throw new Error("API request failed. Status: " + response.status);
          //     }
          //     const res = response.json();
          //     return res;
          //   })

            // .then(function (responseData) {
              // moon:
              // convertSvgToJpg(responseData.svg, "white")
            // });

            
            
          let result = ""
          result = 
          ` <div class="review" style="background:radial-gradient(#cfcfcf,#A9A9A9);">
            <div class="small-container">
            
          <div class="row" style="flex-wrap:wrap;">
          <div class="btn-group">
            <button type="button" id="btnOne" onclick="btnresult('div1', this)">Basic</button>
            <button type="button" id="btnTwo" onclick="btnresult('div2', this)">Kundali</button>
            <button type="button" id="btnThree" onclick="btnresult('div3', this)">KP</button>
            <button type="button" id="btnFour" onclick="btnresult('div4', this)">Astakvarga</button>
            <button type="button" id="btnFive" onclick="btnresult('div5', this)">Charts</button>
            <button type="button" id="btnSix"  onclick="btnresult('div6', this)">Dasha</button>
          </div>
        </div>

        <div id="div1" class="content hidden">
            <div class="row">
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
                        <td>${responseData.month}</td>
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
                        <th>Tithi</th>
                        <td>${responseData.Tithi}</td>
                      </tr>
                      <tr>
                        <th>Naksahtra</th>
                        <td>${responseData.Naksahtra}</td>
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
                        <th>Yunja</th>
                        <td>${responseData.yunja}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>


              <div id="div2" class="content hidden">
                <div class="row">
              // kundli
                </div>
              </div>

              <div id="div3" class="content hidden">
                <div class="row">
                  // KP show
                </div>
              </div>

              <div id="div4" class="content hidden">
                <div class="row">
                  <div class="review" style="background:radial-gradient(#cfcfcf,#A9A9A9);">
                    <div class="small-container">
                      <div class="title"style="margin:0 15px; ">
                    <h4><b> Astakvarga </b> </h4>
                  </div>
                  <table>
                    <tr>
                      <th>Aries</th>
                      <th>Taurus</th>
                      <th>Gemini</th>
                      <th>Cancer</th>
                      <th>Leo</th>
                      <th>Virgo</th>
                      <th>Libra</th>
                      <th>Scorpio</th>
                      <th>Sagittarius</th>
                      <th>Capricorn</th>
                      <th>Aquarius</th>
                      <th>Pisces</th>
                    </tr>
                   
                  </table>
                </div>
              </div>
            </div>
          </div>          

              <div id="div5" class="content hidden">
                <div class="row">
                  // Charts show 
                </div>
              </div>

              <div id="div6" class="content hidden"">
                <div class="row">
                  // Dasha show 
                </div>
              </div>
            </div>
          </div> `

            document.getElementById("result").innerHTML = result;
          })
          .catch(function (error) {
            console.log(error);
          })  
      })
      .catch(function (error) {
        console.log(error);
      })
    // })