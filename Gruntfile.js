/* 
 *  Author: Slawek Kaczorowski 
 *  
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      production: {
        options: {
          style: 'expanded'
        },
        files: {
          'style.css': 'style.scss',
        }
      }
    }
  });
  grunt.registerTask('default', ['sass']);
}