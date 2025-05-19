"use client";
import { createContext, useState } from "react";
import { tabs } from "../config/tabsConfig";

const TabsContext = createContext();

const TabsProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabsContext.Provider value={{ tabs, activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export { TabsProvider, TabsContext };
