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

        // Print data
        //   let tabledata = "";

        //   tabledata = `<div class="review" style="background: radial-gradient(#fff,#A9A9A9);">
        //       <div class="small-container">
        //         <h2 class="title"style="margin:0 15px;">Kundli Matching Details </h2>
        //         <div class="row">
        //           <table>
        //             <tr>
        //               <th>Day</th>
        //               <td>${responseData.day}</td>
        //             </tr>
        //             <tr>
        //               <th>Month</th>
        //               <td>${responseData.month}</td>
        //             </tr>
        //             <tr>
        //               <th>Year</th>
        //               <td>${responseData.year}</td>
        //             </tr>
        //             <tr>
        //               <th>Hour</th>
        //               <td>${responseData.hour}</td>
        //             </tr>
        //             <tr>
        //               <th>Min</th>
        //               <td>${responseData.min}</td>
        //             </tr>
        //             <tr>
        //               <th>Latitude</th>
        //               <td>${responseData.lat}</td>
        //             </tr>
        //             <tr>
        //               <th>Longitude</th>
        //               <td>${responseData.lon}</td>
        //             </tr>
        //             <tr>
        //               <th>Timezone</th>
        //               <td>${responseData.tzone}</td>
        //             </tr>
        //             <tr>
        //               <th>ascendant</th>
        //               <td>${responseData.ascendant}</td>
        //             </tr>
        //             <tr>
        //               <th>ascendant_lord</th>
        //               <td>${responseData.ascendant_lord}</td>
        //             </tr>
        //             <tr>
        //               <th>Varna</th>
        //               <td>${responseData.Varna}</td>
        //             </tr>
        //             <tr>
        //               <th>Vashya</th>
        //               <td>${responseData.Vashya}</td>
        //             </tr>
        //             <tr>
        //               <th>Yoni</th>
        //               <td>${responseData.Yoni}</td>
        //             </tr>
        //             <tr>
        //               <th>Gan</th>
        //               <td>${responseData.Gan}</td>
        //             </tr>
        //             <tr>
        //               <th>Nadi</th>
        //               <td>${responseData.Nadi}</td>
        //             </tr>
        //             <tr>
        //               <th>SignLord</th>
        //               <td>${responseData.SignLord}</td>
        //             </tr>
        //             <tr>
        //               <th>sign</th>
        //               <td>${responseData.sign}</td>
        //             </tr>
        //             <tr>
        //               <th>Naksahtra</th>
        //               <td>${responseData.Naksahtra}</td>
        //             </tr>
        //             <tr>
        //               <th>NaksahtraLord</th>
        //               <td>${responseData.NaksahtraLord}</td>
        //             </tr>
        //             <tr>
        //               <th>Charan</th>
        //               <td>${responseData.Charan}</td>
        //             </tr>
        //             <tr>
        //               <th>Yog</th>
        //               <td>${responseData.Yog}</td>
        //             </tr>
        //             <tr>
        //               <th>Karan</th>
        //               <td>${responseData.Karan}</td>
        //             </tr>
        //             <tr>
        //               <th>Tithi</th>
        //               <td>${responseData.Tithi}</td>
        //             </tr>
        //             <tr>
        //               <th>yunja</th>
        //               <td>${responseData.yunja}</td>
        //             </tr>
        //           </table>
        //         </div>
        //       </div>
        //     </div>`
        //   // console.log(tabledata)
        //   document.getElementById("table_body").innerHTML = tabledata;
        // })
        // .catch(function (error) {
        //   console.log(error);


        });
    })
    .catch(function (error) {
      console.log(error);
    });
});