import React, { useState } from 'react';
import styled from 'styled-components';

const Tabs = ({ children }) => {
  const firstTab = children[0].props.label;
  const [activeTab, setActiveTab] = useState(firstTab);

  const renderTabs = () =>
    children.map(tab => {
      const { label } = tab.props;
      const isActive = activeTab === label;
      return (
        <TabListItem label={label} onClick={() => setActiveTab(label)} isActive={isActive}>
          {label}
        </TabListItem>
      );
    });

  return (
    <TabsContainer>
      <TabList>{renderTabs()}</TabList>
    </TabsContainer>
  );
};
export default Tabs;

const TabsContainer = styled.div``;

const TabList = styled.ul`
  border-bottom: 1px solid var(--primary);
  padding-left: 0;
`;

const TabListItem = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 1rem 1.25rem;
  transition: border 200ms ease-in-out;
  ${({ isActive }) =>
    isActive &&
    `background-color: white;
    border: solid var(--primary);
    border-width: 1px 1px 0 1px;
  `}
`;
