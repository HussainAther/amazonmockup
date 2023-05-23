document.getElementById('signInForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Perform sign-in validation
  if (email === 'example@example.com' && password === 'password') {
    alert('Signed in.');
    // Either initiate a redirect to a different page or proceed with additional actions.
  } else {
    alert('Unable to sign in.');
    // Clear the form or display error messages
  }
});

document.querySelector('.create-account-button').addEventListener('click', function() {
  alert('Make your account!');
  // Either redirect to the account creation page or proceed with additional actions.
});

document.querySelector('.help-link').addEventListener('click', function() {
  alert('Need Help');
});

