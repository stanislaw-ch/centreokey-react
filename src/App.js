import {Route, Routes, Navigate} from "react-router-dom";
import Layout from "./components/Common/hocs/Layout/Layout";
import Posts from "./components/MainPage/Posts/Posts";
import Post from "./components/MainPage/Posts/Post/Post";
import React from "react";
import {menuItems, news, posts} from "./Moks";


function App() {
    return (
    <Layout>
        <Routes>
            {menuItems.map((menuItem, index) => {
                return (
                    <React.Fragment key={index}>
                        <Route
                            path={`/page_${index}`}
                            element={
                                <Posts posts={posts} pageId={index}/>
                            }
                        />
                        <Route path={`/page_${index}/article/:postId`} element={<Post posts={posts} />} />
                    </React.Fragment>
                )
            })}

            <Route path="/" element={<Navigate to="/page_0" />} />
            <Route path={`/news/:postId`} element={<Post posts={news} />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Layout>
  );
}

export default App;
