module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: "0.0.0.0",
                    bases: ["app", "bower_components"]
                }
            }
        },
         traceur: {
            options: {
                experimental: true
            },
            custom: {
                files: [{
                    expand: true, 
                    src: ["app/es6/*.js"],
                    dest: "app/es5/",
                    ext: ".js", 
                    flatten: true
                }]
            }
        },
        watch: {
            all: {
                files: "app/**/*.*",
                options: {
                    livereload: true
                }
            },
            js: {
                files: "app/es6/*.js",
                tasks: ["traceur"]                
            }
        },
        open: {
            all: {
                path: "http://localhost:9000/default.html"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-express");
    grunt.loadNpmTasks("grunt-open");
    grunt.loadNpmTasks("grunt-traceur");
    grunt.registerTask("default", ["traceur", "express", "open", "watch"]);
};