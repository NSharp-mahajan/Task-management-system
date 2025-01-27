document.addEventListener("DOMContentLoaded", () => {
    const taskTable = document.getElementById("taskTable");
    const taskModal = document.getElementById("taskModal");
    const closeModal = document.querySelector(".close");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskForm = document.getElementById("taskForm");

    // Variables to track editing
    let isEditing = false;
    let editingRow = null;

    // Show Modal for Adding or Editing
    addTaskBtn.addEventListener("click", () => {
        taskModal.style.display = "flex";
        taskForm.reset();
        isEditing = false;
    });

    // Close Modal
    closeModal.addEventListener("click", () => {
        taskModal.style.display = "none";
    });

    // Add or Edit Task
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskName = document.getElementById("taskName").value;
        const deadline = document.getElementById("deadline").value;
        const status = document.getElementById("status").value;

        if (isEditing) {
            // Update existing task row
            editingRow.cells[0].textContent = status;
            editingRow.cells[1].textContent = taskName;
            editingRow.cells[2].textContent = deadline;
        } else {
            // Create a new row
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${status}</td>
                <td>${taskName}</td>
                <td>${deadline}</td>
                <td class="action-buttons">
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </td>
            `;

            taskTable.appendChild(row);

            // Add functionality to edit and delete buttons
            row.querySelector(".edit").addEventListener("click", () => editTask(row));
            row.querySelector(".delete").addEventListener("click", () => row.remove());
        }

        // Reset and close modal
        taskForm.reset();
        taskModal.style.display = "none";
    });

    // Edit Task
    const editTask = (row) => {
        isEditing = true;
        editingRow = row;

        // Populate form with existing task details
        document.getElementById("taskName").value = row.cells[1].textContent;
        document.getElementById("deadline").value = row.cells[2].textContent;
        document.getElementById("status").value = row.cells[0].textContent;

        // Show modal
        taskModal.style.display = "flex";
    };

    // Close modal when clicking outside of it
    window.addEventListener("click", (e) => {
        if (e.target === taskModal) {
            taskModal.style.display = "none";
        }
    });
});

