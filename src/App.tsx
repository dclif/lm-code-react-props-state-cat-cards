import './App.css';
import { useState } from 'react'
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Cat from './data/cat';
import CatCard from './components/cat_card';
import CatData from './components/CatData'

function App() {
	const [cats, setCats] = useState<Array<Cat>>(CatData)
	const catCount = cats.length;
		 
	return (
		<>
			<Navbar />
			<Header catCount={catCount} />

			<main>
				<div className='cards__wrapper'>
				{cats.map((cat, index) => (
						<CatCard
							key={cat.id}
							name={cat.name}
							species={cat.species}
							favFoods={cat.favFoods}
							birthYear={cat.birthYear}
							catIndex={index}
						/>
					))}
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
