import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import Jobs from './components/Jobs';
import Search from './components/Search';

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Header />
			<div className="container">
				<Search />
				<Jobs />
			</div>
		</div>
	);
}

export default App;
