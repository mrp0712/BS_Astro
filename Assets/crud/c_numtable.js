document.getElementById("myForm").addEventListener("submit", async (event) => {
 event.preventDefault(); // Prevent form submission

  const api = "numero_table";
  const userId = "624429";
  const apiKey = "1a5f960dbadf808e77c76c87974a4db8";

  const data = {
    day: document.getElementById("day").value,
    name: document.getElementById("name").value,
    month: document.getElementById("month").value,
    year: document.getElementById("year").value
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
      // console.log(responseData)

      fetch("http://localhost:8080/r_numtable", {
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

          
          // Show result in HTML 
          let tabledata = "";
          tabledata = `<div class="review" style="background: radial-gradient(#fff,#A9A9A9);">
              <div class="small-container">
                <h2 class="title"style="margin:0 15px;">Numero Table</h2>
                <div class="row">
                  <table>
                    <tr>
                      <th>Name</th>
                      <td>${responseData.name}</td>
                    </tr>
                    <tr>
                      <th>Date</th>
                      <td>${responseData.date}</td>
                    </tr>
                    <tr>
                      <th>Destiny Number</th>
                      <td>${responseData.destiny_number}</td>
                    </tr>
                    <tr>
                      <th>Radical Number</th>
                      <td>${responseData.radical_number}</td>
                    </tr>
                    <tr>
                      <th>Name Number</th>
                      <td>${responseData.name_number}</td>
                    </tr>
                    <tr>
                      <th>Evil Number</th>
                      <td>${responseData.evil_num}</td>
                    </tr>
                    <tr>
                      <th>Favourite Color</th>
                      <td>${responseData.fav_color}</td>
                    </tr>
                    <tr>
                      <th>Favourite Day</th>
                      <td>${responseData.fav_day}</td>
                    </tr>
                    <tr>
                      <th>Favourite God</th>
                      <td>${responseData.fav_god}</td>
                    </tr>
                    <tr>
                      <th>Favourite Mantra</th>
                      <td>${responseData.fav_mantra}</td>
                    </tr>
                    <tr>
                      <th>Favourite Metal</th>
                      <td>${responseData.fav_metal}</td>
                    </tr>
                    <tr>
                      <th>Favourite Stone</th>
                      <td>${responseData.fav_stone}</td>
                    </tr>
                    <tr>
                      <th>Favourite Substone</th>
                      <td>${responseData.fav_substone}</td>
                    </tr>
                    <tr>
                      <th>Friendly Number</th>
                      <td>${responseData.friendly_num}</td>
                    </tr>
                    <tr>
                      <th>Neutral Number</th>
                      <td>${responseData.neutral_num}</td>
                    </tr>
                    <tr>
                      <th>Radical Number</th>
                      <td>${responseData.radical_num}</td>
                    </tr>
                    <tr>
                      <th>Radical Ruler</th>
                      <td>${responseData.radical_ruler}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>`

          // console.log(tabledata)
          document.getElementById("table_body").innerHTML = tabledata;
        })
      });
    })
    .catch(function (error) {
      console.log(error);
});