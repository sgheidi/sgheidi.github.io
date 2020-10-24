import React from 'react';
import MediaQuery from 'react-responsive'

export default function Test() {
  return (
    <div>
      <MediaQuery maxDeviceWidth={688}>
        <h1>688</h1>
      </MediaQuery>
      <MediaQuery minDeviceWidth={688} maxDeviceWidth={992}>
        <h1>992</h1>
      </MediaQuery>
    </div>
  );
}
