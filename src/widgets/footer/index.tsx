import React from 'react';
import style from './footer.module.css';
import Tabs from '../../shared/ui/tabs';
import TextButton from '../../shared/ui/text-button';

interface FooterProps {
    count: number;
    filter: 'All' | 'Active' | 'Completed';
    onFilterChange: (filter: 'All' | 'Active' | 'Completed') => void;
    onClearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({ count, filter, onFilterChange, onClearCompleted }) => {
    return (
        <div className={style.footerContainer}>
            <div className={style.buttonBar}>
                <span className={style.countText}>{count} items left</span>
                <Tabs tabs={['All', 'Active', 'Completed']} onTabClick={onFilterChange} />
                <TextButton onClick={onClearCompleted} >
                    Clear completed
                </TextButton>
            </div>
        </div>
    );
};

export default Footer;
