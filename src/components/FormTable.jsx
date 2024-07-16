import React, { Component } from 'react';

class FormTable extends Component {
  render() {
    const { formData, onBack, onConfirm } = this.props;

    return (
      <div>
        <div className='d-flex justify-content-between'>
          <button type='button' className='btn btn-primary' onClick={onBack}>
            Back
          </button>
          <button
            type='button'
            className='btn btn-success ml-2'
            onClick={() => onConfirm(formData)}
          >
            Save
          </button>
        </div>

        <table className='table'>
          <tbody>
            {Object.entries(formData).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

FormTable.defaultProps = {
  formData: {},
  onBack: () => {},
  onConfirm: () => {},
};

export default FormTable;
