document.addEventListener("DOMContentLoaded", function() {
    const squadForm = document.getElementById("squadForm");

    squadForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const squadName = document.getElementById("squadName").value;
        const squadLeader = document.getElementById("squadLeader").value;
        const squadMembers = document.getElementById("squadMembers").value;

        if (squadName && squadLeader && squadMembers) {
            const newRow = document.createElement("tr");

            const tdName = document.createElement("td");
            const tdLeader = document.createElement("td");
            const tdMembers = document.createElement("td");

            tdName.textContent = squadName;
            tdLeader.textContent = squadLeader;
            tdMembers.textContent = squadMembers;

            newRow.appendChild(tdName);
            newRow.appendChild(tdLeader);
            newRow.appendChild(tdMembers);

            const tdAction = document.createElement("td");

            const btEdit = document.createElement("button");
            btEdit.textContent = "Editar";
            btEdit.classList.add("edit-btn");
            btEdit.addEventListener("click", function () {
                editRow(newRow);
            });

            const btDelete = document.createElement("button");
            btDelete.textContent = "Remover";
            btDelete.classList.add("delete-btn");
            btDelete.addEventListener("click", function () {
                if (confirm("Confirma a exclusão do cadastro desta SQUAD?")) {
                    newRow.remove();
                }
            });

            tdAction.appendChild(btEdit);
            tdAction.appendChild(btDelete);

            newRow.appendChild(tdAction);

            document.getElementById("squadTable").querySelector("tbody").appendChild(newRow);

            squadForm.reset();
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });

    function editRow(row) {
        const cells = row.getElementsByTagName("td");
        const squadName = cells[0].textContent;
        const squadLeader = cells[1].textContent;
        const squadMembers = cells[2].textContent;

        document.getElementById("squadName").value = squadName;
        document.getElementById("squadLeader").value = squadLeader;
        document.getElementById("squadMembers").value = squadMembers;

        // Replace submit event listener with update event listener
        squadForm.removeEventListener("submit", handleSubmit);
        squadForm.addEventListener("submit", function(event) {
            event.preventDefault();

            cells[0].textContent = document.getElementById("squadName").value;
            cells[1].textContent = document.getElementById("squadLeader").value;
            cells[2].textContent = document.getElementById("squadMembers").value;

            // Restore submit event listener for adding new rows
            squadForm.removeEventListener("submit", handleUpdate);
            squadForm.addEventListener("submit", handleSubmit);

            // Change button text back to "Editar"
            const editButton = cells[3].querySelector(".edit-btn");
            editButton.textContent = "Editar";

            squadForm.reset();
        });

        // Change button text to "Salvar"
        const editButton = cells[3].querySelector(".edit-btn");
        editButton.textContent = "Salvar";
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Handle form submission
        // Similar to your original submission logic
    }
});
