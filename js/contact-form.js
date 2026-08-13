document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  alert('Thanks, ' + (data.name || 'friend') + '! This is a placeholder — hook this form up to an email service to actually receive submissions.');
});
