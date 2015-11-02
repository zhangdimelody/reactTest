requirejs.config({
	// baseUrl : 'scripts/lib/',
	paths : {
		"React" : "../bower_components/react/react",
		// "JSX" : "scripts/lib/JSXTransformer",
		"JSX": "../bower_components/requirejs-react-jsx/jsx",
    	"text": "../bower_components/requirejs-text/text"
	}
});


require(["js/main-content"]);

