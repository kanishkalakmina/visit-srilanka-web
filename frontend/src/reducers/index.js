import { combineReducers } from "redux";
import posts from './postfconnection'
import wposts from './postwconnection'

export default combineReducers({ posts, wposts })