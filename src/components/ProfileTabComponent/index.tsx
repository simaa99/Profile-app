import React, { useState } from "react";
import ActivityContentComponent from "./ActivityContentComponent";
import ProfileContentComponent from "./ProfileContentComponent";
import FriendsContentComponent from "./FriendsContentComponent/index.tsx";
import GroupsContentComponent from "./GroupsContentComponent/index.tsx";
import ForumsContentComponent from "./ForumsContentComponent";
import MediaContentComponent from "./MediaContentComponent/index.tsx";
import "./style.css"
interface Tab {
  title: string;
  content: React.ReactNode;
}

const TabsComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabs: Tab[] = [
    { title: "Activity", content: <ActivityContentComponent /> },
    { title: "Profile", content: <ProfileContentComponent/> },
    { title: "Friends", content: <FriendsContentComponent /> },
    { title: "Groups", content: <GroupsContentComponent/> },
    { title: "Forums", content: <ForumsContentComponent/> },
    { title: "Media", content: <MediaContentComponent/> },

  ];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tabs-container">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabsComponent;
