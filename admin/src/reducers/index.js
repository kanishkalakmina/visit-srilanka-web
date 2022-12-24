import { combineReducers } from "redux";
import posts from './posts'
import wposts from "./wposts";

export default combineReducers({ posts,wposts })
