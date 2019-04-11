import React from 'react';
import HomeLayout from '../components/HomeLayout';

class NotFoundPage extends React.Component {
    render() {
        return (
            <HomeLayout location={this.props.location}>
                <main>
                    <h1>Not Found</h1>
                </main>
            </HomeLayout>
        );
    }
}

export default NotFoundPage;
