const fetchData = fetch("https://jsonplaceholder.typicode.com/posts");
const data = fetchData.then((response) => response.json());

function renderPosts(posts) {
  const newPosts = document.getElementById("allPosts");
  if (posts) {
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList = "post";
      postElement.innerHTML = `<div class = "name">${post.title}</div>
                            <div class="description">${post.body}</div>
                            <button class = "remove">X</button>`;
      newPosts.append(postElement);
    });
  }
}
const result = data.then((result) => {
  renderPosts(result);
  const posts = document.querySelectorAll(".post");
  posts.forEach((post) => {
    post.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove")) {
        post.remove();
      }
    });
  });
});
