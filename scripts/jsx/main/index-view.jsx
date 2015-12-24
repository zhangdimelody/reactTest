define([ "$","react","JSX" ]
,function($,React,JSX ){
	
	var commentListData = [
		{"author": "zd", "age": 18},
		{"author": "zd1", "age": 18}
	];

	var Comment = React.createClass({
		render : function(){
			return (
				<div className="comment">{ this.props.author } { this.props.age }</div>
				);
		}
	});

	var CommentList = React.createClass({
		render : function(){
			var CommentNodes = this.props.data.map(function(item,key){
				return (
					<Comment key={key} author={item.author} age={item.age}></Comment>
					)
			});

			return (
				<div className="commentList">{CommentNodes}</div>
				);
		}
	});

	React.render(
		<CommentList data={ commentListData }></CommentList>,
		document.getElementById("content_wrap")
	);

});