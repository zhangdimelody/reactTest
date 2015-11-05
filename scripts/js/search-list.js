define(["React","ReactDOM","JSX"]
	,function(React,ReactDOM,JSX){

	var ProductCategoryRow = React.createClass({displayName: "ProductCategoryRow",
		render : function(){
			return (React.createElement("p", null,  this.props.category));
		}
	});

	var ProductRow = React.createClass({displayName: "ProductRow",
		render : function(){
			var name = this.props.product.stocked ?
				this.props.product.name : 
				React.createElement("span", {style: { color:"red"}}, 
					this.props.product.name
				);

			return (React.createElement("li", null, name, " ", this.props.product.price))
		}
	});

	var ProductUl = React.createClass({displayName: "ProductUl",
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
					rows.push(React.createElement(ProductCategoryRow, {category: product.category, 
						key: product.category}));
				}
				rows.push(React.createElement(ProductRow, {product: product, key: product.name}));
				lastCategory = product.category;
			}.bind(this));

			return (React.createElement("ul", null, rows));
		}
	});

	var SearchBar = React.createClass({displayName: "SearchBar",
		handleChange : function(){
			this.props.onUserInput(
				this.refs.filterTextInput.value,  // this.refs 调用render返回的组件实例
				this.refs.inStockOnlyInput.checked // this.refs.inStockOnlyInput.getDOMNode() 直接获取组件DOM节点
			);
		},
		render : function(){
			return (
				React.createElement("div", null, 
					React.createElement("p", null, React.createElement("input", {type: "text", placeholder: "Search...", 
						value: this.props.filterText, 
						ref: "filterTextInput", 
						onChange: this.handleChange})
					), 
					React.createElement("p", null, React.createElement("input", {type: "checkbox", checked: this.props.inStockOnly, 
						ref: "inStockOnlyInput", 
						onChange: this.handleChange}), 
						" Only show products in stock")
				)
			);
		}
	});

	var FilterableProductUl = React.createClass({displayName: "FilterableProductUl",
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
				React.createElement("div", null, 
					React.createElement(SearchBar, {filterText: this.state.filterText, 
						inStockOnly: this.state.inStockOnly, 
						onUserInput: this.handleUserInput}), 

					React.createElement(ProductUl, {products: this.props.products, 
						filterText: this.state.filterText, 
						inStockOnly: this.state.inStockOnly})
				)
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
		React.createElement(FilterableProductUl, {products: PRODUCTS}),
		document.getElementById('content_wrap')
	);

});




