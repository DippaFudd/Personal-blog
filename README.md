# Personal Blog

Welcome to the Personal Blog project! This repository contains the source code for a simple personal blog application where users can create and view blog posts. The application supports light and dark themes, which can be toggled by the user.

## User Story

As a marketing student, I want a personal blog so that I can showcase my thoughts and experiences.

## Acceptance Criteria

Given a personal blog:
- **When** I load the app,
  - **Then** I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.
- **When** I submit the form,
  - **Then** blog post data is stored to localStorage.
- **When** the form submits,
  - **Then** I am redirected to the posts page.
- **When** I try to submit a form without a username, title, or content,
  - **Then** I am presented with a message that prompts me to complete the form.
- **When** I view the posts page,
  - **Then** I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
- **When** I click the light mode/dark mode toggle,
  - **Then** the page content's styles update to reflect the selection.
- **When** I click the "Back" button,
  - **Then** I am redirected back to the landing page where I can input more blog entries.
- **When** I view the main content,
  - **Then** I am presented with a list of blog posts that are pulled from localStorage.
- **When** I view localStorage,
  - **Then** I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
- **When** I take a closer look at a single blog entry in the list,
  - **Then** I can see the title, the content, and the author of the post.
- **When** I view the footer,
  - **Then** I am presented with a link to the developer's portfolio.

## Screenshots
![2025-03-04 (6)](https://github.com/user-attachments/assets/9a23d88a-51a6-46b5-a1af-b0189da1e664)

![2025-03-04 (7)](https://github.com/user-attachments/assets/835d982e-c616-4766-bdc2-1cddf09a4b72)

![2025-03-04 (8)](https://github.com/user-attachments/assets/1392db42-6a3f-496c-a7da-2478a3d5e8c2)

![2025-03-04 (10)](https://github.com/user-attachments/assets/ca4d11e5-223b-444e-bee2-24b8d057f4f9)

## Application
 [Website](https://dippafudd.github.io/Personal-blog/)



