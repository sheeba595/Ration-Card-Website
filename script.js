document.addEventListener("DOMContentLoaded", () => {

  /* ================= CONTACT ACCORDION ================= */
  const questions = document.querySelectorAll(".faq-question");
  if (questions.length > 0) {
    questions.forEach(question => {
      question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector(".icon");

        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
          icon.style.transform = "rotate(0deg)";
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
          icon.style.transform = "rotate(180deg)";
        }
      });
    });
  }

  /* ================= INDEX LOGIN ================= */
  const login = document.querySelector(".login");
  if (login) {
    login.addEventListener("click", () => {
      window.location.href = "./citizen.html";
    });
  }

  /* ================= CITIZEN LOGIN ================= */
  const login_btn = document.querySelector(".login-btn");
  if (login_btn) {
    const name = document.getElementById("name");
    const password = document.getElementById("password");

    login_btn.addEventListener("click", () => {
      if (name.value.trim() === "" && password.value.trim() === "") {
        alert("Enter mobile number and password!");
      } else if (name.value.trim() === "") {
        alert("Enter mobile number or user ID!");
      } else if (password.value.trim() === "") {
        alert("Enter password or OTP!");
      } else {
        window.location.href = "./updated-profile.html";
      }
    });
  }

  /* ================= DISTRICT / TALUK / VILLAGE ================= */
  const districtSelect = document.getElementById("district");
  const talukSelect = document.getElementById("taluk");
  const villageSelect = document.getElementById("village");

  if (districtSelect && talukSelect && villageSelect) {

    const data = {
      chennai: {
        egmore: ["Egmore", "Purasaiwakkam", "Kilpauk"],
        guindy: ["Alandur", "Nanganallur", "Adambakkam"]
      },
      coimbatore: {
        north: ["Saibaba Colony", "Gandhipuram", "RS Puram"],
        south: ["Ukkadam", "Sundarapuram", "Podanur"]
      },
      madurai: {
        north: ["Anna Nagar", "Tallakulam", "Sellur"],
        south: ["Thirupparankundram", "Avaniyapuram"]
      },
      thoothukudi: {
        thoothukudi: ["Thoothukudi", "Mappillaiurani", "Therespuram"],
        ettayapuram: ["Ettayapuram", "Kovilpatti", "Pasuvanthanai"]
      },
      tirunelveli: {
        palayamkottai: ["Palayamkottai", "Melapalayam", "Vannarpettai"],
        ambasamudram: ["Ambasamudram", "Cheranmahadevi", "Kallidaikurichi"]
      }
    };

    Object.keys(data).forEach(district => {
      const opt = document.createElement("option");
      opt.value = district;
      opt.textContent = district.charAt(0).toUpperCase() + district.slice(1);
      districtSelect.appendChild(opt);
    });

    districtSelect.addEventListener("change", () => {
      talukSelect.innerHTML = `<option disabled selected>Select Taluk</option>`;
      villageSelect.innerHTML = `<option disabled selected>Select Village / City</option>`;

      Object.keys(data[districtSelect.value]).forEach(taluk => {
        const opt = document.createElement("option");
        opt.value = taluk;
        opt.textContent = taluk;
        talukSelect.appendChild(opt);
      });
    });

    talukSelect.addEventListener("change", () => {
      villageSelect.innerHTML = `<option disabled selected>Select Village / City</option>`;

      data[districtSelect.value][talukSelect.value].forEach(place => {
        const opt = document.createElement("option");
        opt.textContent = place;
        villageSelect.appendChild(opt);
      });
    });
  }




});


