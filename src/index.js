
global.Sleepy = {}
Sleepy.lock = require('./js/auth');
Vue.use(VueRouter);
Sleepy.app = new Vue({
    el: '#app',
    router: new VueRouter({
        routes: require('./js/routes')
    }),
    data:{
        loggedIn: false,
        loading: true,
        user:{}
    },
    methods:{
        login:function(){
            Sleepy.lock.show();
        },
        logout:function(){
            this.user = {};
            this.loggedIn = false;
            Cookies.expire('sleepy-auth');
        },
        validate:function(cb){
            var authCookie = Cookies.get('sleepy-auth');
            if(authCookie){
                Sleepy.lock.getUserInfo(authCookie, function(error, profile) {
                    if (error) {
                        Cookies.expire('sleepy-auth');
                        this.loggedIn = false;
                        cb(false);
                        console.warn('Auth Cookie Not Valid');
                    } else {
                        this.user = profile;
                        this.loggedIn = true;
                        cb(true);
                    }
                }.bind(this));
            } else{
                this.loggedIn = false;
                cb(false)
            }
        }
    }
});

Sleepy.lock.on("authenticated", function(authResult) {
    Cookies.set('sleepy-auth', authResult.accessToken, {expires: authResult.expiresIn});
    Sleepy.lock.getUserInfo(authResult.accessToken, function(error, profile) {
        if (error) {
            throw Error(error);
        } else {
            Sleepy.app.user = profile;
            Sleepy.app.loggedIn = true;
        }
    });
});

Sleepy.app.validate(function(loggedIn){
    Sleepy.app.loading = false;
});

