import { combineReducers } from "redux";
import { linksReducer } from "./linksReducer";
import { pageReducer } from "./pageReducer";

export default combineReducers({
  links: linksReducer,
  epubPage: pageReducer,
});
