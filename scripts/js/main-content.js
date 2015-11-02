define([ "React","JSX" ]
,function(React,JSX){
	// debugger;
	// console.log("111")
	React.render(
		React.createElement("h1", null, "hi222"),
		document.getElementById("content_wrap")
	);
});