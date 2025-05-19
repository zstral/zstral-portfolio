'use client';
import { useContext } from 'react';
import { TabsContext } from '../context/tabsContext';
import { tabs } from '../config/tabsConfig';
import FadeInOut from './animations/FadeInOut';
import Tilteffect from './animations/Tilt';

const Tabs = () => {

	const { activeTab } = useContext(TabsContext);

	return (
		<div className='tabs'>
			<FadeInOut>
				<Tilteffect>
					<div className='glass-container'>
						{tabs[activeTab].content}
					</div>
				</Tilteffect>
			</FadeInOut>
		</div>
	);
};

export default Tabs;