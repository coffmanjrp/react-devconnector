import {
  GET_POSTS,
  DELETE_POST,
  POST_ERROR,
  UPDATE_LIKES,
} from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

export default function post(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.post.filer((post) => post._id !== payload),
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
        loading: false,
      };
    default:
      return state;
  }
}
