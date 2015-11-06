requirejs.config({
	paths: {
		"$": "../bower_components/jquery/dist/jquery",
		"React": "../bower_components/react/react",
		"ReactDOM": "../bower_components/react-dom/react-dom",
		"JSX": "../bower_components/requirejs-react-jsx/jsx",
		"text": "../bower_components/requirejs-text/text"
	}
});

// 自己写的略low的路由
function renderToContent() {
	var hash = window.location.hash;
	hash = hash.substr(1);
	require(["js/" + hash + "-view"]);
}

window.addEventListener("hashchange", function(obj) {
	$("#content_wrap").innerHTML = "";
	renderToContent();
});

renderToContent();