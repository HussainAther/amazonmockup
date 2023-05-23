document.getElementById('signInForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Perform sign-in validation
  if (email === 'example@example.com' && password === 'password') {
    alert('Sign in successful!');
    // Redirect to another page or perform further actions
  } else {
    alert('Invalid email or password. Please try again.');
    // Clear the form or display error messages
  }
});

document.querySelector('.create-account-button').addEventListener('click', function() {
  alert('Create your Amazon account!');
  // Redirect to account creation page or perform further actions
});

document.querySelector('.help-link').addEventListener('click', function() {
  alert('Need Help