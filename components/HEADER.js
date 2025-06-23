<!-- Optional: Place this in header.js or inside a <script> tag -->
<script>
  // Toggle mobile menu
  document.getElementById('hamburgerBtn').addEventListener('click', () => {
    const nav = document.getElementById('mobileNav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });

  // Share functionality
  document.getElementById('shareBtn').addEventListener('click', async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href
        });
      } catch (err) {
        alert('Sharing failed or canceled.');
      }
    } else {
      alert('Sharing is not supported on this device. Please copy the URL.');
    }
  });
</script>