document.getElementById("myForm").addEventListener("submit", async (event) => {
event.preventDefault(); // Prevent form submission

  const api = "match_astro_details";
  const userId = "624429";
  const apiKey = "1a5f960dbadf808e77c76c87974a4db8";
  
  const now = new Date()
  
  const data = {
    m_day: document.getElementById("mday").value,
    m_month: document.getElementById("mmonth").value,
    m_year: document.getElementById("myear").value,
    m_hour: document.getElementById("mhour").value,
    m_min: document.getElementById("mmin").value,
    m_lat: document.getElementById("mlat").value,
    m_lon: document.getElementById("mlon").value,
    m_tzone: now.getTimezoneOffset() / 60,

    f_day: document.getElementById("fday").value,
    f_month: document.getElementById("fmonth").value,
    f_year: document.getElementById("fyear").value,
    f_hour: document.getElementById("fhour").value,
    f_min: document.getElementById("fmin").value,
    f_lat: document.getElementById("flat").value,
    f_lon: document.getElementById("flon").value,
    f_tzone: now.getTimezoneOffset() / 60
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
      console.log(responseData);
      fetch("http://localhost:8080/r_kundli_matching", {
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
          
          let tabledata =
              // ` <div class="review" style="background: radial-gradient(#fff,#A9A9A9);">
              //     <div class="small-container">
              //       <h2 class="title"style="margin:0 15px;">Kundli Matching</h2>
              //       <div class="row">
              //         <table>
              //           <tr>
              //             <th>Day</th>
              //             <td>${responseData.day}</td>
              //           </tr>
              //           <tr>
              //             <th>Month</th>
              //             <td>${responseData.month}</td>
              //           </tr>
              //           <tr>
              //             <th>Year</th>
              //             <td>${responseData.year}</td>
              //           </tr>
              //           <tr>
              //             <th>Hour</th>
              //             <td>${responseData.hour}</td>
              //           </tr>
              //           <tr>
              //             <th>Min</th>
              //             <td>${responseData.min}</td>
              //           </tr>
              //           <tr>
              //             <th>Lat</th>
              //             <td>${responseData.lat}</td>
              //           </tr>
              //           <tr>
              //             <th>Lon</th>
              //             <td>${responseData.lon}</td>
              //           </tr>
              //           <tr>
              //             <th>Timezone</th>
              //             <td>${responseData.tzone}</td>
              //           </tr>
              //         </table>
              //       </div>
              //     </div>
              //   </div>        
      ` <div class="review" style="background: radial-gradient(#fff,#A9A9A9);">
          <div class="small-container">
            <div class="row" style="flex-wrap:none;">
                
                  <div class="col-2">
                    <div class="title" style = "margin:0 10px;">
                        <h4><b> Male </b> </h4>
                    </div>
                    <table>
                        <tr>
                          <th>Ascendant</th>
                          <td>${responseData.male_astro_details.ascendant}</td>
                        </tr>  
                        <tr>
                          <th>Varna</th>
                          <td>${responseData.male_astro_details.Varna}</td>
                        </tr>
                        <tr>
                          <th>Vashya</th>
                          <td>${responseData.male_astro_details.Vashya}</td>
                        </tr>
                        <tr>  
                          <th>Yoni</th>
                          <td>${responseData.male_astro_details.Yoni}</td>
                        </tr>
                        <tr>
                          <th>Gan</th>
                          <td>${responseData.male_astro_details.Gan}</td>
                        </tr>
                        <tr>                            
                          <th>Nadi</th>
                          <td>${responseData.male_astro_details.Nadi}</td>
                        </tr>
                        <tr>
                          <th>SignLord</th>
                          <td>${responseData.male_astro_details.SignLord}</td>
                        </tr>  
                        <tr>
                          <th>sign</th>
                          <td>${responseData.male_astro_details.sign}</td>
                        </tr>
                        <tr>
                          <th>Naksahtra</th>
                          <td>${responseData.male_astro_details.Naksahtra}</td>
                        </tr>
                        <tr>  
                          <th>NaksahtraLord</th>
                          <td>${responseData.male_astro_details.NaksahtraLord}</td>
                        </tr>
                        <tr>
                          <th>Charan</th>
                          <td>${responseData.male_astro_details.Charan}</td>
                        </tr>
                        <tr>                            
                          <th>Yog</th>
                          <td>${responseData.male_astro_details.Yog}</td>
                        </tr>
                        <tr>
                          <th>Karan</th>
                          <td>${responseData.male_astro_details.Karan}</td>
                        </tr>  
                        <tr>
                          <th>Tithi</th>
                          <td>${responseData.male_astro_details.Tithi}</td>
                        </tr>
                        <tr>
                          <th>yunja</th>
                          <td>${responseData.male_astro_details.yunja}</td>
                        </tr>
                        <tr>  
                          <th>tatva</th>
                          <td>${responseData.male_astro_details.tatva}</td>
                        </tr>
                        <tr>
                          <th>name_alphabet</th>
                          <td>${responseData.male_astro_details.name_alphabet}</td>
                        </tr>
                        <tr>                            
                          <th>paya</th>
                          <td>${responseData.male_astro_details.paya}</td>
                        </tr>                          
                    </table>
                </div>
                
                <div class="col-2">
                    <div class="title" style = "margin:0 10px;">
                        <h4><b> Female </b> </h4>
                    </div>
                    <table>
                        <tr>
                          <th>Ascendant</th>
                          <td>${responseData.female_astro_details.ascendant}</td>
                        </tr>  
                        <tr>
                          <th>Varna</th>
                          <td>${responseData.female_astro_details.Varna}</td>
                        </tr>
                        <tr>
                          <th>Vashya</th>
                          <td>${responseData.female_astro_details.Vashya}</td>
                        </tr>
                        <tr>  
                          <th>Yoni</th>
                          <td>${responseData.female_astro_details.Yoni}</td>
                        </tr>
                        <tr>
                          <th>Gan</th>
                          <td>${responseData.female_astro_details.Gan}</td>
                        </tr>
                        <tr>                            
                          <th>Nadi</th>
                          <td>${responseData.female_astro_details.Nadi}</td>
                        </tr>
                        <tr>
                          <th>SignLord</th>
                          <td>${responseData.female_astro_details.SignLord}</td>
                        </tr>  
                        <tr>
                          <th>sign</th>
                          <td>${responseData.female_astro_details.sign}</td>
                        </tr>
                        <tr>
                          <th>Naksahtra</th>
                          <td>${responseData.female_astro_details.Naksahtra}</td>
                        </tr>
                        <tr>  
                          <th>NaksahtraLord</th>
                          <td>${responseData.female_astro_details.NaksahtraLord}</td>
                        </tr>
                        <tr>
                          <th>Charan</th>
                          <td>${responseData.female_astro_details.Charan}</td>
                        </tr>
                        <tr>                            
                          <th>Yog</th>
                          <td>${responseData.female_astro_details.Yog}</td>
                        </tr>
                        <tr>
                          <th>Karan</th>
                          <td>${responseData.female_astro_details.Karan}</td>
                        </tr>  
                        <tr>
                          <th>Tithi</th>
                          <td>${responseData.female_astro_details.Tithi}</td>
                        </tr>
                        <tr>
                          <th>yunja</th>
                          <td>${responseData.female_astro_details.yunja}</td>
                        </tr>
                        <tr>  
                          <th>tatva</th>
                          <td>${responseData.female_astro_details.tatva}</td>
                        </tr>
                        <tr>
                          <th>name_alphabet</th>
                          <td>${responseData.female_astro_details.name_alphabet}</td>
                        </tr>
                        <tr>                            
                          <th>paya</th>
                          <td>${responseData.female_astro_details.paya}</td>
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