'use client';
import { useContext } from "react";
import { TabsContext } from "../context/tabsContext";
import Button from "./Button";

const SideBar = () => {

	const { tabs, activeTab, setActiveTab } = useContext(TabsContext);
	
	return (
		<div className="fixed flex flex-row bottom-5 gap-8 p-3 px-8 z-[1]
		 				items-center justify-center backdrop-blur-[5px] rounded-[50px]
						overflow-hidden border border-[#6464645b] bg-[#424242a9]
						md:flex-col md:static md:p-4 md:py-8 md:ml-10 md:bg-[#2020208e]"
		>
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