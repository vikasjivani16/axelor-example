import styles from "../components/Layout.module.css";
import Sidebar from "../components/Sidebar";

  const Installation = () => {
  
    return (
      <div className={styles.container}>
        {/* Sidebar */}
        <Sidebar />
        {/* Content Area */}
        <div className={styles.content}>
      
            <p>Domain Page</p>
          
        </div>
      </div>
    );
  };
export default Installation;
