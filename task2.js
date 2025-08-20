// Load blogs from JSON file
async function loadBlogs() {
    let response = await fetch("blogs.json");
    let blogs = await response.json();

    let blogList = document.getElementById("blog-list");

    blogs.forEach((blog, index) => {
        blogList.innerHTML += `
      <article class="blog-card">
        <img src="${blog.image}" alt="${blog.title}">
        <h2>${blog.title}</h2>
        <p>${blog.description}</p>
        <button class="btn" onclick="showDetail(${index})">Read More</button>
      </article>
    `;
    });

    // Store blogs globally for details
    window.allBlogs = blogs;
}

function showDetail(index) {
    let blog = window.allBlogs[index];

    document.getElementById("detail-title").innerText = blog.title;
    document.getElementById("detail-image").src = blog.image;
    document.getElementById("detail-content").innerText = blog.content;

    document.getElementById("blog-list").classList.add("hidden");
    document.getElementById("blog-detail").classList.remove("hidden");
}

function goBack() {
    document.getElementById("blog-list").classList.remove("hidden");
    document.getElementById("blog-detail").classList.add("hidden");
}

// Initialize
loadBlogs();