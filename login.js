const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = this.username.value;
    const password = this.password.value;

    if (username === '2052CSE00838' && password === 'sohag1234' || username === '2052CSE00873' && password === 'maliha1234' || username === '2052CSE00850' && password === 'woosama1234' || username === '2052CSE00863' && password === 'sumaiya1234' || username === '2052CSE00865' && password === 'mahfuz1234' || username === '2052CSE00842' && password === 'eva1234' || username === '2052CSE00849' && password === 'asha1234' || username === '2052CSE00860' && password === 'yashin1234') {

        window.localStorage.setItem('id', username)
        const name = password.split("1")[0]
        window.localStorage.setItem('name', JSON.stringify(name))
        window.location.href = 'home-page.html';
    } else {
        alert('Invalid username or password.');
    }
});