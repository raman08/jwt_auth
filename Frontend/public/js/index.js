const loginForm = document.getElementById('login_form');
const signupForm = document.getElementById('signup_form');

loginForm &&
	loginForm.addEventListener('submit', async e => {
		e.preventDefault();

		const email = loginForm.elements['email'].value;
		const password = loginForm.elements['password'].value;

		const formBody = {
			email: email,
			password: password,
		};

		const response = await fetch('http://localhost:3000/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formBody),
		});

		if (response.ok) {
			const data = await response.json();
			localStorage.setItem('userAuthToken', 'Bearer ' + data.token);

			window.location.href = '/';
		} else {
			alert('Something Went wrong');
		}
	});

signupForm &&
	signupForm.addEventListener('submit', async e => {
		e.preventDefault();

		const name = signupForm.elements['name'].value;
		const email = signupForm.elements['email'].value;
		const password = signupForm.elements['password'].value;
		const cpassword = signupForm.elements['cpassword'].value;

		const formBody = {
			name: name,
			email: email,
			password: password,
			cpassword: cpassword,
		};

		const response = await fetch('http://localhost:3000/user/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formBody),
		});

		const data = await response.json();
		console.log(data);
	});
