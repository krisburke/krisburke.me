import React from 'react';
import { Link } from 'gatsby';

class Layout extends React.Component {
  renderHeader() {
    const { location, title } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    if (location.pathname === rootPath) {
      return (
        <h1>
          <Link to={'/'}>
            {title}
          </Link>
        </h1>
      );
    } else {
      return (
        <h3>
          <Link to={'/'}>
            {title}
          </Link>
        </h3>
      );
    }
  }
  render() {
    const { children } = this.props;

    return (
      <div>
        <div>
          <header>
            {this.renderHeader()}
          </header>
          {children}
        </div>
      </div>
    );
  }
}

const styles = {
  blogIndex: {

  },
  blogPost: {

  },
};

export default Layout;
