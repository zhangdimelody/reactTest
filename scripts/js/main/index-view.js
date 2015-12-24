define([ "$","react","JSX" ]
,function($,React,JSX ){
	
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
			var CommentNodes = this.props.data.map(function(item,key){
				return (
					React.createElement(Comment, {key: key, author: item.author, age: item.age})
					)
			});

			return (
				React.createElement("div", {className: "commentList"}, CommentNodes)
				);
		}
	});

	React.render(
		React.createElement(CommentList, {data:  commentListData }),
		document.getElementById("content_wrap")
	);

});