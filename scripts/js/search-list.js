define(["React","ReactDOM","JSX"]
	,function(React,ReactDOM,JSX){

	var ProductCategoryRow = React.createClass({displayName: "ProductCategoryRow",
		render : function(){
			return (React.createElement("li", null,  this.props.category));
		}
	});

	var ProductRow = React.createClass({displayName: "ProductRow",
		render : function(){
			var name = this.props.product.stocked ?
				this.props.product.name : 
				React.createElement("span", null, 
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
				if(product.category !== lastCategory){
					rows.push(React.createElement(ProductCategoryRow, {category: product.category, 
						key: product.category}));
				}
				rows.push(React.createElement(ProductRow, {product: product, key: product.name}));
				lastCategory = product.category;
			});
			return (React.createElement("ul", null, rows));
		}
	});

	var SearchBar = React.createClass({displayName: "SearchBar",
		render : function(){
			return (
				React.createElement("div", null, 
				React.createElement("p", null, React.createElement("input", {type: "text", placeholder: "Search..."})), 
				React.createElement("p", null, React.createElement("input", {type: "checkbox"}), " Only show products in stock")
				)
			);
		}
	});

	var FilterableProductUl = React.createClass({displayName: "FilterableProductUl",
		render : function(){
			return (
				React.createElement("div", null, 
					React.createElement(SearchBar, null), 
					React.createElement(ProductUl, {products: this.props.products})
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




