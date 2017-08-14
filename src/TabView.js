import React, {Component} from 'react';
import T from 'prop-types';

class TabView extends Component {
  render() {
    const {index, ...props} = this.props;

    return this.context.tabs.view === this.props.index
      ? <div {...props} />
      : <div />;
  }
}

TabView.contextTypes = {
  tabs: T.object
}

export default TabView;