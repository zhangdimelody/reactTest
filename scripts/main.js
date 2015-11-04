requirejs.config({
	paths : {
		"$" : "../bower_components/jquery/dist/jquery",
		"React" : "../bower_components/react/react",
		"ReactDOM" : "../bower_components/react-dom/react-dom",
		"JSX": "../bower_components/requirejs-react-jsx/jsx",
    	"text": "../bower_components/requirejs-text/text"
	}
});


// require(["js/main-content"]);
require(["js/search-list"]);

