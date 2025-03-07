document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment");
    const commentsSection = document.getElementById("comments-section");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const commentText = commentInput.value.trim();
        if (commentText === "") return;

        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        
        const date = new Date();
        const timestamp = date.toLocaleString();
        
        commentElement.innerHTML = `
            <p>${commentText}</p>
            <span class="timestamp">${timestamp}</span>
            <button class="delete-btn">Eliminar</button>
        `;
        
        commentsSection.appendChild(commentElement);
        commentInput.value = "";

        commentElement.querySelector(".delete-btn").addEventListener("click", () => {
            commentElement.remove();
        });
    });
});