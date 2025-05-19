'use client';
import { useContext } from "react";
import { TabsContext } from "../context/tabsContext";
import Button from "./Button";

const SideBar = () => {

	const { tabs, activeTab, setActiveTab } = useContext(TabsContext);
	
	return (
		<div className="sidebar">
			{tabs.map((tab, index) => (
				<Button
					key={tab.id}
					icon={tab.icon}
					text=""
					shape="rounded-full"
					bgcolor={activeTab === index ? 'bg-[#0300a1]' : 'bg-[#494949]'}
					hover="hover:bg-[#858585]"
					width="2.3rem"
					height="2.3rem"
					onClick={() => setActiveTab(index)}
				/>
			))}
		</div>
	);
};

export default SideBar;