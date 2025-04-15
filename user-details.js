// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.

const urlParams = new URLSearchParams(window.location.search);
const userId = +urlParams.get('userId');

let userBlock = document.getElementById('user-block');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then(user => {

        let h2 = document.createElement('h2');
        h2.classList.add('h2-name')
        h2.innerText = `${user.name}`

        let userDetails = document.createElement('div');
        userDetails.classList.add('user-details')
        userDetails.innerText = `
                    ID: ${user.id}
                    Username: ${user.username}
                    Email: ${user.email}
                    Phone: ${user.phone}
                    Website: ${user.website}
                    Company: ${user.company.name}
                    Address: ${user.address.street}, ${user.address.city}
                `;

        let postButton = document.createElement('button');
        postButton.classList.add('post-button');
        postButton.innerText = `Load Post`


        let postContainer = document.createElement('div');
        postContainer.classList.add('post-container');

        postContainer.append(postButton)
        userBlock.append(h2, userDetails, postContainer);


        postButton.addEventListener('click', () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then(response => response.json())
                .then(posts => {
                    const postsContainer = document.getElementsByClassName('post-container')[0];
                    postsContainer.innerHTML = '';

                    posts.forEach(post => {
                        const postBlock = document.createElement('div');
                        postBlock.classList.add('post-block');
                        let titlePost = document.createElement('h3');
                        titlePost.innerText = `${post.title}`

                        let buttonPost = document.createElement('button');
                        buttonPost.innerText = 'View Post';
                        buttonPost.addEventListener('click', () => {
                            window.location.href = `post-details.html?postId=${post.id}`;
                        });
                        postBlock.append(titlePost, buttonPost)
                        postsContainer.appendChild(postBlock);
                    });
                });
        });
    });
