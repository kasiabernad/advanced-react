import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import requireAuth from './requireAuth';

class Feature extends Component {
  render() {
    return (
      <div>
        This is a feature
      </div>
    )
  }
}

export default requireAuth(Feature)
