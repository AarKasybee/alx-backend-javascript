// Define the Teacher interface with required and optional properties
interface Teacher {
    readonly firstName: string; // only modifiable during initialization
    readonly lastName: string;  // only modifiable during initialization
    fullTimeEmployee: boolean;  // always defined
    yearsOfExperience?: number; // optional
    location: string;           // always defined
    [key: string]: any;         // allow any additional properties
}

// Example of creating a Teacher object
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,  // dynamically adding additional properties
};

console.log(teacher3);
