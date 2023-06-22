import React, { useState } from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';

interface Button {
  label: string;
  url?: string;
}

interface FooterProps {
  buttons: Button[];
}

const Footer: React.FC<FooterProps> = ({ buttons }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  function handleClick(button: Button): void {
    if (button.url === 'mailto:Egoryusss@gmail.com') {
      window.location.href = button.url;
    } else {
      // handle other button clicks
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.buttonList}>
        {buttons.map((button, index) => (
          <button key={index} onClick={() => handleClick(button)}>
            {button.label}
          </button>
        ))}
      </div>
      {/* <button className={styles.expandButton} onClick={toggleExpanded}>
        {isExpanded ? 'Hide' : 'Show'} More
      </button>
      {isExpanded && (
        <div className={styles.expandedContent}>
          <p>Additional content goes here.</p>
        </div>
      )} */}
    </footer>
  );
};

export default Footer;
