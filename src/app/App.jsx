import GlobalStyles from "./GlobalStyles";
import Layout from "../components/Layout";
import ReviewHistory from "../components/ReviewHistory";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <ReviewHistory />
      </Layout>
    </>
  );
};

export default App;
