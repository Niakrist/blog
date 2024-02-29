import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PagePost from "./components/main/screens/page-post/PagePost";
import Home from "./components/main/screens/page-home/Home";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Contact from "./components/main/screens/page-contact/Contact";
import About from "./components/main/screens/page-about/About";

function App() {
  const [posts, setPosts] = useState("");
  const [curentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsloading] = useState(true);

  const itemsOnPage = 4;
  const quantityPages = Math.ceil(posts.length / itemsOnPage);
  const getNumbersPages = () => {
    const numberPages = [];
    for (let i = 0; i < quantityPages; i++) {
      numberPages.push(i + 1);
    }
    return numberPages;
  };

  const numberPages = getNumbersPages();
  useEffect(() => {
    const getFetch = async () => {
      setIsloading(true);
      const respons = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await respons.json();
      setPosts(data);
    };
    getFetch();
    setIsloading(false);
  }, [isLoading]);

  const handleChangePage = (numberPage) => {
    setCurrentPage(numberPage);
  };

  const getItemsOnPage = (curentPage, itemsOnPage, posts) => {
    const startIndex = curentPage - 1;
    return [...posts].splice(startIndex * itemsOnPage, itemsOnPage);
  };

  const cropPosts = getItemsOnPage(curentPage, itemsOnPage, posts);

  return (
    <>
      <Header />
      <main className="main">
        {isLoading ? (
          <div
            style={{
              textAlign: "center",
              fontSize: "30px",
              fontWeight: 600,
              color: "red",
              marginTop: "50px",
            }}>
            Загрузка
          </div>
        ) : (
          ""
        )}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts">
            <PagePost
              cropPosts={cropPosts}
              handleChangePage={handleChangePage}
              numberPages={numberPages}
              curentPage={curentPage}
            />
          </Route>
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;