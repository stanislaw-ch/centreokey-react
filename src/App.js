import Layout from "./components/Common/hoc/Layout/Layout";
import Posts from "./components/MainPage/Posts/Posts";
import News from "./components/MainPage/News/News";
import {posts} from "./Moks/posts";
import {news} from "./Moks/news";

function App() {
  return (
    <Layout>
        <Posts posts={posts} />
        <News news={news}/>
    </Layout>
  );
}

export default App;
