module.exports = function(grunt) {
  grunt.initConfig({
    // Watch task config
    watch: {
      sass: {
        files: "src/scss/**",
        tasks: ['sass', "cssmin"]
      },
      scripts: {
        files: ["./src/js/**"],
        tasks: ["browserify", "uglify"]
      },
      html: {
        files: "src/*.html",
        tasks: ["htmlmin"]
      }
    },
    build: {
      dest: 'dist'
    },
    // SASS task config
    sass: {
      dev: {
        files: {
          // destination         // source file
          "dist/css/style.css": [
            //"node_modules/bootstrap/dist/css/bootstrap.min.css",
            "src/scss/style.scss"
          ]
        }
      }
    },
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "dist/css/**",
            "dist/js/**",
            "dist/*.html"
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./dist"
          }
        }
      }
    },
    browserify: {
      dist: {
        options: {
          transform: [
            ["babelify", {
              presets: ['es2015', 'react']
            }]
          ]
        },
        files: {
          // if the source file has an extension of es6 then
          // we change the name of the source file accordingly.
          // The result file's extension is always .js
          "./dist/js/module.js": ["./src/js/index.js"]
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          "expand": true,
          "cwd": "src/",
          "src": ["**/*.html"],
          "dest": "dist/",
          "ext": ".html"
        }]
      }
    },
    copy: {
      main: {
        files: [
          // includes files within path
          {
            expand: true,
            src: ['bootstrap/dist/**'],
            dest: 'dist/lib/',
            cwd: 'node_modules',
            isFile: true
          },
        ],
      },
    },
    uglify: {
      dist: {
        options: {
          compress: true,
          mangle: true,
          preserveComments: false,
          sourceMap: true
        },

        files: {
          "dist/js/module.min.js": ["dist/js/module.js"]
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/style.min.css': ['dist/css/style.css']
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('build', ['copy', 'sass', 'browserify', 'htmlmin', 'uglify', 'cssmin']);
  grunt.registerTask('default', ['build', 'browserSync', 'watch']);
};
