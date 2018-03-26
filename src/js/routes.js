var Splash = require('../components/splash.vue');
var Tech = require('../components/tech.vue');
var Games = require('../components/games.vue');

module.exports = [
    {
        path: '/',
        component: Splash
    },
    {
        path: '/tech',
        component: Tech
    },
    {
        path: '/games',
        component: Games
    }
]