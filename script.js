function openModal() {
  document.getElementById('contactModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('contactModal').style.display = 'none';
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  if (name && email && message) {
    formMessage.textContent = `Thank you, ${name}! We'll respond soon.`;
    this.reset();
  } else {
    formMessage.textContent = 'Please fill out all fields.';
  }
});