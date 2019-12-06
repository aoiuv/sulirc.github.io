import React from 'react';
import DraftCanvas from './container/DraftCanvas/index';

interface IDraftContainer {}

export default class DraftContainer extends React.Component {
  constructor(props: IDraftContainer) {
    super(props);
  }

  render() {
    return (
      <div className="suri__draft-container">
        <DraftCanvas />
      </div>
    );
  }
}
