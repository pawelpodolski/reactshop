import React from 'react';
import CategoryGrid from "./CategoryGrid";
import CategoryDetails from "./CategoryDetails";

class CategoryLayout extends React.Component {
    categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
    category = {
        "id": "agd",
        "productIds": ["item1000", "item1001", "item1002"]
    };

    render() {
        return (
            <React.Fragment>
                <CategoryGrid categories={this.categories}/>
                <CategoryDetails category={this.category}/>
            </React.Fragment>
        );
    }
}

export default CategoryLayout;
