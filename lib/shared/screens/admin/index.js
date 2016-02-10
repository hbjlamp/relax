import 'styles/normalize.less';
import 'styles/nucleo/index.less';

import React, {PropTypes} from 'react';
import {Component} from 'relax-framework';

import Admin from './components/admin';

export default class AdminContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render () {
    return (
      <Admin {...this.props}>
        {this.props.children}
      </Admin>
    );
  }
}