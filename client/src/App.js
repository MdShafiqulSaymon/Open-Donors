import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import CompleteReg from "./pages/CompleteReg";
import Services from "./pages/Services";
import Home from "./pages/Home";
import { UserProvider, UserContext } from "./Contexts/UserContext";
import EditUser from "./pages/EditUser";
import "./App.css";
function App() {
	return (
		<>
			<Router>
				<UserProvider>
					<Routes>
						<Route path="/signin" Component={SignInPage} />
						<Route path="/signup" Component={SignUpPage} />
						<Route path="/" Component={Home} />
						<Route path="/completereg" Component={CompleteReg} />
						<Route path="/services" Component={Services} />
						<Route path="/edituser" Component={EditUser} />
					</Routes>
				</UserProvider>
			</Router>
		</>
	);
}

export default App;
