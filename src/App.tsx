import './Global.css'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/Navbar/Navbar'
import Container from "react-bootstrap/Container";

function App() {
	return (
		<>
			<Navbar />
			<Container className='mt-3'>
				<AppRouter />
			</Container>
		</>
	)
}

export default App
