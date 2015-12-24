define(['react'],function(React){

		function renderToContent() {
			var hash = location.hash.split("?")[0].split("#")[1];
			if(location.hash == ""){
				hash = "login"; 
				location.href = location.href + "#login";
			}
			var contentView = require(["scripts/js/"+ hash +"/index-view"]);

			React.render(<contentView />,document.getElementById("content_wrap"));
		}
		renderToContent();

		window.addEventListener("hashchange", function(){
			renderToContent();
		},false);
	
});