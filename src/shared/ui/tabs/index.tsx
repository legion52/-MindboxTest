import React from 'react';
import styles from './tabs.module.css';

interface TabsProps {
  tabs: ('All' | 'Active' | 'Completed')[];
  onTabClick: (tab: 'All' | 'Active' | 'Completed') => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, onTabClick }) => {
  const [activeTab, setActiveTab] = React.useState<'All' | 'Active' | 'Completed'>('All');

  const handleTabClick = (tab: 'All' | 'Active' | 'Completed') => {
    setActiveTab(tab);
    onTabClick(tab);
  };

  return (
    <div className={styles.tabsContainer}>
      {tabs.map(tab => (
        <div
          key={tab}
          className={`${styles.tab} ${tab === activeTab ? styles.active : ''}`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
