import Tabs from './components/Tabs';
import SideBar from './components/SideBar';
import { TabsProvider } from './context/tabsContext';

export default function Home() {
  	return (
		<TabsProvider>
			<main className="flex flex-col items-center justify-center md:flex-row">
				<SideBar />
				<Tabs />
			</main>
		</TabsProvider>
  	);
}