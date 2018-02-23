var Auth0Lock = require('auth0-lock').Auth0Lock;
var lock = new Auth0Lock(
    "p-_kg8hvQrhE1PoD8sr3SUUoI5qWsnYM",
    "sleepyfish.auth0.com",
    {
        allowedConnections: ["Username-Password-Authentication","google-oauth2","facebook","github"],
        rememberLastLogin: true,
        socialButtonStyle: "small",
        languageDictionary: {"title":"Sleepy Fish"},
        language: "en",
        theme: {"logo":"http://sleepy.fish/img/angel-fish.svg","primaryColor":"#64B5F6"}
    }
);

lock.on("authenticated", function(authResult) {
    // Use the token in authResult to getUserInfo() and save it to localStorage
    lock.getUserInfo(authResult.accessToken, function(error, profile) {
      if (error) {
        throw Error(error);
        return;
      }
      console.log(authResult.accessToken)
      console.log(profile);
    });
  });

global.login = function(){
    lock.show();
}