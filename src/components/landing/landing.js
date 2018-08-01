import React from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { connect } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import PropTypes from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';
import * as sectionActions from '../../action/section';
import SectionForm from '../section-form/section-form';
import Section from '../section/section';

class Landing extends React.Component {
  render() {
    const { sections, sectionCreate } = this.props;
    return (
      <div>
        <SectionForm onComplete={sectionCreate} />
        {
          sections.map((currentSection, i) => <Section section={currentSection} key={i} />)
        }
      </div>
    );
  }
}

Landing.propTypes = {
  sections: PropTypes.array,
  sectionCreate: PropTypes.func,
};

// This is us grabbing the Redux store to make those props of this component
const mapStateToProps = (store) => {
  return {
    sections: store,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sectionCreate: data => dispatch(sectionActions.create(data)),
    // dispatch({ type: 'SECTION_CREATE', payload: stuff})
  };
};

// this is currying, where we return another function with one argument from an outer function
// this would be what happens behind the scenes
// const middleFunction = connect(mapStateToProp,mapDispatchToProps);
// export default middleFunction(Landing);
export default connect(mapStateToProps, mapDispatchToProps)(Landing);