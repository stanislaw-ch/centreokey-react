import classes from './App.module.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Posts from "./components/MainPage/Posts/Posts";
import News from "./components/MainPage/News/News";
import {posts} from "./Moks/posts";
import {news} from "./Moks/news";
import {menuItems} from "./Moks/menu";

function App() {
  return (
    <div className={classes.container}>
        <Header menuItems={menuItems} />
        <main>
          <h1 className={classes.visuallyHidden}>Центр 'Окей' - психолого - развивающий центр</h1>
          <div className={classes.pageMainWrapper}>
            <Posts posts={posts} />
            <News news={news}/>
          </div>
        </main>
        <Footer />
    </div>
  );
}

export default App;
