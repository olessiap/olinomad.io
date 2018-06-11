module.exports = function(grunt) {

    grunt.initConfig({
      responsive_images: {
        dev: {
          options: {
            engine: 'im',
            sizes: [
              {name:"lg", suffix:"_1x", quality:60, width:900},
              {name:"lg", suffix:"_2x", quality:60, width:1800},
              {name:"sm", suffix:"_1x", quality:60, width:600},
              {name:"sm", suffix:"_2x", quality:60, width:1200}
          ]
          },
          files: [{
            expand: true,
            src: ['*.{gif,jpg,png}'],
            cwd: 'images_og/',
            dest: 'images_src/'
          }]
        }
      },
    });
  
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['responsive_images']);
  
  };  