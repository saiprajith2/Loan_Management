Template.register.events({
    'submit form'(event) {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
  
      Accounts.createUser({ email, password }, (error) => {
        if (error) {
          console.log(error.reason);
        } else {
          // Assign a default role to the user upon registration
          Meteor.call('assignRole', Meteor.userId(), 'borrower', (error) => {
            if (error) {
              console.log(error.reason);
            }
          });
          Router.go('/dashboard');
        }
      });
    },
  });
  