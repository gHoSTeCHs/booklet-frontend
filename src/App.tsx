import { Routes, Route, BrowserRouter as Router } from 'react-router';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/Home';
import HotelDetailPage from './pages/HotelDetailPage';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import SearchPage from './pages/SearchPage';
function App() {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<HomePage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/search"
						element={
							<ProtectedRoute>
								<SearchPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/hotel/:id"
						element={
							<ProtectedRoute>
								<HotelDetailPage />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</Router>
		</AuthProvider>
	);
}

export default App;
