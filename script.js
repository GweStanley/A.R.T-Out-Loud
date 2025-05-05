
  document.querySelectorAll('.countdown').forEach(el => {
    const targetDate = new Date(el.getAttribute('data-date'));
    const updateCountdown = () => {
      const now = new Date();
      const timeLeft = targetDate - now;
      if (timeLeft <= 0) {
        el.textContent = 'Event Ended';
        el.classList.add('text-danger');
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);

      el.textContent = `${days}d ${hours}h ${minutes}m remaining`;
    };

    updateCountdown();
    setInterval(updateCountdown, 60000); // update every minute
  });
