import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div>
                    <a
                        href="/rss.xml"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        rss
                    </a>
                </div>
                <a
                    href="https://mobile.twitter.com/_krisburke"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    twitter
                </a>{' '}
                &bull;{' '}
                <a
                    href="https://github.com/krisburke"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    github
                </a>{' '}
                &bull;{' '}
                <a
                    href="https://stackoverflow.com/users/5171478/kris-burke"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    stack overflow
                </a>
            </footer>
        );
    }
}

export default Footer;
