import React from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  title: '',
  cost: 0,
};

export default class SectionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.section || defaultState;
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ title: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    console.log(this.props, 'WHAT IS THIS')
    const buttonText = this.props.section ? 'Update' : 'Create';
    return (
      <form
        onSubmit={this.handleSubmit}
        className="category-form"
      >
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type="number"
          min="0"
          placeholder="cost"
          value={this.state.cost}
          onChange={this.handleChange}
        />
        <button type="submit">{buttonText}</button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
};