import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
});

Template.navbar.events({
  'click #logout'(event) {
    event.preventDefault();
    Meteor.logout();
  },
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/register');
Router.route('/login');
Router.route('/dashboard');
