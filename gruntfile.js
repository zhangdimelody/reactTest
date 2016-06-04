module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		watch:{
			react: {
				files : ['scripts/jsx/*.jsx','scripts/jsx/*/*.jsx'],
				tasks : 'react'
			}
		},
		react:{
			options:{
				banner: "react"
			},
			files:{
				expand: true,
				cwd: 'scripts/jsx/',
				src: ['*.jsx','*/*.jsx'],
				dest: 'scripts/js/',
				ext: '.js'
			}
		},
		connect:{
			server:{
				options:{
					hostname: 'localhost',
					port: 8008,
					base: '.',
					open: "http://localhost:8008"
				}
			}
		},
		babel:{
			options:{
				sourceMap: true,
				presets:['babel-preset-es2015']
			},
	        dist: {
	            files: {
	                'scripts/js/': ['scripts/jsx/*.babel','scripts/jsx/*/*.babel']
	            }
	        }
			// ,files:{
			// 	expand: true,
			// 	cwd: 'scripts/jsx/',
			// 	src: ['*.babel','*/*.babel'],
			// 	dest: 'scripts/js',
			// 	ext: '.js'
			// }
		}
	});
	grunt.registerTask('default',['connect','react','watch']);
	// grunt.registerTask('server',['connect','watch']);

	grunt.loadNpmTasks('load-grunt-tasks');	
	grunt.loadNpmTasks('grunt-react');	
	grunt.loadNpmTasks('grunt-contrib-watch');	
	grunt.loadNpmTasks('grunt-contrib-connect');	
}
