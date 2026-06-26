const courses = ["BCA", "MCA","BBA","MBA","B.Tech", "M.Tech", "B.Sc Computer Science", "M.Sc Computer Science",
    "B.Sc IT","B.Com", "M.Com","BA","MA","B.Ed","M.Ed","B.Pharmacy","M.Pharmacy","B.Des","LLB","B.Arch"
];

const courseSelect = document.getElementById("course");

courses.forEach(course => {

    const option = document.createElement("option");

    option.value = course;
    option.textContent = course;

    courseSelect.appendChild(option);

});


const registerbtn = document.getElementById("register")
const registerModal = document.getElementById("registerModal")
const openBtns = document.querySelectorAll(".register-btn")

const closeModal = document.getElementById("closeModal")
const cancelBtn = document.getElementById("cancelBtn")

let students = [];
let editStudentId = null;
loadStudents()
openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        registerModal.classList.remove("hidden")
        registerModal.classList.add("flex")
    })
})

function hideModal() {
    registerModal.classList.add("hidden")
    registerModal.classList.remove("flex")
}

cancelBtn.addEventListener("click", hideModal)
closeModal.addEventListener("click", hideModal)

const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const phoneInput = document.getElementById("phone")
const courseInput = document.getElementById("course")
const statusInput = document.getElementById("status")

function studentValidation() {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[6-9]\d{9}$/;
    let valid = true;

    [nameInput, emailInput, phoneInput, courseInput, statusInput].forEach(input => {
        input.classList.remove("border-red-500")
        input.classList.add("border-slate-300")
    })

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("courseError").innerText = "";
    document.getElementById("statusError").innerText = "";

    //Name Validation 
    if (nameInput.value.trim() === "") {
        nameInput.classList.remove("border-slate-300")
        nameInput.classList.add("border-red-500")
        document.getElementById("nameError").innerText = "Name is Required";
        valid = false
    } else {
        nameInput.classList.add("border-slate-300")
        nameInput.classList.remove("border-red-500")
    }
    //email vaildation 
    if (!emailPattern.test(emailInput.value.trim())) {
        emailInput.classList.remove("border-slate-300")
        emailInput.classList.add("border-red-500")
        document.getElementById("emailError").innerText = "email is Required";
        valid = false
    } else {
        emailInput.classList.add("border-slate-300")
        emailInput.classList.remove("border-red-500")
    }
    if (!phonePattern.test(phoneInput.value.trim())) {
        phoneInput.classList.remove("border-slate-300")
        phoneInput.classList.add("border-red-500")
        document.getElementById("phoneError").innerText = "Phone number is Required";
        valid = false
    } else {
        phoneInput.classList.add("border-slate-300")
        phoneInput.classList.remove("border-red-500")
    }

    if (courseInput.value === "" || courseInput.value === "Select Course") {
        courseInput.classList.remove("border-slate-300")
        courseInput.classList.add("border-red-500")
        valid = false
        document.getElementById("courseError").innerText = "Please Select a course"
    } else {
        courseInput.classList.add("border-slate-300")
        courseInput.classList.remove("border-red-500")
    }

    return valid;

}

const form = document.getElementById("register-form")

// add students 
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (studentValidation()) {
        const studentData = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            course: courseInput.value,
            status: statusInput.value
        }

        console.log(studentData)

        try {
            let response;
            if (editStudentId) {
                response = await fetch(
                    `http://localhost:3000/students/${editStudentId}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(studentData)
                    }
                )
            } else {
                response = await fetch(
                    "http://localhost:3000/students",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(studentData)
                    }
                );
            }

            const result = await response.json();
            alert(result.message)
            form.reset()
            hideModal()
        } catch (error) {
            console.log(error);
            alert("Something went wrong")
        }
    }



})
 // load students
async function loadStudents() {
    const response = await fetch(
        "http://localhost:3000/students"
    )
    students = await response.json()
    console.log(students)
    displayStudents(students)
}

// Display students 
function displayStudents(students) {
    const tableBody = document.getElementById("studentTableBody");
    tableBody.innerHTML = "";
       if (students.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-8 text-slate-500">
                    No students found
                </td>
            </tr>
        `;

        return;
    }

    students.forEach(student => {
        const statusClass =
        student.status === "Active"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700";
        tableBody.innerHTML += ` <tr class="border-t">
                                <td class="p-5">${student.name}</td>
                                <td class="p-5">${student.email}</td>
                                <td class="p-5">${student.phone}</td>
                                <td class="p-5">${student.course}</td>
                                <td class="p-5">
                                    <span class="bg-green-100 ${statusClass} px-3 py-1 rounded-full text-sm">
                                       ${student.status}
                                    </span>
                                </td>
                                <td class="p-5 space-x-2">
                                    <button onclick="editStudent(${student.id})" class="bg-blue-600 text-white px-4 py-2 rounded-lg">
                                        Edit
                                    </button>
                                    <button onclick="deleteStudent(${student.id})" class="bg-red-500 text-white px-4 py-2 rounded-lg">
                                        Delete
                                    </button>
                                </td>
                            </tr>`
    })

    //show number of students 
    const container = document.getElementById("recentStudents");
    container.innerHTML = "";

    const latestFour = students.slice(-4).reverse();
    latestFour.forEach(student => {
        container.innerHTML += `  <div class="p-4 rounded-xl bg-slate-50 flex justify-between items-center">
                                <div>
                                    <h4 class="font-semibold">${student.name}</h4>
                                    <p class="text-sm text-slate-500">${student.course}</p>
                                </div>

                                <button onclick="editStudent(${student.id})" class="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm">
                                    Edit
                                </button>
                            </div>`
    })

    const total_students = document.getElementById("total_student");
    total_students.innerText = `${students.length}`

    const active = document.getElementById("active_students")

    const activeStudents = students.filter(
        student => student.status === 'Active'
    ).length;
    active.innerText = activeStudents;

}

// Delete Student 
async function deleteStudent(id) {

    const confirmed = confirm("Are you sure you want to delete this Student")

    if (!confirmed) return;
    await fetch(
        `http://localhost:3000/students/${id}`,
        {
            method: "DELETE"
        }
    );

    loadStudents()
}
//   editing Student
function editStudent(id) {
    document.getElementById("modalTitle").textContent = "Edit Student";
    console.log("Editing : ", editStudentId)
    const student = students.find(
        student => student.id === id
    );
    if (!student) return;
    document.getElementById("name").value = student.name;
    document.getElementById("email").value = student.email;
    document.getElementById("phone").value = student.phone;
    document.getElementById("course").value = student.course;
    document.getElementById("status").value = student.status;

    editStudentId = id;
    registerModal.classList.remove("hidden")
    registerModal.classList.add("flex")



}
// reset the title of registeration form 
document.getElementById("modalTitle").textContent =
    "Register Student";