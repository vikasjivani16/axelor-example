import Sidebar from "./components/Sidebar";
import styles from "./components/Layout.module.css";
import int_styles from "./introduction.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      {/* Content Area */}
      <div className={styles.content}>
          <h1 className={int_styles.header}> <b>Overview </b></h1>
          <p>Welcom to learn Axelor real time example...</p>
          

              <pre className={int_styles.pre}>
                <code className={int_styles.code}>
                
                  &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; standalone=&quot;yes&quot;?&gt; <br/>
                  &lt;object-views xmlns=&quot;http://axelor.com/xml/ns/object-views&quot;<br/>
                    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;<br/>
                    xsi:schemaLocation=&quot;http://axelor.com/xml/ns/object-views<br/>
                    https://axelor.com/xml/ns/object-views/object-views_7.2.xsd&quot;&gt;<br/>

                    &lt;!-- views definitions here --&gt;<br/>

                  &lt;/object-views&gt;<br/>
                  
                </code>
              </pre>
        
      </div>
      <div className={styles.sidebar2}>
        qq
        </div>
    </div>
  );
}
