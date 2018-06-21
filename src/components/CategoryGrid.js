import React from 'react';
import CategoryItem from "./CategoryItem";

class CategoryGrid extends React.Component {
    state = {
        categories: [],
    };

    componentDidMount() {
        fetch('http://localhost:3001/categories')
            .then(response => response.json())
            .then(json => this.setState({ categories: json.ids }));
    }

    handleClick() {
        alert('Clicked me!');
    }

    render() {
        return (
            <div className="category-grid">
                {this.state.categories.map(
                    category => <CategoryItem key={category} name={category} handleClick={this.handleClick} />
                )}
            </div>
        );
    }
}

export default CategoryGrid;
