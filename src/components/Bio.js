import React from 'react';
import profilePic from '../assets/profile-pic.jpg';

class Bio extends React.Component {
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                }}
            >
                <img
                    src={profilePic}
                    alt={`Kris Burke`}
                    style={{
                        marginBottom: 0,
                        borderRadius: '50%',
                        display: 'none',
                    }}
                />
                <p>
                    Personal blog by{' '}
                    <a href="https://mobile.twitter.com/_krisBurke">
                        Kris Burke
                    </a>
                    . I&nbsp;explain with words and code.
                </p>
            </div>
        );
    }
}

export default Bio;
