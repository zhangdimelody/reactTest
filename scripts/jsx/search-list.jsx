define(["React","ReactDOM","JSX"]
	,function(React,ReactDOM,JSX){

	var ProductCategoryRow = React.createClass({
		render : function(){
			return (<p>{ this.props.category }</p>);
		}
	});

	var ProductRow = React.createClass({
		render : function(){
			var name = this.props.product.stocked ?
				this.props.product.name : 
				<span style={{ color:"red" }}>
					{this.props.product.name}
				</span>;

			return (<li>{name}{" "}{this.props.product.price}</li>)
		}
	});

	var ProductUl = React.createClass({
		render : function(){
			var rows = [];
			var lastCategory = null;

			this.props.products.map(function(product){
				if(product.name.indexOf(this.props.filterText) === -1  // 查找不到此商品
					|| (!product.stocked && this.props.inStockOnly)) // 此商品没有库存 且 筛选只显示有库存商品
				{
					return;
				}
				if(product.category !== lastCategory){   // 当类别不是null时
					rows.push(<ProductCategoryRow category={product.category} 
						key={product.category} />);
				}
				rows.push(<ProductRow product={product} key={product.name} />);
				lastCategory = product.category;
			}.bind(this));

			return (<ul>{rows}</ul>);
		}
	});

	var SearchBar = React.createClass({
		handleChange : function(){
			this.props.onUserInput(
				this.refs.filterTextInput.value,  // this.refs 调用render返回的组件实例
				this.refs.inStockOnlyInput.checked // this.refs.inStockOnlyInput.getDOMNode() 直接获取组件DOM节点
			);
		},
		render : function(){
			return (
				<div>
					<p><input type="text" placeholder="Search..." 
						value={this.props.filterText} 
						ref="filterTextInput"
						onChange={this.handleChange} />
					</p>
					<p><input type="checkbox" checked={this.props.inStockOnly}
						ref="inStockOnlyInput"
						onChange={this.handleChange} />
						{" Only show products in stock"}</p>
				</div>
			);
		}
	});

	var FilterableProductUl = React.createClass({
		getInitialState : function(){
			return {
				filterText : '',
				inStockOnly : false
			};
		},
		handleUserInput : function(filterText, inStockOnly){
			this.setState({
				filterText : filterText,
				inStockOnly : inStockOnly
			});
		},
		render : function(){
			return (
				<div>
					<SearchBar filterText={this.state.filterText}
						inStockOnly={this.state.inStockOnly}
						onUserInput={this.handleUserInput} />

					<ProductUl products={this.props.products} 
						filterText={this.state.filterText}
						inStockOnly={this.state.inStockOnly}/>
				</div>
				);
		}
	});

	var PRODUCTS = [
		{category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
		{category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
		{category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
		{category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
		{category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
		{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
	];

	React.render(
		<FilterableProductUl products={PRODUCTS} />,
		document.getElementById('content_wrap')
	);

});




