// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід
// на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули


let usersDiv = document.getElementById('users');


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        console.log(users);
        for (const user of users) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('user-div');

            let userInfo = document.createElement('div');
            userInfo.classList.add('user-info');

            let userName = document.createElement('h2');
            userName.innerText = `${user.name}`

            let id = document.createElement('p');
            id.innerText = `ID: ${user.id}`

            let userButton = document.createElement('button');
            userButton.classList.add('user-button')
            userButton.innerText = `User Details`;
            userButton.addEventListener('click', () => {
                window.location.href = `user-details.html?userId=${user.id}`;
            });

            userInfo.append(userName, id, userButton)
            userDiv.append(userInfo);
            usersDiv.append(userDiv);
        }
    })