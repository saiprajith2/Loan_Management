import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  // Create default admin user if none exists
  if (Meteor.users.find().count() === 0) {
    const adminUserId = Accounts.createUser({
      email: 'admin@example.com',
      password: 'adminpassword',
    });

    // Assign admin role to the default user
    Meteor.call('assignRole', adminUserId, 'admin');
  }
});

// Methods that run on the server
Meteor.methods({
  assignRole(userId, role) {
    // Ensure that only server-side code can assign roles
    if (!this.userId || !Roles.userIsInRole(this.userId, 'admin')) {
      throw new Meteor.Error('not-authorized', 'Only admins can assign roles.');
    }

    Roles.addUsersToRoles(userId, role);
  },
});
