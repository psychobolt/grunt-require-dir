module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      all: ['test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    'require-dir' : {
      all : {
        plugin    : 'tpl',
        src       : 'test/fixtures/texttree/**/*.tmpl',
        baseDir   : 'test/fixtures/texttree/',
        prefixDir : 'customDir/',
        dest      : 'test/fixtures/texttree.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        globals: {
          require: true
        },
        reporterOutput: ""
      },
      files: ['grunt.js', 'tasks/**/*.js', 'test/**/*.js']
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Load NPM tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks("grunt-contrib-nodeunit");

  // Default task.
  grunt.registerTask('default', ['jshint', 'nodeunit']);

};
