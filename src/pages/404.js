import React from 'react';
import SiteLayout from '../components/SiteLayout/SiteLayout';

class NotFoundPage extends React.Component {
    render() {
        return (
            <SiteLayout location={this.props.location}>
                <main>
                    <h1>Not Found</h1>
                </main>
            </SiteLayout>
        );
    }
}

export default NotFoundPage;
