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

        let postTitle = document.createElement('h3');
        postTitle.innerText = `${post.title}`

        let postText = document.createElement('p');
        postText.innerText = `${post.body}`

        postDetails.append(postTitle, postText)
        postBlock.append(postDetails)
    });

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then(comments => {
        let commentsBlock = document.createElement('div');
        commentsBlock.classList.add('comments-block');

        for (const comment of comments) {
            let commentBlock = document.createElement('div');
            commentBlock.classList.add('comment-block')

            let commentName = document.createElement('h4');
            commentName.innerText = `${comment.name}`

            let commentDetail = document.createElement('p');
            commentDetail.innerText = `
                ID: ${comment.id}
                Email: ${comment.email}
        
            `

            let commentText = document.createElement('p');
            commentText.innerText = `${comment.body}`

            commentBlock.append(commentName, commentDetail, commentText)
            commentsBlock.append(commentBlock)
        }


        //     "postId": 1,
        //     "id": 1,
        //     "name": "id labore ex et quam laborum",
        //     "email": "Eliseo@gardner.biz",
        //     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor
        //     quam autem quasi\nreiciendis et nam sapiente accusantium"
        //
        //
        let postDetails = document.getElementsByClassName('post-details')[0]
        postBlock.append(postDetails, commentsBlock);
    })