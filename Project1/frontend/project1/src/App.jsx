import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Feed from "./pages/feed";
import CreatePost from "./pages/createpost";

const App = () => {



  return (

    <div>
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>

  )
}

export default App