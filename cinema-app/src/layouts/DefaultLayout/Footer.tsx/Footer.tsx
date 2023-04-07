import React, { useState } from 'react';
import styles from './Footer.module.scss';

interface Button {
  label: string;
  onClick: () => void;
}

interface FooterProps {
  buttons: Button[];
}

const Footer: React.FC<FooterProps> = ({ buttons }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.buttonList}>
        {buttons.map((button, index) => (
          <button key={index} onClick={button.onClick}>
            {button.label}
          </button>
        ))}
      </div>
      <button className={styles.expandButton} onClick={toggleExpanded}>
        {isExpanded ? 'Hide' : 'Show'} More
      </button>
      {isExpanded && (
        <div className={styles.expandedContent}>
          <p>Additional content goes here.</p>
        </div>
      )}
    </footer>
  );
};

export default Footer;
