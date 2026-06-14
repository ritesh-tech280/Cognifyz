const app = document.getElementById("app");
function renderSignup() {
    app.innerHTML = ` <main class="bg-gray-100 min-h-screen flex items-center justify-center overflow-x-hidden">
    <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">

        <h1 class="text-3xl font-bold text-center text-blue-600 mb-6">
            Sign Up
        </h1>

        <form id="signupForm" class="flex flex-col gap-4">

            <!-- Full Name -->
            <div>
                <input type="text" id="name" placeholder="Full Name"
                    class="w-full p-3 border border-blue-400 rounded-xl outline-none focus:ring-4 ring-blue-200 transition duration-300" />
                <small id="nameError" class="text-red-500"></small>
            </div>

            <!-- Email -->
            <div>
                <input type="email" id="email" placeholder="Email Address"
                    class="w-full p-3 border border-blue-400 rounded-xl outline-none focus:ring-4 ring-blue-200 transition duration-300" />
                <small id="emailError" class="text-red-500"></small>
            </div>
            <!--- phone number-->
            <div>
                <input type="tel" id="phone" placeholder="Phone"
                    class="w-full p-3 border border-blue-400 rounded-xl outline-none focus:ring-4 ring-blue-200 transition duration-300" />
                <small id="phoneError" class="text-red-500"></small>
            </div>

            <!-- Password -->
            <div class="relative">
                <input type="password" id="password" placeholder="Password"
                    class="w-full p-3 border border-blue-400 rounded-xl outline-none focus:ring-4 ring-blue-200 transition duration-300" />

                <!-- Password Strength -->
                <div class="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div id="strengthBar" class="h-full w-0 bg-red-500 transition-all duration-300"></div>
                </div>

                <small id="passwordError" class="text-red-500"></small>
                <button type="button" id="togglePassword" class="absolute text-[12px]  right-3 top-4  text-gray-500">
                    show
                </button>
            </div>

            <!-- Confirm Password -->
            <div class="relative">
                <input type="password" id="confirmPassword" placeholder="Confirm Password"
                    class="w-full p-3 border border-blue-400 rounded-xl outline-none focus:ring-4 ring-blue-200 transition duration-300" />
                <small id="confirmError" class="text-red-500"></small>

                <button type="button" id="togglePassword2" class="absolute text-[12px] right-3 top-4  text-gray-500">
                    show
                </button>
            </div>

            <!-- Terms -->
            <label class="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" id="terms" />
                I agree to the Terms & Conditions
            </label>

            <!-- Button -->
            <button type="submit"
                class="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-xl transition duration-300">
                Register
            </button>

            <!-- Message -->
            <p id="message" class="text-center font-medium"></p>

        </form>
    </div>
</main>`
    setupForm();
}

function renderHome() {
    app.innerHTML = `<section class="min-h-[90vh] flex items-center justify-center px-6">
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <!-- Left Content -->
            <div class="space-y-6">
                <h1 class="text-5xl font-bold leading-tight text-gray-800">
                    Build Your Future With Modern Web Design
                </h1>
                <p class="text-gray-600 text-lg">
                    Create beautiful, responsive and fast websites using
                    HTML, Tailwind CSS and JavaScript.
                </p>

                <div class="flex gap-4">

                    <button class="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300">
                        Get Started
                    </button>

                    <button class="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition duration-300">
                        Learn More
                    </button>

                </div>

            </div>

            <!-- Right Image -->
            <div class="flex justify-center">

                <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                    alt="Website Image"
                    class="w-full max-w-lg rounded-2xl shadow-xl object-cover"
                />

            </div>

        </div>

    </section>

    <!-- Features Section -->
    <section class="py-20 px-6 bg-white">
        <div class="max-w-6xl mx-auto text-center">

            <h2 class="text-4xl font-bold text-gray-800 mb-12">
                Our Features
            </h2>

            <div class="grid md:grid-cols-3 gap-8">

                <!-- Card 1 -->
                <div class="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-xl transition duration-300">

                    <div class="text-5xl mb-4">⚡</div>

                    <h3 class="text-2xl font-semibold mb-3">
                        Fast Performance
                    </h3>

                    <p class="text-gray-600">
                        Optimized and responsive websites for better user experience.
                    </p>

                </div>

                <!-- Card 2 -->
                <div class="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-xl transition duration-300">

                    <div class="text-5xl mb-4">🎨</div>

                    <h3 class="text-2xl font-semibold mb-3">
                        Modern UI
                    </h3>

                    <p class="text-gray-600">
                        Clean and attractive user interface with smooth animations.
                    </p>

                </div>
                <!-- Card 3 -->
                <div class="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-xl transition duration-300">
                    <div class="text-5xl mb-4">📱</div>
                   <h3 class="text-2xl font-semibold mb-3">
                        Fully Responsive
                    </h3>
                    <p class="text-gray-600">
                        Works perfectly on mobile, tablet and desktop devices.
                    </p>
                </div>
            </div>
        </div>
    </section>`
}


function renderAbout() {
    app.innerHTML = `   <div class="min-h-screen bg-gray-100 py-16 px-6">

    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <!-- Left Side -->
        <div>

            <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="About Image"
                class="w-full rounded-2xl shadow-xl object-cover"
            />

        </div>

        <!-- Right Side -->
        <div class="space-y-6">

            <h1 class="text-5xl font-bold text-gray-800">
                About Us
            </h1>

            <p class="text-gray-600 text-lg leading-relaxed">
                We are passionate web developers focused on building
                modern, responsive and user-friendly websites using
                HTML, CSS, JavaScript and Tailwind CSS.
            </p>

            <p class="text-gray-600 text-lg leading-relaxed">
                Our goal is to create beautiful digital experiences
                that work perfectly on every device.
            </p>

            <button class="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300">
                Learn More
            </button>

        </div>

    </div>

    <!-- Features -->
    <div class="max-w-6xl mx-auto mt-20">

        <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Us
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

            <!-- Card -->
            <div class="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition duration-300">

                <div class="text-5xl mb-4">
                    ⚡
                </div>

                <h3 class="text-2xl font-semibold mb-3">
                    Fast Performance
                </h3>

                <p class="text-gray-600">
                    Optimized websites with smooth and fast user experience.
                </p>

            </div>

            <!-- Card -->
            <div class="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition duration-300">

                <div class="text-5xl mb-4">
                    🎨
                </div>

                <h3 class="text-2xl font-semibold mb-3">
                    Modern Design
                </h3>

                <p class="text-gray-600">
                    Beautiful and clean UI design with responsive layouts.
                </p>

            </div>

            <!-- Card -->
            <div class="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition duration-300">

                <div class="text-5xl mb-4">
                    📱
                </div>

                <h3 class="text-2xl font-semibold mb-3">
                    Responsive
                </h3>

                <p class="text-gray-600">
                    Works perfectly on mobile, tablet and desktop devices.
                </p>

            </div>

        </div>

    </div>

</div>
`;
}
function renderContact() {
    app.innerHTML = `<section class="min-h-[90vh] flex items-center justify-center px-6 py-16">

        <div class="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

            <!-- Left Side -->
            <div class="space-y-6">

                <h1 class="text-5xl font-bold text-gray-800">
                    Contact Us
                </h1>

                <p class="text-gray-600 text-lg">
                    Have questions or want to work with us? 
                    Fill out the form and we’ll get back to you soon.
                </p>

                <!-- Contact Info -->
                <div class="space-y-4">

                    <div class="flex items-center gap-4">
                        <span class="text-3xl">📍</span>
                        <p class="text-gray-700">
                            Bareilly, Uttar Pradesh, India
                        </p>
                    </div>

                    <div class="flex items-center gap-4">
                        <span class="text-3xl">📞</span>
                        <p class="text-gray-700">
                            +91 9876543210
                        </p>
                    </div>

                    <div class="flex items-center gap-4">
                        <span class="text-3xl">✉️</span>
                        <p class="text-gray-700">
                            support@mywebsite.com
                        </p>
                    </div>

                </div>

            </div>

            <!-- Contact Form -->
            <div class="bg-white p-8 rounded-2xl shadow-xl">

                <form id="contactForm" class="flex flex-col gap-5">

                    <input type="text" placeholder="Enter Your Name" id="cname"
                        class="w-full p-3 border border-blue-400 rounded-xl outline-none focus:ring-4 ring-blue-200 transition duration-300"
                    />

                    <!-- Email -->
                    <input   type="email" placeholder="Enter Your Email" id="cemail"
                        class="w-full p-3 border border-blue-400 rounded-xl outline-none focus:ring-4 ring-blue-200 transition duration-300"
                    />

                    <input type="text" placeholder="Enter Subject" id="csubject"
                        class="w-full p-3 border border-blue-400 rounded-xl outline-none focus:ring-4 ring-blue-200 transition duration-300"
                    />
      
                    <textarea  rows="5" placeholder="Enter Your Message"
                        class="w-full p-3 border border-blue-400 rounded-xl outline-none focus:ring-4 ring-blue-200 transition duration-300 resize-none"
                    ></textarea>
                    <button 
                        type="submit"
                        class="cursor-pointer bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300 font-semibold"
                    >
                        Send Message
                    </button>

                </form>

            </div>

        </div>

    </section>
`
    setupContactForm();
}
function renderSuccess() {
    app.innerHTML = `<div class="min-h-screen bg-gray-100 flex items-center justify-center px-6">

    <div class="bg-white p-10 rounded-2xl shadow-xl text-center max-w-lg w-full">

        <!-- Success Icon -->
        <div class="text-7xl mb-6">
            ✅
        </div>

        <!-- Heading -->
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
            Registration Successful
        </h1>

        <!-- Message -->
        <p class="text-gray-600 text-lg mb-8">
            Your account has been created successfully.
            Welcome to our website 🎉
        </p>

        <!-- Buttons -->
        <div class="flex justify-center gap-4">

            <a 
                href="#home"
                class="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300"
            >
                Go To Home
            </a>

            <a 
                href="#about"
                class="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition duration-300"
            >
                About Us
            </a>

        </div>

    </div>

</div>`
}
function router() {
    const hash = window.location.hash || "#home";

    switch (hash) {
        case "#home":
            renderHome()
            break;
        case "#signUp":
            renderSignup();
            break;

        case "#about":
            renderAbout();
            break;
        case "#contact":
            renderContact();
            break;
        case "#success":
            renderSuccess();
            break;

        default:
            app.innerHTML = `<h1>404 Page</h1>`;
    }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

function setupForm() {
    const form = document.getElementById("signupForm");

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone")
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const terms = document.getElementById("terms");


    const message = document.getElementById("message");

    const strengthBar = document.getElementById("strengthBar");

    const toggle = document.getElementById("togglePassword")
    const toggle2 = document.getElementById("togglePassword2")

    // Password Strength Checker
    passwordInput.addEventListener("input", () => {
        const password = passwordInput.value;
        let strength = 0;

        if (password.length >= 6) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[@$!%*?&]/.test(password)) strength++;

        if (strength === 1) {
            strengthBar.style.width = "25%";
            strengthBar.className = "h-full bg-red-500 transition-all duration-300";
        }
        else if (strength === 2) {
            strengthBar.style.width = "50%";
            strengthBar.className = "h-full bg-yellow-500 transition-all duration-300";
        }
        else if (strength === 3) {
            strengthBar.style.width = "75%";
            strengthBar.className = "h-full bg-blue-500 transition-all duration-300";
        }
        else if (strength === 4) {
            strengthBar.style.width = "100%";
            strengthBar.className = "h-full bg-green-500 transition-all duration-300";
        }
        else {
            strengthBar.style.width = "0%";
        }
    });


    toggle.addEventListener("click", () => {

        if (passwordInput.type === "password") {
            passwordInput.type = "text"
            toggle.innerText = "hide"
        }
        else {
            passwordInput.type = "password"
            toggle.innerText = "show"
        }
    })
    toggle2.addEventListener("click", () => {

        if (confirmPasswordInput.type === "password") {
            confirmPasswordInput.type = "text"
            toggle2.innerText = "hide"
        }
        else {
            confirmPasswordInput.type = "password"
            toggle2.innerText = "show"
        }
    })


    // Form Validation
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        document.getElementById("nameError").innerText = "";
        document.getElementById("emailError").innerText = "";
        document.getElementById("phoneError").innerText = ""
        document.getElementById("passwordError").innerText = "";
        document.getElementById("confirmError").innerText = "";

        let valid = true;

        // Name Validation
        if (nameInput.value.trim() === "") {
            document.getElementById("nameError").innerText = "Name is required";
            nameInput.classList.add("border-red-500");
            valid = false;
            
        }    else {
              nameInput.classList.remove("border-red-500");
        }

        // Email Validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!emailInput.value.match(emailPattern)) {
            document.getElementById("emailError").innerText = "Enter valid email";
            emailInput.classList.add("border-red-500")
            valid = false;
        } else {
            emailInput.classList.remove("border-red-500")
        }
        // Phone Validation
        const phonePattern = /^[6-9]\d{9}$/;

        if (!phoneInput.value.match(phonePattern)) {
            document.getElementById("phoneError").innerText = "Enter valid 10-digit phone number";
            phoneInput.classList.add("border-red-500")
            valid = false;
        } else {
             phoneInput.classList.remove("border-red-500")
        }

        // Password Validation
        if (passwordInput.value.length < 6) {
            document.getElementById("passwordError").innerText = "Password must be 6+ characters";
            passwordInput.classList.add("border-red-500")
            valid = false;
        } else {
             passwordInput.classList.remove("border-red-500")
        }

        // Confirm Password
        if (passwordInput.value !== confirmPasswordInput.value) {
            document.getElementById("confirmError").innerText = "Passwords do not match";
            confirmPasswordInput.classList.add("border-red-500")
            valid = false;
        } else {
             confirmPasswordInput.classList.add("border-red-500")
        }


        if (!terms.checked) {
            message.innerText = "Please accept Terms & Conditions";
            message.classList.add("text-red-500");
            valid = false;
        }


        if (valid) {
            message.classList.remove("text-red-500");
            message.classList.add("text-green-500");

            form.reset();
            strengthBar.style.width = "0%";
            window.location.hash = "#success"

        }
    });

}
function setupContactForm() {
    //contact form 
    const contForm = document.getElementById("contactForm")
    const cnameInput = document.getElementById("cname")
    const cemailInput = document.getElementById("cemail")
    const subjectInput = document.getElementById("csubject")

    contForm.addEventListener("submit", (e) => {
        e.preventDefault()

        let cvalid = true
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


        if (!cnameInput.value.trim()) {
            alert("Name is Required")
            cvalid = false
        }
         else if (!cemailInput.value.trim()) {
            alert("Email is required");
            cvalid = false;
        }
        else if (!cemailInput.value.match(emailPattern)) {
            alert("Enter valid email");
            cvalid = false;
        }

       else if (!subjectInput.value) {
            alert("subject is required")
            cvalid = false
        }
       
        if (cvalid) {
            alert("your message sent successfully we will contact you shortly")
            contForm.reset()
        }

    });
}