import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import styles from "./components/Layout.module.css";


export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      {/* Content Area */}
      <div className={styles.content}>
          <p>Welcom to learn Axelor real time example...</p>
      </div>
    </div>
  );
}
