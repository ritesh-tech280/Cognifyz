// InventoryPro Landing Page Interactivity
document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initMobileMenu();
});


function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add("shadow-md", "bg-white/95", "border-slate-100");
      navbar.classList.remove("border-transparent", "bg-white/80");
    } else {
      navbar.classList.remove("shadow-md", "bg-white/95", "border-slate-100");
      navbar.classList.add("border-transparent", "bg-white/80");
    }
  };

  window.addEventListener("scroll", handleScroll);
  // Run once initially
  handleScroll();
}


function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");

  if (!btn || !menu) return;

  let isOpen = false;

  const toggleMenu = (forceState) => {
    isOpen = forceState !== undefined ? forceState : !isOpen;

    if (isOpen) {
      // Open state
      menu.classList.remove("hidden");
      // Small timeout to allow transition
      setTimeout(() => {
        menu.classList.remove("scale-y-95", "opacity-0");
        menu.classList.add("scale-y-100", "opacity-100");
      }, 10);
      hamburgerIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
    } else {
      // Close state
      menu.classList.remove("scale-y-100", "opacity-100");
      menu.classList.add("scale-y-95", "opacity-0");

      const onTransitionEnd = () => {
        if (!isOpen) {
          menu.classList.add("hidden");
        }
        menu.removeEventListener("transitionend", onTransitionEnd);
      };
      menu.addEventListener("transitionend", onTransitionEnd);

      hamburgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  };
  ///Login and Signup 
  const loginModal = document.getElementById("loginModal")
  const loginBtn = document.querySelectorAll(".loginbtn")

  loginModal.addEventListener("click", (e) => {

    if (e.target === loginModal) {
      loginModal.classList.add("hidden");
    }

  });
  loginBtn.forEach(login => {
    login.addEventListener("click", () => {
      loginModal.classList.remove("hidden")
      loginModal.classList.add("flex")
    })
  })

  // signUp 
  const signUpModal = document.getElementById("signupModal")
  const signupBtn = document.getElementById("signUpBtn")
  const loginButton = document.getElementById("openLogin")
  const register = document.querySelectorAll(".get-started")

  register.forEach(res => {
    res.addEventListener("click", openSignup)
  })

  loginButton.addEventListener("click", openLoginModal)
  signupBtn.addEventListener("click", openSignup)

  function openLoginModal() {
    loginModal.classList.remove("hidden")
    loginModal.classList.add("flex")
    signUpModal.classList.add("hidden")
    signUpModal.classList.remove("flex")
  }
  function openSignup() {
    loginModal.classList.add("hidden")
    loginModal.classList.remove("flex")
    signUpModal.classList.remove("hidden")
    signUpModal.classList.add("flex")
  }


  function closeSignup() {
    signUpModal.classList.add("hidden")
    signUpModal.classList.remove("flex")
  }

  const closebtn = document.getElementById("closeSignup")
  closebtn.addEventListener("click", closeSignup)


  initPasswordToggles();
  initAuthForms();


  btn.addEventListener("click", () => toggleMenu());

  // Close menu when links are clicked
  const links = menu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  // Close menu on screen resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && isOpen) {
      toggleMenu(false);
    }
  });
}

function initPasswordToggles() {
  const toggles = document.querySelectorAll("[data-toggle-password]");

  toggles.forEach(toggle => {
    const input = document.getElementById(toggle.dataset.togglePassword);
    if (!input) return;

    toggle.addEventListener("click", () => {
      const shouldShow = input.type === "password";
      input.type = shouldShow ? "text" : "password";
      toggle.setAttribute("aria-pressed", String(shouldShow));
      toggle.setAttribute("aria-label", shouldShow ? "Hide password" : "Show password");
      toggle.querySelector(".eye-open")?.classList.toggle("hidden", shouldShow);
      toggle.querySelector(".eye-closed")?.classList.toggle("hidden", !shouldShow);
      input.focus();
    });
  });
}

function initAuthForms() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const touchedFields = new WeakSet();

  const fields = {
    loginEmail: document.getElementById("emailError"),
    loginPassword: document.getElementById("passwordError"),
    signupName: document.getElementById("signupNameError"),
    signupEmail: document.getElementById("signupEmailError"),
    signupPassword: document.getElementById("signupPasswordError"),
    signupConfirmPassword: document.getElementById("signupConfirmPasswordError"),
    termsAccepted: document.getElementById("termsError")
  };

  const setFieldState = (input, errorElement, message = "") => {
    if (!input || !errorElement) return;

    errorElement.textContent = message;
    input.classList.toggle("field-error", Boolean(message));
    input.classList.toggle("field-valid", !message && Boolean(input.value?.trim()));
  };

  const setStatus = (elementId, message = "", type = "error") => {
    const status = document.getElementById(elementId);
    if (!status) return;

    status.textContent = message;
    status.classList.toggle("hidden", !message);
    status.classList.toggle("text-red-700", type === "error");
    status.classList.toggle("bg-red-50", type === "error");
    status.classList.toggle("border", Boolean(message));
    status.classList.toggle("border-red-100", type === "error");
    status.classList.toggle("text-emerald-700", type === "success");
    status.classList.toggle("bg-emerald-50", type === "success");
    status.classList.toggle("border-emerald-100", type === "success");
  };

  const setLoading = (form, isLoading, loadingText) => {
    const button = form?.querySelector("button[type='submit']");
    if (!button) return;

    if (!button.dataset.defaultText) {
      button.dataset.defaultText = button.textContent.trim();
    }

    button.disabled = isLoading;
    button.textContent = isLoading ? loadingText : button.dataset.defaultText;
    button.classList.toggle("opacity-70", isLoading);
    button.classList.toggle("cursor-not-allowed", isLoading);
  };

  const shouldShowFieldState = (input, showAll) => showAll || touchedFields.has(input);

  const validateLogin = (showAll = false) => {
    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");
    let isValid = true;

    const emailValue = email.value.trim();
    let emailMessage = "";
    let passwordMessage = "";

    if (!emailValue) {
      emailMessage = "Email is required";
    } else if (!emailPattern.test(emailValue)) {
      emailMessage = "Enter a valid email address";
    }

    if (!password.value.trim()) {
      passwordMessage = "Password is required";
    } else if (password.value.length < 6) {
      passwordMessage = "Password must be at least 6 characters";
    }

    setFieldState(email, fields.loginEmail, shouldShowFieldState(email, showAll) ? emailMessage : "");
    setFieldState(password, fields.loginPassword, shouldShowFieldState(password, showAll) ? passwordMessage : "");
    isValid = !emailMessage && !passwordMessage;

    return { isValid, email: emailValue, password: password.value };
  };

  const validateSignup = (showAll = false) => {
    const name = document.getElementById("signupName");
    const email = document.getElementById("signupEmail");
    const password = document.getElementById("signupPassword");
    const confirmPassword = document.getElementById("signupConfirmPassword");
    const termsAccepted = document.getElementById("termsAccepted");
    let isValid = true;

    const values = {
      name: name.value.trim(),
      email: email.value.trim(),
      password: password.value,
      confirmPassword: confirmPassword.value
    };

    const messages = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: ""
    };

    if (!values.name) {
      messages.name = "Full name is required";
    } else if (values.name.length < 2) {
      messages.name = "Name must be at least 2 characters";
    }

    if (!values.email) {
      messages.email = "Email is required";
    } else if (!emailPattern.test(values.email)) {
      messages.email = "Enter a valid email address";
    }

    if (!values.password) {
      messages.password = "Password is required";
    } else if (values.password.length < 6) {
      messages.password = "Password must be at least 6 characters";
    }

    if (!values.confirmPassword) {
      messages.confirmPassword = "Please confirm your password";
    } else if (values.confirmPassword !== values.password) {
      messages.confirmPassword = "Passwords do not match";
    }

    if (!termsAccepted.checked) {
      messages.terms = "Please accept the terms to continue";
    }

    setFieldState(name, fields.signupName, shouldShowFieldState(name, showAll) ? messages.name : "");
    setFieldState(email, fields.signupEmail, shouldShowFieldState(email, showAll) ? messages.email : "");
    setFieldState(password, fields.signupPassword, shouldShowFieldState(password, showAll) ? messages.password : "");
    setFieldState(confirmPassword, fields.signupConfirmPassword, shouldShowFieldState(confirmPassword, showAll) ? messages.confirmPassword : "");
    fields.termsAccepted.textContent = shouldShowFieldState(termsAccepted, showAll) ? messages.terms : "";

    isValid = Object.values(messages).every(message => !message);

    return {
      isValid,
      name: values.name,
      email: values.email,
      password: values.password
    };
  };

  const bindLiveValidation = (form, validate, statusId) => {
    form?.querySelectorAll("input").forEach(input => {
      input.addEventListener("input", () => {
        touchedFields.add(input);
        setStatus(statusId);
        validate();
      });
      input.addEventListener("blur", () => {
        touchedFields.add(input);
        validate();
      });
      input.addEventListener("change", () => {
        touchedFields.add(input);
        validate();
      });
    });
  };

  bindLiveValidation(loginForm, validateLogin, "loginStatus");
  bindLiveValidation(signupForm, validateSignup, "signupStatus");

  loginForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    setStatus("loginStatus");

    const result = validateLogin(true);
    if (!result.isValid) return;

    setLoading(loginForm, true, "Signing in...");

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: result.email,
          password: result.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.name);
        setStatus("loginStatus", "Login successful. Redirecting...", "success");
        window.location.href = "dashboard.html";
      } else {
        setStatus("loginStatus", data.message || "Unable to sign in. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setStatus("loginStatus", "Could not connect to the server. Please try again.");
    } finally {
      setLoading(loginForm, false);
    }
  });

  signupForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    setStatus("signupStatus");

    const result = validateSignup(true);
    if (!result.isValid) return;

    setLoading(signupForm, true, "Creating account...");

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: result.name,
          email: result.email,
          password: result.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("signupStatus", "Registration successful. You can sign in now.", "success");
        signupForm.reset();
        signupForm.querySelectorAll("input").forEach(input => {
          input.classList.remove("field-valid", "field-error");
        });
      } else {
        setStatus("signupStatus", data.message || "Unable to create account. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setStatus("signupStatus", "Could not connect to the server. Please try again.");
    } finally {
      setLoading(signupForm, false);
    }
  });
}

