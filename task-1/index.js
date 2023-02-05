const form = document.getElementById("contactForm");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const countryCode = document.getElementById("countryCode");
      const emailError = document.getElementById("emailError");
      const phoneError = document.getElementById("phoneError");

      form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;
        const indexOfAt = email.value.indexOf("@");
        const regex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
        const indexOfDot = email.value.indexOf(".", indexOfAt);

        if (!email.value) {
          isValid = false;
          emailError.textContent = "Required field.";
        } else if (!email.value.includes("@")) {
          isValid = false;
          emailError.textContent = "Email must contain '@' symbol.";
        } else if (!email.value.substring(indexOfAt).includes(".")) {
          isValid = false;
          emailError.textContent =
            "Email must contain at least one dot (.) after '@' symbol.";
        } else if (!regex.test(email.value)) {
          isValid = false;
          emailError.textContent =
            "Email must contain only letters, numbers, dots, dashes, underscores, and plus signs.";
        } else if (indexOfDot - indexOfAt <= 2) {
          isValid = false;
          emailError.textContent =
            "Email must contain at least two characters after the dot (.) following the '@' symbol.";
        } else {
          emailError.textContent = "";
        }

        if (!phone.value) {
          isValid = false;
          phoneError.textContent = "Required field.";
        } else if (phone.value.length !== 10) {
          isValid = false;
          phoneError.textContent = "Phone number must be 10 digits.";
        } else {
          phoneError.textContent = "";
        }

        if (isValid) {
          let obj = {
            email: email.value,
            countryCode: countryCode.value,
            phone: phone.value,
          };
          console.log(obj);
          localStorage.setItem("data", JSON.stringify(obj));
          window.location.href = "thankyou.html";
        }
      });