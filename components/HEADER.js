// HEADER.js
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.getElementById("shareBtn");
  shareBtn?.addEventListener("click", async () => {
    try {
      await navigator.share({
        title: "Seabound Siblings",
        text: "Join Jess & Mel on their Atlantic Rowing Adventure!",
        url: window.location.href,
      });
    } catch (err) {
      console.log("Share failed:", err.message);
    }
  });
});
