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
					branch: 'master',
                	create: false
				}
			}
		},
		gitadd: {
			task: {
			  options: {
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
		  gitpush: {
			your_target: {
			  options: {
				// Target-specific options go here.
			  }
			}
		  },
		
    });
    // These plugins provide necessary tasks
	grunt.loadNpmTasks('grunt-git');
    // Default task
    grunt.registerTask('default', ['gitadd','gitcommit','gitpush']);
	grunt.registerTask('clone', ['gitclone']);
	grunt.registerTask('checkout', ['gitcheckout']);
};

