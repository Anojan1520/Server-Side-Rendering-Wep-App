const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();
const router = express.Router();

// Set up Handlebars as the view engine
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Built-in middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Route for the homepage
router.get('/', (req, res) => {
    const details = [
        // "Anojan",
        // "Jaffna",
        // "Unicom",
        // "Software Engineer"
    ];
    res.render('index', {
        docTitle: "Welcome to our aj code",
        details,
        detailsExists: details.length > 0
    });
});

// Route for the products page
router.get('/products', (req, res) => {
    res.render('product', {
        docTitle: "Welcome to our aj code"
    });
});

// Catch-all route for 404
router.use((req, res, next) => {
    res.render('404');
});

app.use(router);

// Start the server
app.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
});
