import {Route, Routes, Navigate} from "react-router-dom";
import Layout from "./components/Common/hocs/Layout/Layout";
import Posts from "./components/MainPage/Posts/Posts";
import News from "./components/MainPage/News/News";
import {posts} from "./Moks/posts";
import {news} from "./Moks/news";
import {menuItems} from "./Moks/menu";
import MainPage from "./components/Common/hocs/MainPage/MainPage";

function App() {
  return (
    <Layout>
        <Routes>
            {menuItems.map((menuItem, index) => {
                return (
                    <Route path={`/pageId_${index}`} element={
                        <MainPage>
                            <Posts posts={posts} pageId={index}/>
                            <News news={news}/>
                        </MainPage>
                    } key={index}/>
                )
            })}
            <Route path="*" element={<Navigate to="/pageId_0" />} />
        </Routes>
    </Layout>
  );
}

export default App;
