const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

const authRouter = require('./routes/auth');
const authController = require('./controllers/auth');

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

app.get('/', authController.getIndex);
app.use('/auth', authRouter);

app.listen(5500, () => {
	console.log('Server Started at http://localhost:5500');
});
