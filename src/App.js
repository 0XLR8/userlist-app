import AddUser from "./components/AddUser";
import { UserProvider } from "./context/UserContext";
import UserList from "./components/UserList";
import { AlertProvider } from "./context/AlertContext";
import Alert from "./components/Alert";

const App = () => {
	
	return(
		<UserProvider>
			<AlertProvider>
				<div>
					<AddUser />
					<UserList />
					<Alert />
				</div>
			</AlertProvider>
		</UserProvider>
	)
}

export default App;