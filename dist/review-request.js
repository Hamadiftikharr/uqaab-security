async function submitAuditRequest(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector('button[type="submit"]');
  const status = document.getElementById('request-status');
  if (button.disabled || !form.reportValidity()) return;

  button.disabled = true;
  form.setAttribute('aria-busy', 'true');
  status.textContent = '';
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });
    if (response.ok) {
      status.textContent = "Request received. I'll get back to you shortly.";
    } else {
      const result = await response.json().catch(() => ({}));
      const errors = Array.isArray(result.errors)
        ? result.errors.map(error => error.message).filter(Boolean).join(' ')
        : '';
      status.textContent = errors || 'Your request could not be submitted. Please try again.';
    }
  } catch {
    status.textContent = 'Unable to confirm submission. Please check your connection and try again.';
  } finally {
    button.disabled = false;
    form.removeAttribute('aria-busy');
  }
}
