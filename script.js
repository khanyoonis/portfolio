// Dark/Light mode toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Dark mode styles
const style = document.createElement("style");
style.innerHTML = `
  body.dark {
    background: #121212;
    color: #eee;
  }
  body.dark .navbar {
    background: #000;
  }
  body.dark footer {
    background: #000;
  }
`;
document.head.appendChild(style);
