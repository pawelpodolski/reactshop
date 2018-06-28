import React from 'react';
import CategoryGrid from "./CategoryGrid";
import CategoryDetails from "./CategoryDetails";
import { Route } from "react-router-dom";

class CategoryLayout extends React.Component {
    categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
    category = {
        "id": "agd",
        "productIds": ["item1000", "item1001", "item1002"]
    };

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={() => <CategoryGrid categories={this.categories}/>}/>
                <Route
                    path="/category/:id"
                    render={() => <CategoryDetails category={this.category}/>}
                />
            </React.Fragment>
        );
    }
}

export default CategoryLayout;
