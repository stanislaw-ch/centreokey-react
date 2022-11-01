import {Route, Routes, Navigate} from "react-router-dom";
import Layout from "./components/Common/hocs/Layout/Layout";
import Posts from "./components/MainPage/Posts/Posts";
import Post from "./components/MainPage/Posts/Post/Post";
import React from "react";
import {about, news, posts} from "./Moks";

function App() {
    return (
    <Layout>
        <Routes>
            <Route path="/main" element={<Posts posts={posts} pageId={'main'}/>} />
            <Route path="/main/:postId" element={<Post posts={posts}/>} />

            <Route path="/comprehensive_education" element={<Posts posts={posts} pageId={'comprehensive_education'}/>} />
            <Route path="/comprehensive_education/:postId" element={<Post posts={posts}/>} />

            <Route path="/english_for_everyone" element={<Posts posts={posts} pageId={'english_for_everyone'}/>} />
            <Route path="/english_for_everyone/:postId" element={<Post posts={posts}/>} />

            <Route path="/art_studio" element={<Posts posts={posts} pageId={'art_studio'}/>} />
            <Route path="/art_studio/:postId" element={<Post posts={posts}/>} />

            <Route path="/about_us" element={<Post posts={about} />} />

            <Route path={`/news/:postId`} element={<Post posts={news} />} />
            <Route path="*" element={<Navigate to="/main" />} />
        </Routes>
    </Layout>
  );
}

export default App;
