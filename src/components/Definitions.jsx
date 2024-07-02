import React, { Component } from 'react';

class Definitions extends Component {
  renderDefinitions() {
    const { data } = this.props;
    return data.map((el) => (
      <React.Fragment key={el.id}>
        <dt>{el.dt}</dt>
        <dd>{el.dd}</dd>
      </React.Fragment>
    ));
  }
  render() {
    return <dl>{this.renderDefinitions()}</dl>;
  }
}

Definitions.defaultProps = {
  data: [],
};
export default Definitions;
