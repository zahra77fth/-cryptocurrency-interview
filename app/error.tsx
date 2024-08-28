'use client';

import React from 'react';
import styles from './error.module.css';

const ErrorPage: React.FC = () => {
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.errorContainer}>
                <div className={styles.errorIcon}>⚠️</div>
                <h1 className={styles.errorTitle}>Something Went Wrong</h1>
                <p className={styles.errorMessage}>We encountered an unexpected issue. Please try again later.</p>
                <button className={styles.refreshButton} onClick={handleRefresh}>Refresh</button>
            </div>
        </div>
    );
};

export default ErrorPage;
