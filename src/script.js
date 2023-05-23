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

const createAccountButton = document.querySelector('.create-account-button');
createAccountButton.addEventListener('click', () => {
  alert('Make your account!');
  // Either redirect to the account creation page or proceed with additional actions.
});

const helpLink = document.querySelector('.help-link');
helpLink.addEventListener('click', () => {
  alert('Need Help');
});
