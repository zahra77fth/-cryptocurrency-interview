import React from 'react';
import styles from './loading.module.css';

const Loading: React.FC = () => {
    return (
        <div className={styles.overlay}>
            <div className={styles.spinner}>
                <div className={styles.spinnerInner}></div>
            </div>
            <p className={styles.loadingText}>در حال بارگذاری دیتا ...</p>
        </div>
    );
};

export default Loading;
