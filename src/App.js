import {Route, Routes, Navigate} from "react-router-dom";
import Layout from "./components/Common/hocs/Layout/Layout";
import Posts from "./components/MainPage/Posts/Posts";
import News from "./components/MainPage/News/News";
import {posts} from "./Moks/posts";
import {news} from "./Moks/news";
import MainPage from "./components/Common/hocs/MainPage/MainPage";

function App() {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={
                <MainPage>
                    <Posts posts={posts} />
                    <News news={news}/>
                </MainPage>
            } />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Layout>
  );
}

export default App;
