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
			return (<ul dangerouslySetInnerHTML={{__html:liHtml}}></ul>);
		}
	});

	var InputView = new React.createClass({
		search: function(){
			var searchText = this.refs.inputText.value;
		},
		render: function(){
			return (<div>
				<input  ref="inputText" value={this.props.text}/>
				<button onClick={ this.search } >点我呀点我呀</button>
				</div>
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
				<div>
					<InputView text={this.state.searchText} />
					<TodoListView  data={this.state.baseData}/>
				</div>
				);
		}
	});

	React.render(<TodoWrapView />,document.getElementById("content_wrap"))
});