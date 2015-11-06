requirejs.config({
	paths : {
		"$" : "../bower_components/jquery/dist/jquery",
		"React" : "../bower_components/react/react",
		"ReactDOM" : "../bower_components/react-dom/react-dom",
		"JSX": "../bower_components/requirejs-react-jsx/jsx",
    	"text": "../bower_components/requirejs-text/text"
	}
});

// 自己写的略low的路由
var hash = window.location.hash;
hash = hash.substr(1);
require(["js/"+ hash +"-view"]);
// 监听的并没有什么卵用
window.addEventListener("hashchange",function(hash){
	console.log(hash)
});
