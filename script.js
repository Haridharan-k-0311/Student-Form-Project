document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form"); // Assuming your form element is wrapped in a <form> tag
  const tableBody = document.querySelector("#studentTable tbody");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get form values
    const name = document.querySelector("#name").value;
    const age = document.querySelector("#Age").value;
    const gender = document.querySelector('#gender').value;
    const course = document.querySelector("#course").value;
    const email = document.querySelector("#email").value;

    // Validate form inputs (basic validation for required fields)
    if (
      name.trim() === "" ||
      age === "" ||
      gender === "" ||
      course === "" ||
      email.trim() === ""
    ) {
      alert("Please fill out all fields.");
      return;
    }

    // Create new table row
    const newRow = document.createElement("tr");

    // Populate row with data
    newRow.innerHTML = `
            <td>${name}</td>
            <td>${age}</td>
            <td>${course}</td>
            <td>${gender}</td>
            <td>${email}</td>
            <td><button class="delete-btn" >Delete</button></td>
        `;

    // Append row to the table
    tableBody.appendChild(newRow);

    // Reset form fields after submission
    form.reset();
  });

  // Optional: Add functionality to delete rows
  tableBody.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      const row = event.target.closest("tr");
      row.remove();
    }
  });
});
