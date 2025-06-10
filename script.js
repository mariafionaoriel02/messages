  (() => {
    const envelopeBtn = document.getElementById('envelopeBtn');
    const messageCard = document.getElementById('messageCard');
    envelopeBtn.addEventListener('click', () => {
      const isOpened = envelopeBtn.classList.contains('opened');
      if (isOpened) {
        envelopeBtn.classList.replace('opened', 'closed');
        envelopeBtn.setAttribute('aria-pressed', 'false');
        messageCard.setAttribute('aria-hidden', 'true');
        messageCard.blur();
      } else {
        envelopeBtn.classList.replace('closed', 'opened');
        envelopeBtn.setAttribute('aria-pressed', 'true');
        messageCard.setAttribute('aria-hidden', 'false');
        messageCard.focus();
      }
    });
  })();
