document.getElementById("myForm").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form submission
  
    const api = "horo_chart_image/:chalit";
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
    //   .then(function (responseData) {
    //     console.log(responseData);
    //     fetch("http://localhost:8080/r_free_kundli", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ ...data, ...responseData }),
    //     })
    //       .then(function (response) {
    //         if (!response.ok) {
    //           throw new Error("API request failed. Status: " + response.status);
    //         }
    //         const res = response.json();
    //         return res;
        //   })
          .then(function (responseData) {
            console.log(responseData.svg)
            
            // const imgvar= responseData.svg

            // const img=svgToPNG(imgvar,500,500)
            convertSvgToJpg(responseData.svg)

               // Print data
            let kundli_output = "";
  
            kundli_output = `
            <div class="review" style="background: radial-gradient(#fff,#A9A9A9);">
            <div class="small-container">
              <div class="row" style="flex-wrap:wrap;">
                  <div class="col-2" style="flex-wrap: wrap;">
                      <div class="title" style = "margin:0 10px;">
                          <h4><b> Lagna / Ascendant / Basic Birth Chart </b> </h4>
                          </div>
                       
                          ${hi}
                          
                      <div class="col-2">
                        <div class="title" style="margin:0 10px;">
                          <h4><b> Navamsa </b> </h4>
                        </div>
                        
                    </div>
                  </div>
                </div>
              </div>`
              document.getElementById("kundli_output").innerHTML = kundli_output;
           
            })
          
      
      .catch(function (error) {
        console.log(error);
      });
  });