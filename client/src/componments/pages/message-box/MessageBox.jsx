import { Alert } from 'react-bootstrap';

import React from 'react';

const MessageBox = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md">
          <Alert
            variant={props.variant || 'info'}
            style={{
              marginTop: '50px',
              textAlign: 'center',
              // marginLeft: '500px',
              width: '300px',
            }}
          >
            {props.children}
          </Alert>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default MessageBox;
