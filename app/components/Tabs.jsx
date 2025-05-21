'use client';
import { useContext } from 'react';
import { TabsContext } from '../context/tabsContext';
import { tabs } from '../config/tabsConfig';
import FadeInOut from './animations/FadeInOut';
import Tilteffect from './animations/Tilt';

const Tabs = () => {

	const { activeTab } = useContext(TabsContext);

	return (
		<div className="h-screen w-screen items-center justify-center
						md:flex md:flex-row">
			<FadeInOut>
				<Tilteffect>
					<div className="grid grid-cols-1 grid-rows-[auto_auto_1fr] justify-center items-center
									p-3 gap-8 min-h-[100vh] w-[100vw] bg-[#000000dc] backdrop-blur-[5px]
									md:grid-cols-2 md:gap-4 md:p-8 md:min-h-[85vh] md:w-[82vw] md:rounded-lg
									md:backdrop-blur-[10px] md:shadow-[0_0_30px_10px_rgba(54,54,54,0.63)]"
					>
						{tabs[activeTab].content}
					</div>
				</Tilteffect>
			</FadeInOut>
		</div>
	);
};

export default Tabs;