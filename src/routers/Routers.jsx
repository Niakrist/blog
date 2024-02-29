import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import About from '../components/main/screens/page-about/About';
import Contact from '../components/main/screens/page-contact/Contact';
import Home from '../components/main/screens/page-home/Home';
import PagePost from '../components/main/screens/page-post/PagePost';


const Routers = ({cropPosts, handleChangePage, numberPages, curentPage}) => {
  return (
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/posts" exact>
      <PagePost
        cropPosts={cropPosts}
        handleChangePage={handleChangePage}
        numberPages={numberPages}
        curentPage={curentPage}
      />
    </Route>
    {/* <Route to="/posts/:id" render={(props) => <PagePost props={props} />} /> */}
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
  </Switch>
  );
};
export default Routers;