// script.js

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  // Simulated authentication logic (replace with actual backend authentication)
  const authenticated = authenticate(username, password, role);

  const messageElement = document.getElementById('message');
  if (authenticated) {
      window.location.href = `${role}.html`;
  } else {
      messageElement.innerHTML = 'Authentication failed. Please check your credentials.';
      messageElement.style.color = '#ff0000';
  }
}

function authenticate(username, password, role) {
  // Simulated authentication logic (replace with actual backend authentication)
  if (role === 'manager' && username === 'manager' && password === 'manager_password') {
      return true;
  } else if (role === 'developer' && username === 'developer' && password === 'developer_password') {
      return true;
  } else if (role === 'tester' && username === 'tester' && password === 'tester_password') {
      return true;
  }
  return false;
}

