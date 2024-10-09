//Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

//Create two Student objects
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

//Create an array to hold the students
const studentsList: Student[] = [student1, student2];

//Render a table using Vanilla JavaScript
function renderTable(students: Student[]): void {
    // Create table and append to body
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    // Add rows for each student
    students.forEach((student) => {
        const row = document.createElement('tr');

        // Create cells for firstName and location
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;

        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;

        // Append cells to row
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);

        // Append row to tbody
        tbody.appendChild(row);
    });

    // Append tbody to table
    table.appendChild(tbody);

    // Append table to the DOM (inside body)
    document.body.appendChild(table);
}

// Call the function to render the table
renderTable(studentsList);

