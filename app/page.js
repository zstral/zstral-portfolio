import Tabs from './components/Tabs';
import SideBar from './components/SideBar';
import { TabsProvider } from './context/tabsContext';

export default function Home() {
  	return (
		<TabsProvider>
			<main>
				<SideBar />
				<Tabs />
			</main>
		</TabsProvider>
  	);
}