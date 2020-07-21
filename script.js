const animatedForm = (() => {
  const arrows = document.querySelectorAll(".fa-arrow-down");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      if (input.type === "text" && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === "email" && validateEmail(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === "password" && validatePassword(input)) {
        nextSlide(parent, nextForm);
      } else {
        parent.style.animation = "shake 0.5s ease";
      }

      parent.addEventListener("animationend", () => {
        parent.style.animation = "";
      });
    });
  });

  const validateUser = (user) => {
    if (user.value !== "") {
      result("#42A5F5");
      return true;
    } else {
      result("#EF5350");
    }
  };

  const result = (color) => {
    document.body.style.backgroundColor = color;
  };

  const nextSlide = (parent, nextForm) => {
    parent.classList.add("inactive");
    parent.classList.remove("active");
    nextForm.classList.add("active");
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email.value)) {
      result("#42A5F5");
      return true;
    } else {
      result("#EF5350");
    }
  };

  const validatePassword = (password) => {
    if (password.value !== "") {
      result("#4caf50");
      return true;
    } else {
      result("#EF5350");
    }
  };
})();