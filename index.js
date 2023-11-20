// Function to handle form submission
function submitForm(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;
    var acceptTerms = document.getElementById('acceptTerms').checked;

    // Validate email format
    

    // Calculate age from the provided date of birth
 

    // Validate age range
    

    // Create a user object
    var user = {
        name: name,
        email: email,
        password: password, // Note: In a real application, you should not display passwords.
        dob: dob,
        acceptTerms: acceptTerms ? 'Yes' : 'No'
    };

    // Get existing users from local storage or initialize an empty array
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Add the new user
    users.push(user);

    // Save the updated user list to local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Display the updated user list
    displayUsers();

    // Reset the form fields
    document.getElementById('registrationForm').reset();
}

// Function to display the list of registered users
function displayUsers() {
    // Get the user list element
    var userList = document.getElementById('userList');

    // Clear the existing list
    userList.innerHTML = '';

    // Get the users from local storage
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Loop through the users and add them to the table
    users.forEach(function (user) {
        var row = userList.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.textContent = user.name;
        cell2.textContent = user.email;
        cell3.textContent = user.password; // Note: In a real application, you should not display passwords.
        cell4.textContent = user.dob;
        cell5.textContent = user.acceptTerms? 'true':'false';
    });
}

// Display users when the page loads
displayUsers();
