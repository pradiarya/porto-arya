const copyEmailButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');
const emailAddress = 'pradiarya9@gmail.com';

copyEmailButton.addEventListener('click', async () => {
  if (!navigator.clipboard) {
    copyStatus.textContent = 'Clipboard tidak tersedia. Silakan salin alamat email secara manual.';
    return;
  }

  try {
    await navigator.clipboard.writeText(emailAddress);
    copyStatus.textContent = 'Alamat email berhasil disalin.';
  } catch {
    copyStatus.textContent = 'Email belum bisa disalin. Silakan salin alamat email secara manual.';
  }
});
