import React from 'react';
import styles from './BlogPostTagSection.module.css';
import Tag from '../Tag/Tag';

export default function BlogPostTagSection({
    tags,
    currentTags,
    handleUpdateTags,
}) {
    return (
        <div className={styles.tagSection}>
            {tags.map(tag => {
                const isActive = currentTags.map(tg => tg.id).includes(tag.id);

                return (
                    <div
                        key={tag.id}
                        onClick={() => {
                            handleUpdateTags(tag.id);
                        }}
                    >
                        <Tag
                            text={tag.text}
                            color={tag.color}
                            isInactive={!isActive}
                        />
                    </div>
                );
            })}
        </div>
    );
}
