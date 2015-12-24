define(['react','$'],function(React,$){
	var Login = React.createClass({
		focusInput: function(){
			var name = this.refs.name.value;
			var password = this.refs.password.value;

			alert(name +"/"+ password)
		},
		render: function(){
			return (<div className="Login login_wrap">
						<input type="text" ref="name" /><br/>
						<input type="password" ref="password" /><br/>
						<a href="javascript:void(0)"  onClick={this.focusInput} >登陆</a>
				</div>);
		}
	})
	React.render(<Login/>,document.getElementById('content_wrap'));
});