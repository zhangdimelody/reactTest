define([ "$","React","ReactDOM","JSX" ]
,function( $,React,ReactDOM,JSX ){
	
	var commentListData = [
		{"author": "zd", "age": 18},
		{"author": "zd1", "age": 18}
	];

	var Comment = React.createClass({displayName: "Comment",
		render : function(){
			return (
				React.createElement("div", {className: "comment"},  this.props.author, " ",  this.props.age)
				);
		}
	});

	var CommentList = React.createClass({displayName: "CommentList",
		render : function(){
			var CommentNodes = this.props.data.map(function(item){
				return (
					React.createElement(Comment, {author: item.author, age: item.age})
					)
			});

			return (
				React.createElement("div", {className: "commentList"}, CommentNodes)
				);
		}
	});
// debugger
	React.render(
		React.createElement(CommentList, {data:  commentListData }),
		document.getElementById("content_wrap")
	);

});