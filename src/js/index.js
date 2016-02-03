var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;

var App = require('./components/app.js');

var routes = (
    <Router history={browserHistory}>
    <Route path="/" component={App}/>
    </Router>
);

ReactDOM.render(
    routes,document.getElementById('main')
);

require("../sass/main.scss");