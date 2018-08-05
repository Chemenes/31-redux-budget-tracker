
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category';
import CategoryForm from '../category-form/category-form';
import Category from '../category/category';

// This is us grabbing the Redux store to make those props of this component
const mapStateToProps = (store) => {
  return {
    categories: store.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
    
  };
};
class Landing extends React.Component {
  render() {
    const { categories, categoryCreate } = this.props;
    return (
      <div>
        <CategoryForm onComplete={categoryCreate} />
        {
          categories.map((currentCategory, i) => <Category ceategory={currentCategory} key={i} />)
        }
      </div>
    );
  }
}

Landing.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func,
};

// this is currying, where we return another function with one argument from an outer function
// this would be what happens behind the scenes
// const middleFunction = connect(mapStateToProp,mapDispatchToProps);
// export default middleFunction(Landing);
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
