import Home from '../components/home/index.jsx'
import SubMenu from '../containers/submenu/submenu.jsx'

import Test1 from '../components/test1.jsx'


export const TABS = [	
	{	
		title: "Home", 
		path: "/home", 
		componentContent: Home,
		componentSider: SubMenu,
		submenu: [] 
	},
	{	
		title: "Menu 1", 
		path: "/menu1", 
		componentContent: Home,
		componentSider: SubMenu,
		submenu: 
		[	
			{ title: "SubMenu 1", path: "/menu1/submenu1", componentContent: Home },
			{ title: "SubMenu 2", path: "/menu1/submenu2", componentContent: Test1 },
		] 
	}
];

