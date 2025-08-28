import { createContext, useReducer } from "react";
import { blogReducer, initialState } from "./reducers/blogReducer";

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  const value = { state, dispatch };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
export default BlogProvider;