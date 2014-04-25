module.exports = (grunt) ->
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'

        connect:
            options:
                keepalive: true
                hostname: 'localhost'
            serve:
                options:
                    port: 5000
                    open: true
                    base: ''
                    hostname: 'localhost'

    grunt.loadNpmTasks 'grunt-contrib-connect'

    grunt.registerTask 'default', [ 'connect:serve' ]
