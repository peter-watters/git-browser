import Ember from 'ember';

export default Ember.Component.extend({
    branchDetails: function() {

        let result;
        const branchesURL = 'https://api.github.com/repos/' + this.get('repositoryFullName') +'/branches';
        console.log(branchesURL);
        Ember.$.ajax({
            url: branchesURL,
            async: false,
            type: 'GET',
            success: function(data) {
                result = data;
            },
            error: (error) => {
              this.transitionTo('/page-not-found?error=' + this.rejectHandler(error));
            }
        });
        return result;


    }.property('branchDetails')
});
