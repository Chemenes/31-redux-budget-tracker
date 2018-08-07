import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category';
import './category.scss';
import * as cardActions from '../../action/card';

// const mapStateToProps = store => ({
//   cards: store.cards,
// });


class Category extends React.Component {
  render() {
    const {
      // cards,
      // cardCreate,
      category,
      key,
      categoryRemove,
      categoryUpdate,
    } = this.props;

    // const categoryCards = cards[category.id];
    return (
      <div className="category" key={key}>
        <h1> {category.title} </h1>
        <button onClick={() => categoryRemove(category)}> Delete </button>
        <CategoryForm category={category} onComplete={categoryUpdate} />
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object,
  key: PropTypes.number,
  cards: PropTypes.object,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    cardCreate: data => dispatch(cardActions.createCard(data)),
    categoryRemove: data => dispatch(categoryActions.remove(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

// Redux's connect method takes in a first argument that we're not utilizing yet so it's null
// The second arg is the mapDispatchToProps function we defined above
// connect RETURNS a new function that expects a React component
// and this is how we hook up this component to the Redux store
export default connect(null, mapDispatchToProps)(Category);

// ..
