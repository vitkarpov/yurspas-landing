var fs = require('fs');
var path = require('path');
var options = JSON.parse(fs.readFileSync('credentials.json', 'utf-8'));

module.exports = function (grunt) {
    grunt.initConfig({
        ftp_push: {
            deploy: {
                options: options,
                files: [
                    {
                        expand: true,
                        cwd: "desktop.bundles/index",
                        src: [
                            "*.html",
                            "*.min.css",
                            "*.min.js",
                            "images/**"
                        ]
                    },
                    {
                        expand: true,
                        src: "forms.php"
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-ftp-push');
    grunt.registerTask('deploy', ['ftp_push']);
}
