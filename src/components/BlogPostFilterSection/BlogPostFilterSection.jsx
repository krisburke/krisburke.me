import React from 'react';
import styles from './BlogPostFilterSection.module.css';
import Tag from '../Tag/Tag';
import Card from '../Card/Card';

// TODO: make responsive on mobile

export default function({
    tags,
    currentTags,
    handleUpdateTags,
    searchTerm,
    handleUpdateSearchTerm,
    postCount,
}) {
    // FIXME: this card should be styled to match the card behind blog posts
    return (
        <div className={styles.container}>
            <Card>
                <div className={styles.inner}>
                    <h1 className={styles.heading}>WRITING</h1>
                    <div className={styles.tagSection}>
                        {tags.map(tag => {
                            const isActive = currentTags
                                .map(tg => tg.id)
                                .includes(tag.id);

                            return (
                                <div
                                    className={styles.tag}
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
                    <div className={styles.search}>
                        <input
                            className={`input ${styles.input}`}
                            type="text"
                            name="searchTerm"
                            value={searchTerm}
                            placeholder="Type here to filter posts..."
                            onChange={handleUpdateSearchTerm}
                        />
                        <div className={styles.count}>
                            <h3>{postCount}</h3>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
