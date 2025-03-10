document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("blog-form");
  const errorMessage = document.getElementById("error-message");

  // Add an event listener to the form for the submit event
  form.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values from the form fields
    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    // Check if any of the fields are empty
    if (!username || !title || !content) {
      // Show the error message if any fields are empty
      errorMessage.classList.remove("hidden");
    } else {
      // Hide the error message if all fields are filled
      errorMessage.classList.add("hidden");

      // Create a blog post object with the form data
      const blogPost = { username, title, content };

      // Retrieve existing blog posts from local storage or initialize an empty array
      let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

      // Add the new blog post to the array
      blogPosts.push(blogPost);

      // Save the updated blog posts array back to local storage
      localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

      // Redirect to the posts page
      window.location.href = "blog.html";
    }
  });

  // Add event listeners to form fields to hide error message on input
  form.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value.trim() !== "") {
        errorMessage.classList.add("hidden");
      }
    });
  });

  // Add an event listener to the back button for the click event
  const backButton = document.getElementById("back-button");
  if (backButton) {
    backButton.addEventListener("click", () => {
      // Navigate back to the previous page
      window.history.back();
    });
  }
});


  

