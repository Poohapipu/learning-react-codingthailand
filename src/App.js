import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePages from "./page/HomePages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Form } from "react-bootstrap";
import AboutPages from "./page/AboutPages";
import ProductPage from "./page/ProductPage";
import Detailpage from "./page/Detailpage";
import HospitalPage from "./page/hospital/HospitalPage";
import { QueryClient, QueryClientProvider } from "react-query";
import IndexPage from "./page/category/IndexPage";
import CreatePage from "./page/category/CreatePage";
import EditPage from "./page/category/EditPage";
import UploadFilePage from "./page/UploadFilePage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePages />
          </Route>
          <Route path="/about">
            <AboutPages />
          </Route>
          <Route path="/Product">
            <ProductPage />
          </Route>
          <Route path="/Detail/:id/title/:title">
            <Detailpage />
          </Route>
          <Route path="/hospital">
            <HospitalPage />
          </Route>
          <Route path="/upload">
            <UploadFilePage />
          </Route>
          <Route
            path="/category"
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/`} exact>
                  <IndexPage />
                </Route>
                <Route path={`${url}/create`}>
                  <CreatePage />
                </Route>
                <Route path={`${url}/edit/:id`}>
                  <EditPage />
                </Route>
              </>
            )}
          ></Route>
        </Switch>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
