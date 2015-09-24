module.exports = function(){

    var config = {

        defaultPort:7200,
        index:'./public/index.html',
        temp:'./tmp/',
        css:'./public/css/',
        cssFile:'./public/css/style.css',
        styles:'./public/css/**/*.css',
        js: './public/app/app.js',
        tempParts:'./.tmp/partials/',
        sassFile:'./public/css/style.scss',
        sassDir:'./src/scss/style.scss',
        cssDir:'./public/css/',
        viewMain:'./public/',
        viewMainw:'./public/**/*.*',
        viewPartials:'./public/partials/',


        bower:{
            json: require('./public/bower.json'),
            directory:'./public/bower_components/',
            ignorepath:'../../public',
        },
        nodeServer: './server.js',
        server:'./server/',
    };

    config.wdOptions = function(){
        var options ={
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorepath

        };
        return options;
    };

    return config;


};
