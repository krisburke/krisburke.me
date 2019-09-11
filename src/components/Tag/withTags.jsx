import React from 'react';
import styles from './Tag.module.css';
import Tag from './Tag';
import { tags } from '../../data/tags';

export function withTags(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                tags,
            };

            this.getTagByTagId = this.getTagByTagId.bind(this);
            this.getTags = this.getTags.bind(this);
        }

        getTagByTagId(tagId) {
            return this.state.tags.find(tag => tag.id === tagId);
        }

        getTags() {
            const { postTags } = this.props;
            return postTags.map(tag => this.getTagByTagId(tag));
        }

        render() {
            const tags = this.getTags();
            console.log('tags', tags);

            return (
                <WrappedComponent {...this.props}>
                    <div className={styles.withTagsContainer}>
                        {tags.map(tag => {
                            return (
                                <span
                                    className={styles.withTagsItem}
                                    key={tag.id}
                                >
                                    <Tag text={tag.text} color={tag.color} />
                                </span>
                            );
                        })}
                    </div>
                </WrappedComponent>
            );
        }
    };
}
