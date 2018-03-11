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

Sleepy.loadApp = function(){
    $('#index-banner').hide();
    $('#loading-banner').hide();
    $('.login-nav').hide();
    $('.logout-nav').show();
    $('#PageContent').append("".concat(
        '<div id="app">',
            '<p>&nbsp;&nbsp;&nbsp;Welcome, {{ user.given_name }}!</p>',
        '</div>',
    ));
    Sleepy.app = new Vue({
        el: '#app',
        data: {
            user: Sleepy.user
        }
    });
}

Sleepy.loadStatic = function(){
    $('#index-banner').show();
    $('#loading-banner').hide();
    $('.login-nav').show();
    $('.logout-nav').hide();
    $('#app').remove();
}

Sleepy.validate = function(cb){
    let currentCookie = Cookies.get('sleepy-auth');
    if(currentCookie){
        lock.getUserInfo(currentCookie, function(error, profile) {
            if (error) {
                Cookies.expire('sleepy-auth');
                Sleepy.loggedin = false;
                cb(false);
                console.warn('Auth Cookie Not Valid');
            } else {
                Sleepy.user = profile;
                Sleepy.loggedin = true;
                cb(true);
            }
        });
    } else{
        Sleepy.loggedin = false;
        cb(false)
    }
}


lock.on("authenticated", function(authResult) {
    Cookies.set('sleepy-auth', authResult.accessToken, {expires: authResult.expiresIn})
    lock.getUserInfo(authResult.accessToken, function(error, profile) {
      if (error) {
        throw Error(error);
      } else {
        Sleepy.user = profile;
        Sleepy.loggedin = true;
        Sleepy.loadApp();
      }
    });
  });

Sleepy.login = function(){
    lock.show();
}

Sleepy.logout = function(){
    delete Sleepy.user;
    Sleepy.loggedin = false;
    Cookies.expire('sleepy-auth');
    Sleepy.loadStatic();
}

Sleepy.validate(function(loggedIn){
    if(loggedIn){
        Sleepy.loadApp();
    } else {
        Sleepy.loadStatic();
    }
});