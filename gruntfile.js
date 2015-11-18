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
		}
	});
	grunt.registerTask('default',['react','watch']);
	grunt.loadNpmTasks('grunt-react');	
	grunt.loadNpmTasks('grunt-contrib-watch');	
}
