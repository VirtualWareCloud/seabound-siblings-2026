function toggleMenu() {
  const menu = document.getElementById('navMenu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

document.getElementById("shareBtn").addEventListener("click", async () => {
  const shareData = {
    title: "Seabound Siblings – World's Toughest Row",
    text: "Support Jess & Mel as they row across the Atlantic!",
    url: window.location.href
  };
  try {
    await navigator.share(shareData);
  } catch (err) {
    alert("Share not supported. Copy the link: " + window.location.href);
  }
});