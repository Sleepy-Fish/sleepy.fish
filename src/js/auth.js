module.exports = new Auth0Lock(
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