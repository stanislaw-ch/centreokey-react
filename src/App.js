import classes from './App.module.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Posts from "./components/MainPage/Posts/Posts";
import News from "./components/MainPage/News/News";


function App() {
  return (
    <div className={classes.container}>
        <Header />
        <main>
          <h1 className={classes.visuallyHidden}>Центр 'Окей' - психолого - развивающий центр</h1>
          <div className={classes.pageMainWrapper}>
            <Posts />
            <News />
          </div>
        </main>
        <Footer />
    </div>
  );
}

export default App;
