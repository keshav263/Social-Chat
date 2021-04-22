import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import "./firebase/firebase";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import AuthReducer from "./store/reducers/Auth";
import ReduxThunk from "redux-thunk";
function App() {
	const rootReducer = combineReducers({
		Auth: AuthReducer,
	});

	const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
