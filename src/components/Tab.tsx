// src/components/Tab.tsx
import React, { useState } from "react";

interface TabProps {
  tabs: { label: string; content: React.ReactNode }[];
}

const Tab: React.FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              index === activeTab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } flex-1 py-2 px-4 ${index === 0 ? "rounded-l-lg" : ""} ${
              index === tabs.length - 1 ? "rounded-r-lg" : ""
            } focus:outline-none`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="bg-white p-4 rounded-b-lg">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tab;
