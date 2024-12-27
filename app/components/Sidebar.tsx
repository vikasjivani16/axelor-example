import styles from "./Layout.module.css";
import Link from "next/link";


type SidebarItem = {
  id: number;
  name: string;
  content: string;
  link: string;
};

const Sidebar = () => {

  // Sample data
  const sidebarItems: SidebarItem[] = [
    { id: 1, name: "Introduction", content: "Introduction", link:"/"},
    { id: 2, name: "Setup Codebase", content: "setup", link:"/installation"},
    { id: 3, name: "Create Domain", content: "domain", link:"/domain" },
    { id: 4, name: "Create View", content: "View", link:"/view" },
    { id: 5, name: "Create Manu", content: "Menu", link:"/manu" },
    { id: 6, name: "Build & Run", content: "Menu", link:"/run" },
  ];

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        {sidebarItems.map((item) => (
          <Link
            key={item.id}
            className={styles['sidebar-link']}
            href={item.link}
          >
             {item.name}
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
