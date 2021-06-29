const userSpace = document.getElementById('name');

const token = localStorage.getItem('userAuthToken') || null;

console.log(token);

if (!token) {
	window.location.href = '/auth/login';
}

fetch('http://localhost:3000/user/locked', {
	method: 'GET',
	headers: { authorization: token },
})
	.then(responce => {
		return responce.json();
	})
	.then(json => {
		userSpace.innerText = json.user.name;

		alert('Login Sucessfull');
	});
