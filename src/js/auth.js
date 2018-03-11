var lock = new Auth0Lock(
    "p-_kg8hvQrhE1PoD8sr3SUUoI5qWsnYM",
    "sleepyfish.auth0.com",
    {
        allowedConnections: ["google-oauth2","facebook"],
        rememberLastLogin: true,
        socialButtonStyle: "large",
        languageDictionary: {"title":"Sleepy Fish"},
        language: "en",
        theme: {"logo":"https://sleepy.fish/img/angel-fish.svg","primaryColor":"#64B5F6"}
    }
);

let currentCookie = Cookies.get('sleepy-auth')
if(currentCookie){
    lock.getUserInfo(currentCookie, function(error, profile) {
        if (error) {
            Cookies.expire('sleepy-auth');
            Sleepy.loggedin = false;
            console.warn('Auth Cookie Not Valid');
        } else {
            Sleepy.user = profile;
            Sleepy.loggedin = true;
        }
    });
} else{
    Sleepy.loggedin = false;
}

lock.on("authenticated", function(authResult) {
    Cookies.set('sleepy-auth', authResult.accessToken, {expires: authResult.expiresIn})
    lock.getUserInfo(authResult.accessToken, function(error, profile) {
      if (error) {
        throw Error(error);
      } else {
        Sleepy.user = profile;
        Sleepy.loggedin = true;
      }
    });
  });

Sleepy.login = function(){
    lock.show();
}