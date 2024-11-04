document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();

    if (commentText) {
        addComment(commentText);
        commentInput.value = '';
    }
});

function addComment(text) {
    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment');

    const commentParagraph = document.createElement('p');
    commentParagraph.textContent = text;
    commentContainer.appendChild(commentParagraph);

    document.getElementById('commentsContainer').appendChild(commentContainer);
}