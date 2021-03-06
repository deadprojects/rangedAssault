Template.entry.events({
  'submit form': function(event){
    event.preventDefault();

    var email = $("#email").val(),
        password = $("#password").val();

    if(email && password){
    Meteor.loginWithPassword(email, password, function(error){
      if(error){
        bootbox.alert("Sorry, we couldn't find that email or password");
      } else {
        Router.go("campaign.select");
      }
    });
    }
    else {
      bootbox.alert("Please enter your email and password");
    }
  }
})
