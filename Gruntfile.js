module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
       	pkg: grunt.file.readJSON('package.json'),
		gitclone: {
			target: {
			  options: {
				// Target-specific options go here.
				repository:'https://github.com/amanmukhtar/new_repo.git',
				branch:'master',
				directory: 'new_git_repo'
			  }
			}
  		},
		gitcheckout: {
			target: {
				options: {
					branch: 'dev',
                	create: true
				}
			}
		},
		gitadd: {
			task: {
			  options: {
				force: true
			  },
			  files: {
				src: ['*']
			  }
			}
		 },
		 gitcommit: {
			target: {
			  options: {
				// Target-specific options go here.
				message: 'commit for testing grunt'
			  },
			  files: {
				  // Specify the files you want to commit
				  src: ['*']
			  }
			}
		  },
		
    });
    // These plugins provide necessary tasks
	grunt.loadNpmTasks('grunt-git');
    // Default task
    grunt.registerTask('default', ['gitadd','gitcommit']);
	grunt.registerTask('clone', ['gitclone']);
	grunt.registerTask('checkout', ['gitcheckout']);
};

