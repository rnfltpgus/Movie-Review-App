import GlobalStyles from "./GlobalStyles";
import Layout from "../components/Layout";
import ReviewPage from "../pages/ReviewPage";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <ReviewPage />
      </Layout>
    </>
  );
};

export default App;
