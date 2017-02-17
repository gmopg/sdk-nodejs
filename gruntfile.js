module.exports = function (grunt) {
  grunt.initConfig({
    jsdoc: {
      dist: {
        src: [
          "README.md",
          "./lib/**/*.js",
        ],
        options: {
          destination: "docs",
          template: "node_modules/ink-docstrap/template",
          // configure: "node_modules/ink-docstrap/template/jsdoc.conf.json"
          configure: "jsdoc.json"
        }
      }
    },

    watch: {
    }
  });

  grunt.loadNpmTasks("grunt-jsdoc");
  grunt.loadNpmTasks("grunt-contrib-watch");
};
