import React from 'react';
import PropTypes from 'prop-types';
// import './card-form.scss';

const defaultState = {
  title: '',
};

export default class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
  }


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    const { card } = this.props;
    const buttonText = card ? 'Update Card' : 'Create Card';
    const formText = card ? `Update ${card.content} Card` : 'Create Card';
    return (
      <form
        className="card-form"
        data-cy="card-form"
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="content">{formText}</label>
        <input
          type="text"
          name="content"
          placeholder="Enter New Card Content"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
        type="number"
        min="0"
        name="cost"
        placeholder="cost"
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
