window.onload = function() {

    // ---------------------------
    // BASIC LOGIN SYSTEM
    // ---------------------------

    const validUsername = "student";
    const validPassword = "password123";

    const loginSection = document.getElementById("loginSection");
    const taskSection = document.getElementById("taskSection");
    const loginBtn = document.getElementById("loginBtn");
    const loginError = document.getElementById("loginError");

    loginBtn.addEventListener("click", () => {
        const usernameInput = document.getElementById("usernameInput").value.trim();
        const passwordInput = document.getElementById("passwordInput").value.trim();

        if (usernameInput === validUsername && passwordInput === validPassword) {
            loginSection.style.display = "none";
            taskSection.style.display = "block";
            loginError.textContent = "";
        } else {
            loginError.textContent = "Invalid username or password.";
        }
    });

    // ---------------------------
    // TASK MANAGEMENT SYSTEM
    // ---------------------------

    let tasks = [];

    const addTaskBtn = document.getElementById("addTaskBtn");
    const updateTaskBtn = document.getElementById("updateTaskBtn");
    const taskError = document.getElementById("taskError");

    const titleInput = document.getElementById("taskTitle");
    const courseCodeInput = document.getElementById("courseCode");
    const courseNameInput = document.getElementById("courseName");
    const dueDateInput = document.getElementById("dueDate");
    const descriptionInput = document.getElementById("taskDescription");
    const notesInput = document.getElementById("taskNotes");

    const taskTableBody = document.getElementById("taskTableBody");

    // ---------------------------
    // VALIDATION FUNCTION
    // ---------------------------
    function validateTask() {
        if (
            titleInput.value.trim() === "" ||
            courseCodeInput.value.trim() === "" ||
            courseNameInput.value.trim() === "" ||
            dueDateInput.value === ""
        ) {
            taskError.textContent = "Please fill in all required fields.";
            return false;
        }

        const selectedDate = new Date(dueDateInput.value);
        const today = new Date();

        if (selectedDate < today) {
            taskError.textContent = "Due date cannot be in the past.";
            return false;
        }

        taskError.textContent = "";
        return true;
    }

    // ---------------------------
    // GLOBAL FUNCTIONS (must be BEFORE renderTasks)
    // ---------------------------

    let currentEditIndex = null;

    window.editTask = function(index) {
        const task = tasks[index];
        currentEditIndex = index;

        titleInput.value = task.title;
        courseCodeInput.value = task.courseCode;
        courseNameInput.value = task.courseName;
        dueDateInput.value = task.dueDate;
        descriptionInput.value = task.description;
        notesInput.value = task.notes;

        addTaskBtn.style.display = "none";
        updateTaskBtn.style.display = "inline-block";
    };

 /* Delete Return; and rearrange code so that it works */
    window.deleteTask = function(index) {
        if (confirm("Are you sure you want to delete this task?")) {
        tasks.splice(index, 1);
        renderTasks();
        }
    };

    // ---------------------------
    // RENDER TASKS
    // ---------------------------
    function renderTasks() {
        taskTableBody.innerHTML = "";

        tasks.forEach((task, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${task.title}</td>
                <td>${task.courseCode} - ${task.courseName}</td>
                <td>${task.dueDate}</td>
                <td>${task.description}</td>
                <td>${task.notes}</td>
                <td>
                    <button onclick="editTask(${index})">Edit</button>
                    <button onclick="deleteTask(${index})">Delete</button>
                </td>
            `;

            taskTableBody.appendChild(row);
        });
    }

    // ---------------------------
    // ADD TASK
    // ---------------------------
    addTaskBtn.addEventListener("click", () => {
        if (!validateTask()) return;

        const newTask = {
            title: titleInput.value.trim(),
            courseCode: courseCodeInput.value.trim(),
            courseName: courseNameInput.value.trim(),
            dueDate: dueDateInput.value,
            description: descriptionInput.value.trim(),
            notes: notesInput.value.trim()
        };

        tasks.push(newTask);
        renderTasks();
        clearForm();
    });

    // ---------------------------
    // SAVE UPDATED TASK
    // ---------------------------
    updateTaskBtn.addEventListener("click", () => {
        if (!validateTask()) return;

        tasks[currentEditIndex] = {
            title: titleInput.value.trim(),
            courseCode: courseCodeInput.value.trim(),
            courseName: courseNameInput.value.trim(),
            dueDate: dueDateInput.value,
            description: descriptionInput.value.trim(),
            notes: notesInput.value.trim()
        };

        renderTasks();
        clearForm();

        addTaskBtn.style.display = "inline-block";
        updateTaskBtn.style.display = "none";
    });

    // ---------------------------
    // CLEAR FORM
    // ---------------------------
    function clearForm() {
        titleInput.value = "";
        courseCodeInput.value = "";
        courseNameInput.value = "";
        dueDateInput.value = "";
        descriptionInput.value = "";
        notesInput.value = "";
    }

};
// ---------------------------
// LIVE DATE & TIME DISPLAY
// ---------------------------
function updateDateTime() {
    const now = new Date();
    const formatted = now.toLocaleString("en-AU", {
        dateStyle: "full",
        timeStyle: "medium"
    });

    document.getElementById("dateTime").textContent =
        "Current Date & Time: " + formatted;
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime();
