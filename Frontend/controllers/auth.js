exports.getSignup = (req, res, next) => {
	res.render('signup.ejs');
};

exports.getLogin = (req, res, next) => {
	res.render('login.ejs');
};

exports.getIndex = (req, res, next) => {
	res.render('index.ejs', {
		user: null,
	});
};
