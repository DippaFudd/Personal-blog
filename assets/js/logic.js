// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Get the theme toggle button element
  const themeToggleButton = document.getElementById("toggle-theme");
  const body = document.body;

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggleButton.textContent = savedTheme === "dark-mode" ? "☀️" : "🌙";
  } else {
    // Default to light mode if no theme is saved
    localStorage.setItem("theme", "light-mode");
    body.classList.add("light-mode");
    themeToggleButton.textContent = "🌙";
  }

  // Toggle theme on button click
  themeToggleButton.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      themeToggleButton.textContent = "🌙"; // Moon icon for dark mode
      localStorage.setItem("theme", "light-mode");
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      themeToggleButton.textContent = "☀️"; // Sun icon for light mode
      localStorage.setItem("theme", "dark-mode");
    }
  });
});

  


