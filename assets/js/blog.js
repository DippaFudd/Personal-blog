window.onload = function() {
  const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  const postsContainer = document.getElementById('posts-container');

  posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');

      postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.content}</p>
          <p>By ${post.username}</p>
      `;
      postsContainer.appendChild(postElement);
  });
};

  


