define(['react'],function(React){
	var baseData = [
		{id:1,content: "text1"},
		{id:2,content: "text2"}
	]

	var TodoListView = new React.createClass({
		render: function(){
			var liHtml = ``;
			this.props.data.map(function(item){
				liHtml += `<li id=${item.id}>${item.content}</li>`;
			})
			return (React.createElement("ul", {dangerouslySetInnerHTML: {__html:liHtml}}));
		}
	});

	var InputView = new React.createClass({
		search: function(){
			var searchText = this.refs.inputText.value;
		},
		render: function(){
			return (React.createElement("div", null, 
				React.createElement("input", {ref: "inputText", value: this.props.text}), 
				React.createElement("button", {onClick:  this.search}, "点我呀点我呀")
				)
				)
		}
	});
	var TodoWrapView = new React.createClass({
		getInitialState: function(){
			var initState = {
				searchText : "",
				baseData : [
					{id:1,content: "text1"},
					{id:2,content: "text2"}
				]
			}
			return initState
		},
		setState:function(){
			
		},
		render: function(){
			return (
				React.createElement("div", null, 
					React.createElement(InputView, {text: this.state.searchText}), 
					React.createElement(TodoListView, {data: this.state.baseData})
				)
				);
		}
	});

	React.render(React.createElement(TodoWrapView, null),document.getElementById("content_wrap"))
});