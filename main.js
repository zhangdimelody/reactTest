requirejs.config({
	paths: {
		"$": "bower_components/jquery/dist/jquery",
		"react": "bower_components/react/react",
		"reactDOM": "bower_components/react-dom/react-dom",
		"reactRouter": "bower_components/react-router/build/umd/ReactRouter.min",
		"JSX": "bower_components/requirejs-react-jsx/jsx"
	}
});


// require(['scripts/js/route']);

require(['scripts/js/b-route']);

