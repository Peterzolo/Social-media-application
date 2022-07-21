import React from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';

import "../spinner/Spinner.css"

const Spinner = () => {
  return (
    <MDBSpinner role="status" className="spinner-spinner">
      <span className="visually-hidden">Loading...</span>
    </MDBSpinner>
  );
};

export default Spinner;
