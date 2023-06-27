$(function () {
    $.validator.setDefaults({
     submitHandler: function () {
        alert( "Please Scroll to view result" );
     }
    });
    
    $('#myForm').validate({
      rules: {
        day: {
          required: true,
          min: 1,
          max:31
        },
        month: {
          required: true,
          min:1,
          max:12
        },
        year: {
          required: true,
          minlength: 4,
          min: 1900,
          max:2023
        },
        hour: {
          required: true,
          min: 1,
          max:23
        },
        min: {
          required: true,
          min: 0,
          max:59
        },
        location: {
            required: true,
            minlength:3
        },

      // Female form
      fday: {
        required: true,
        min: 1,
        max:31
      },
      fmonth: {
        required: true,
        min:1,
        max:12
      },
      fyear: {
        required: true,
        minlength: 4,
        min: 1900,
        max:2023
      },
      fhour: {
        required: true,
        min: 1,
        max:23
      },
      fmin: {
        required: true,
        min: 0,
        max:59
      },
      flocation: {
          required: true,
          minlength:3
        },
    },

    // messages
      messages: {
        day: {
          required: "Please enter date.",
        //   min: "Minimum date is 1.",
        //   max: "Maximum date is 31."
        },
        month: {
          required: "Please enter month.",
        //   min: "Minimum month is 1.",
        //   max: "Maximum month is 12."
        },
        year: {
          required: "Please enter year.",
        //   min: "Minimum length is 1900.",
        //   max: "Maximum length is 2023."
        },
        hour: {
          required: "Please enter hour.",
        //   min: "Minimum length is 1.",
        //   max: "Maximum length is 23."
        },
        min: {
          required: "Please enter minute.",
        //   min: "Minimum length is 0.",
        //   max: "Maximum length is 59."
        },
        location: {
            required: "Please enter city.",
            // minlength: "Minimum length is 3."
        },

        // female messages
        fday: {
            required: "Please enter date.",
          //   min: "Minimum date is 1.",
          //   max: "Maximum date is 31."
          },
          fmonth: {
            required: "Please enter month.",
          //   min: "Minimum month is 1.",
          //   max: "Maximum month is 12."
          },
          fyear: {
            required: "Please enter year.",
          //   min: "Minimum length is 1900.",
          //   max: "Maximum length is 2023."
          },
          fhour: {
            required: "Please enter hour.",
          //   min: "Minimum length is 1.",
          //   max: "Maximum length is 23."
          },
          fmin: {
            required: "Please enter minute.",
          //   min: "Minimum length is 0.",
          //   max: "Maximum length is 59."
          },
          flocation: {
              required: "Please enter city.",
              // minlength: "Minimum length is 3."
            },
      },
      errorElement: 'span',
      errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
      }
    }); 
  });



  



//   document.getElementById("myForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission
  
//     // Retrieve input values
//     const day = document.getElementById("mday").value;
//     const month = document.getElementById("mmonth").value;
//     const year = document.getElementById("myear").value;
//     const hour = document.getElementById("mhour").value;
//     const min = document.getElementById("mmin").value;
//     const latitude = document.getElementById("mlat").value;
//     const longitude = document.getElementById("mlon").value;
  
//     // Validate inputs
//     const validationError = validateDateTime(day, month, year, hour, min);
//     const latitudeError = validateLatitude(latitude);
//     const longitudeError = validateLongitude(longitude);
  
//     // Display error messages or submit the form
//     if (validationError || latitudeError || longitudeError) {
//       const errorMessages = document.getElementById("errorMessages");
//       errorMessages.innerHTML = ""; // Clear previous error messages
  
//       if (validationError) {
//         errorMessages.innerHTML += `<span>${validationError}</span><br>`;
//       }
  
//       if (latitudeError) {
//         errorMessages.innerHTML += `<span>${latitudeError}</span><br>`;
//       }
  
//       if (longitudeError) {
//         errorMessages.innerHTML += `<span>${longitudeError}</span><br>`;
//       }
//     } else {
//       // Submit the form or perform further actions
//       document.getElementById("myForm").submit();
//     }
//   });
  
//   function validateDateTime(day, month, year, hour, min) {
//     // Validate day (1-31)
//     if (!/^(0?[1-9]|[1-2]\d|3[0-1])$/.test(day)) {
//         return "Invalid day. Please enter a valid day (1-31).";
//       }
    
//       // Validate month (1-12)
//       if (!/^(0?[1-9]|1[0-2])$/.test(month)) {
//         return "Invalid month. Please enter a valid month (1-12).";
//       }
    
//       // Validate year (4 digits)
//       if (!/^\d{4}$/.test(year)) {
//         return "Invalid year. Please enter a valid 4-digit year.";
//       }
    
//       // Validate hour (0-23)
//       if (!/^(0?\d|1\d|2[0-3])$/.test(hour)) {
//         return "Invalid hour. Please enter a valid hour (0-23).";
//       }
    
//       // Validate minute (0-59)
//       if (!/^[0-5]\d$/.test(min)) {
//         return "Invalid minute. Please enter a valid minute (0-59).";
//       }
    
//       // All inputs are valid
//       return null;
//   }
  
//   function validateLatitude(latitude) {
//     // Validate latitude (-90 to 90)
//     if (!/^(-?\d+(\.\d+)?)$/.test(latitude) || latitude < -90 || latitude > 90) {
//       return "Invalid latitude. Please enter a valid latitude (-90 to 90).";
//     }
//     return null;
//   }
  
//   function validateLongitude(longitude) {
//     // Validate longitude (-180 to 180)
//     if (!/^(-?\d+(\.\d+)?)$/.test(longitude) || longitude < -180 || longitude > 180) {
//         return "Invalid longitude. Please enter a valid longitude (-180 to 180).";
//     }  
//     return null;
//   }