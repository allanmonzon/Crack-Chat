Crack.IndexController = Ember.ArrayController.extend({

  needs: ['application'],

  newCrack: '',

  actions: {
    createCrack: function() {
      var userName = this.get('controllers.application.currentUser.username');
      var crack = this.store.createRecord('chat', {
        message: this.get('newCrack'),
        username: userName,
        timestamp: new Date()
      });
      crack.save();
      this.set('newCrack', '');
    }
  }

});