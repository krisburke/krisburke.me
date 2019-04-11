import React from 'react';
import { Link } from 'gatsby';

class BlogLayout extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <header>
                        <h3>
                            <Link to={'/'}>{this.props.title}</Link>
                        </h3>
                    </header>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default BlogLayout;
