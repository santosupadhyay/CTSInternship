export const initialState = {
  likes: [],
  comments: {},
};

export const blogReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_LIKE": {
      const isLiked = state.likes.includes(action.payload.blogId);
      return {
        ...state,
        likes: isLiked
          ? state.likes.filter((id) => id !== action.payload.blogId)
          : [...state.likes, action.payload.blogId],
      };
    }
    case 'ADD_COMMENT':{
        const { blogId, newComment } = action.payload;
        return {
            ...state,
            comments: {
                ...state,
                comments:{
                    ...state.comments,
                    [blogId]:[...(state.comments[blogId] || []), newComment]
                }
            }
        }
    }
    case 'DELETE_COMMENT':{
        const { blogId:blogIdToDelete, commentId } = action.payload;
        return {
            ...state,
            comments:{
                ...state.comments,
                [blogIdToDelete]: state.comments[blogIdToDelete].filter(comment => comment.id !== commentId)
            }
        }
    }
    default:
      return state;
  }
};
