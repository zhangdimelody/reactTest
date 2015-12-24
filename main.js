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



// 自己写的略low的路由
// function renderToContent() {
// 	var hash = window.location.hash;
// 	hash = hash.substr(1);
// 	if(hash == "") hash = "main";
// 	require(["js/" + hash + "-view"]);
// }

// window.addEventListener("hashchange", function(obj) {
// 	$("#content_wrap").innerHTML = "";
// 	renderToContent();
// });
// renderToContent();