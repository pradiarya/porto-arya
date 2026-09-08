// Fitur kecil: klik email di section kontak buat copy ke clipboard,
// biar user gak perlu select-text manual. Contoh simpel pemakaian
// Clipboard API + event handling.

const emailLink = document.getElementById('email-link');

emailLink.addEventListener('click', (e) => {
  e.preventDefault();
  const email = emailLink.textContent;

  navigator.clipboard.writeText(email).then(() => {
    const original = emailLink.textContent;
    emailLink.textContent = 'Email disalin!';
    setTimeout(() => {
      emailLink.textContent = original;
    }, 1500);
  });
});
