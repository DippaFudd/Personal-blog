// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Get the theme toggle button element
  const themeToggleButton = document.getElementById("toggle-theme");
  const body = document.body;

  // Function to set the theme
  const setTheme = (theme) => {
    body.classList.remove("light-mode", "dark-mode");
    body.classList.add(theme);
    themeToggleButton.textContent = theme === "dark-mode" ? "☀️" : "🌙";
    localStorage.setItem("theme", theme);
  };

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem("theme") || "light-mode";
  setTheme(savedTheme);

  // Toggle theme on button click
  themeToggleButton.addEventListener("click", () => {
    const newTheme = body.classList.contains("dark-mode") ? "light-mode" : "dark-mode";
    setTheme(newTheme);
  });
});

  


