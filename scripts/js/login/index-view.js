define(['react','$'],function(React,$){
	var Login = React.createClass({displayName: "Login",
		focusInput: function(){
			var name = this.refs.name.value;
			var password = this.refs.password.value;

			alert(name +"/"+ password)
		},
		render: function(){
			return (React.createElement("div", {className: "Login login_wrap"}, 
						React.createElement("input", {type: "text", ref: "name"}), React.createElement("br", null), 
						React.createElement("input", {type: "password", ref: "password"}), React.createElement("br", null), 
						React.createElement("a", {href: "javascript:void(0)", onClick: this.focusInput}, "登陆")
				));
		}
	})
	React.render(React.createElement(Login, null),document.getElementById('content_wrap'));
});