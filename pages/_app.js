import Layout from "../src/components/Layout/Layout";

function App({Component, pageProps}){ //root component rendered by Next.js
  return( 
    <Layout>
      <Component {...pageProps}/>
    </Layout>
    )
}
export default App