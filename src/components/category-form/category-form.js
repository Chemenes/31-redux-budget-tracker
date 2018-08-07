import React from 'react';
import PropTypes from 'prop-types';
// import './card-form.scss';

const defaultState = {
  title: '',
  cost: 0,
};

export default class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
  }


  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(this.state);
    
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    console.log('state', this.state);
    event.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    const { category } = this.props;
    console.log(this.props.category);
    
    const buttonText = category ? 'Update Category' : 'Create Category';
    const formText = category ? `Update ${this.props.category.title} Category` : 'Create Catergory';
    return (
      <form
        className="category-form"
        data-cy="category-form"
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="title">{formText}</label>
        <input
          type="text"
          name="title"
          placeholder="Enter New Card Content"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type="number"
          min="0"
          name="cost"
          placeholder="cost"
          value={this.state.cost}
          onChange={this.handleChange}
        />
        <button type="submit"> {buttonText} </button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
  card: PropTypes.object,
};
