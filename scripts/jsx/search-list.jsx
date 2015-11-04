define(["React","ReactDOM","JSX"]
	,function(React,ReactDOM,JSX){

	var ProductCategoryRow = React.createClass({
		render : function(){
			return (<li>{ this.props.category }</li>);
		}
	});

	var ProductRow = React.createClass({
		render : function(){
			var name = this.props.product.stocked ?
				this.props.product.name : 
				<span>
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
				if(product.category !== lastCategory){
					rows.push(<ProductCategoryRow category={product.category} 
						key={product.category} />);
				}
				rows.push(<ProductRow product={product} key={product.name} />);
				lastCategory = product.category;
			});
			return (<ul>{rows}</ul>);
		}
	});

	var SearchBar = React.createClass({
		render : function(){
			return (
				<div>
				<p><input type="text" placeholder="Search..." /></p>
				<p><input type="checkbox" />{" Only show products in stock"}</p>
				</div>
			);
		}
	});

	var FilterableProductUl = React.createClass({
		render : function(){
			return (
				<div>
					<SearchBar />
					<ProductUl products={this.props.products} />
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




