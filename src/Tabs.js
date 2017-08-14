import React, {Component} from 'react';
import T from 'prop-types';

class Tabs extends Component {
  state = {
    view: 0
  }

  getChildContext() {
    return {
      tabs: {
        view: this.state.view,
        switch: this.switch,
        activeClassName: this.props.activeClassName
      }
    }
  }

  render() {
    return this.props.children;
  }

  switch = (index) => {
    this.setState({ view: index });
  }
}

Tabs.defaultProps = {
  activeClassName: 'active'
}

Tabs.propTypes = {
  activeClassName: T.string
}

Tabs.childContextTypes = {
  tabs: T.object
}

export default Tabs;