import styles from "../components/Layout.module.css";
import Sidebar from "../components/Sidebar";
import int_styles from "../introduction.module.css";


  const Installation = () => {
  
    return (
      <div className={styles.container}>
        {/* Sidebar */}
        <Sidebar />
        {/* Content Area */}
        <div className={styles.content}>
      
        <h1 className={int_styles.header}> <b>Setup guide</b></h1>
        <p>Depending on the intended use case, there are multiple ways to install Axelor.
          For developers of the Axelor community alike, 
          the preferred way is to perform a source install (running Axelor from the source code).</p>
        
          <br/>
          <h1 className={int_styles.header2}> <b>Required Software</b></h1>
          
          <ol className={int_styles.ol}>
            <li className={int_styles.li}>1. Java 11</li>
            <li className={int_styles.li}>2. Postgres 13.0 or above version</li>
            <li className={int_styles.li}>3. Tomcat 9.0</li>
          </ol>

          <br/>
          <h1 className={int_styles.header2}> <b>Step 1: Codebase Setup</b></h1>
          
          <p>Clone root axelor repository from Github. </p>
          <pre className={int_styles.pre}>
            <code className={int_styles.code}>
              $  git clone https://github.com/axelor/open-suite-webapp.git         
            </code>
          </pre>

          <br/>
          <p><b>Note:</b> Re-name folder <b>&quot;open-suite-webapp&quot;</b> to <b>&quot;axelor-erp&quot;</b>.</p>
          
          <p>Change directory to <b>&quot;axelor-erp/module/axelor-open-suite&quot;.</b></p>
          <pre className={int_styles.pre}>
            <code className={int_styles.code}>
              $  cd axelor-erp/module/axelor-open-suite           
            </code>
          </pre>


          <br/>
          <p>Clone module repository from Github.</p>
          <pre className={int_styles.pre}>
            <code className={int_styles.code}>
              $  git clone https://github.com/axelor/axelor-open-suite.git           
            </code>
          </pre>

          <br/>
          <p><b>Note:</b> Follow below steps for re-location module derectory.</p>

          <p>Project structure look like <b>&quot;axelor-erp/module/axelor-open-suite/axelor-open-suite/*&quot;</b> </p>
          <p>Change like <b>&quot;axelor-erp/module/axelor-open-suite/*&quot;</b>. delete one sub-folder <b>&quot;axelor-open-suite&quot;</b></p>


          <br/>
          <h1 className={int_styles.header2}> <b>Step 2: Create Database & Link with Project</b></h1>

          <p>Postgres SQL used in this project for setup database.</p>
          <p>Open configuration file <b>&quot;axelor-erp/src/main/resources/axelor-config.properties&quot;</b>.</p>
          <pre className={int_styles.pre}>
            <code className={int_styles.code}>
            db.default.driver = org.postgresql.Driver <br/>
            db.default.ddl = update <br/>
            db.default.url = jdbc:postgresql://localhost:5432/<b>axelor_bd</b> <br/>
            db.default.user = <b>postgres</b> <br/>
            db.default.password = <b>password</b> <br/>    
            </code>
          </pre>

          <br/>
          <h1 className={int_styles.header2}> <b>For Linux</b></h1>
          <p>Open terminal from root folder <b>&quot;axelor-erp&quot;</b> and build the project (It will take around 5-10 min for first time)</p>
          <pre className={int_styles.pre}>
            <code className={int_styles.code}>
            $ ./gradlew clean classes build -x test cleanEclipse eclipse
            </code>
          </pre>
          <p>Start server</p>
          <pre className={int_styles.pre}>
            <code className={int_styles.code}>
            $ ./gradlew --no-daemon run
            </code>
          </pre>

          <br/>
          <h1 className={int_styles.header2}> <b>For Windows</b></h1>
          <p>Open terminal from root folder <b>&quot;axelor-erp&quot;</b> and build the project (It will take around 5-10 min for first time)</p>
          <pre className={int_styles.pre}>
            <code className={int_styles.code}>
            $ gradlew.bat clean classes build -x test cleanEclipse eclipse
            </code>
          </pre>
          <p>Start server</p>
          <pre className={int_styles.pre}>
            <code className={int_styles.code}>
            $ gradlew.bat --no-daemon run
            </code>
          </pre>

        </div>


        <div className={styles.sidebar2}>

        </div>

      </div>
    );
  };
export default Installation;
