import React, {Component} from 'react';
import T from 'prop-types';
import c from 'classnames';

class TabItem extends Component {
  render() {
    const {index, href, onClick, className, ...props} = this.props;
    const ctx = this.context.tabs;

    return (
      <a className={c(className, { [ctx.activeClassName]: ctx.view === this.props.index })}
        role="button"
        href="#"
        onClick={this.switch}
        {...props} />
    );
  }

  switch = () => {
    this.context.tabs.switch(this.props.index);
    this.props.onClick && this.props.onClick();
  }
}

TabItem.propTypes = {
  index: T.number.isRequired
}

TabItem.contextTypes = {
  tabs: T.object
}

export default TabItem;
