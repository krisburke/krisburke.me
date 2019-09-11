import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import get from 'lodash/get';
import SiteLayout from '../components/SiteLayout/SiteLayout';

// FIXME: pull from markdown file
const AboutMarkdown = `
Hey, I'm Kris. I'm currently working as as a Full-Stack JavaScript Developer at [Apollidon]().

I enjoy all things technology, videography, and music.
For a closer look at the professional work I’ve done, 
check out my resume. If you’re interested in reaching out to me, 
feel free to email me.

## Around the Web

* Email: [kris.burke611@gmail.com](mailto:kris.burke611@gmail.com)
* Github: [krisburke](http://github.com/krisburke)
`;

class AboutPage extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');

        return (
            <SiteLayout location={this.props.location} title={siteTitle}>
                <main>
                    <h1 className="pageHeading">ABOUT</h1>
                    <ReactMarkdown
                        className="markdown"
                        source={AboutMarkdown}
                    />
                </main>
            </SiteLayout>
        );
    }
}

export default AboutPage;

export const pageQuery = graphql`
    {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;
