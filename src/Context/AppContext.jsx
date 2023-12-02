import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  async function fetchBlogPost(page = 1) {
    const url = `${baseUrl}?page=${page}`;
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchBlogPost(page);
  }

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPost,
    handlePageChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
