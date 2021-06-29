const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

const userRoutes = require('./routes/user');

app.use('/user', userRoutes);

mongoose
	.connect(
		'mongodb+srv://trader_admon:CgWte8FsI9zA9u0S@traders.np3rk.mongodb.net/intern_db?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => {
		app.listen(3000, () => {
			console.log('Server Started at http://localhost:3000');
		});
	})
	.catch(err => {
		console.log(err);
	});
