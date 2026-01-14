import { useState } from "react";
import PageLayout from "../layouts/PageLayout.jsx";
import PostEditor from "../components/PostEditor.jsx";
import { getAuthToken } from "../utils/auth.js";

export default function Home() {
  const token = getAuthToken(); 
  const handleAddPost = (newTwit) => {
    console.log("Yeni tweet eklendi:", newTwit);
  };

  return (
    <PageLayout>
            {token && <PostEditor addPost={handleAddPost} />}
    </PageLayout>
  );
}