import Layout from "../src/components/Layout/Layout";
import {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";

function App({Component, pageProps}){ //root component rendered by Next.js
  useEffect(() => { // this enables javascript features
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return( 
    <Layout>
      <Component {...pageProps}/>
    </Layout>
    )
}
export default App;