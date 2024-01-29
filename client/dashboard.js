Template.dashboard.helpers({
    isAdmin() {
      return Roles.userIsInRole(Meteor.userId(), 'admin');
    },
    isBorrower() {
      return Roles.userIsInRole(Meteor.userId(), 'borrower');
    },
  });
  
  Template.adminDashboard.helpers({
    // Implement helper functions for admin dashboard
  });
  
  Template.borrowerDashboard.helpers({
    // Implement helper functions for borrower dashboard
  });
  
  Template.lenderDashboard.helpers({
    // Implement helper functions for lender dashboard
  });
  