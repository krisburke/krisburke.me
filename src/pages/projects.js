import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import SiteLayout from '../components/SiteLayout/SiteLayout';
import { projects } from '../components/Project/projects';
import ProjectListItem from '../components/Project/ProjectListItem';
import typographyStyles from '../common/styles/typography.css';

class ProjectPage extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');

        return (
            <SiteLayout location={this.props.location} title={siteTitle}>
                <h1 className={typographyStyles.pageHeading}>PROJECTS</h1>
                <main>
                    {projects.map(project => (
                        <ProjectListItem project={project} />
                    ))}
                </main>
            </SiteLayout>
        );
    }
}

export default ProjectPage;

export const pageQuery = graphql`
    {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
