import React, { Component } from 'react';
import { Link } from 'gatsby';
import { formatPostDate } from '../../utils/helpers';
import get from 'lodash/get';
import styles from './BlogPostHeading.module.css';
import * as PropTypes from 'prop-types';

export default class BlogPostHeading extends Component {
    constructor(props) {
        super(props);

        this.renderTitle = this.renderTitle.bind(this);
    }

    renderTitle(title, slug) {
        return slug ? (
            <Link className={styles.titleLink} to={slug}>
                {title}
            </Link>
        ) : (
            title
        );
    }

    render() {
        const { post } = this.props;
        const title = get(post, 'frontmatter.title');
        const slug = get(post, 'fields.slug');
        const date = formatPostDate(get(post, 'frontmatter.date'));
        const timeToRead = get(post, 'timeToRead');

        return (
            <header className={styles.header}>
                <div
                    className={styles.linkBlock}
                    onClick={() => {
                        if (slug) {
                            location.href = slug;
                        }
                    }}
                >
                    <h1 className={styles.title}>
                        {this.renderTitle(title, slug)}
                    </h1>
                    <p className={styles.subtitle}>
                        <span className={styles.date}>{date}</span>|
                        <span
                            className={styles.timeToRead}
                        >{`${timeToRead} min read`}</span>
                    </p>
                </div>
                {this.props.children}
            </header>
        );
    }
}

BlogPostHeading.propTypes = {
    title: PropTypes.any,
    date: PropTypes.any,
    timeToRead: PropTypes.any,
    slug: PropTypes.any,
    postTags: PropTypes.any,
};
