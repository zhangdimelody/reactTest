define(['react'],function(React){

	var data = [
		{ text : "首页", val : 1},
		{ text : "频道", val : 2},
		{ text : "音乐", val : 3}
	];
	var state = 2;

	var TabView = React.createClass({
		getInitialState: function(){
			// this.data = [
			// 	{ text : "首页", val : 1},
			// 	{ text : "频道", val : 2},
			// 	{ text : "音乐", val : 3}
			// ];
			// this.state = 2;
		},
		render : function(){
			var listHtml = "";
			this.data.map(function(item){
				var selectOrNot = item.val == this.state ? "selected" : "";
				listHtml = listHtml + "<li onclick='clickThis' class="+ selectOrNot +">"+item.text+"</li>";
			}.bind(this));
	        
			return (<p>333<RouteHandler /></p>);
		},
		clickThis:function(e){
			console.log(e)
		}
	});

	// React.render(<Tab data={data} state={state} />
	// 	,document.getElementById("content_wrap"));

});