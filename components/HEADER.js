// components/HEADER.js

// Native Share API with fallback
document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.getElementById("shareBtn");

  if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: "Seabound Siblings | World's Toughest Row",
            text: "Support Jess & Mel as they row across the Atlantic in the World’s Toughest Row!",
            url: window.location.href,
          });
        } catch (err) {
          console.error("Sharing failed:", err);
        }
      } else {
        alert("Your browser doesn't support native sharing. Please copy the link manually.");
      }
    });
  }

  // Hamburger Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.getElementById("navMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }
});
