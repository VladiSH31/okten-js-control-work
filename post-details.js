//На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const urlParams = new URLSearchParams(window.location.search);
const postId = +urlParams.get('postId');

let postBlock = document.getElementById('post-block');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then(post => {
        let postDetails = document.createElement('div');
        postDetails.classList.add('post-details')

        let postTitle = document.createElement('h4');
        postTitle.innerText = `${post.title}`
        let postText = document.createElement('p');
        postText.innerText = `${post.body}`

        postDetails.append(postTitle, postText)
        postBlock.append(postDetails)
    });