import './App.css';
import { useState } from 'react'
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Cat from './data/cat';
import Card from './components/cat_card';
import CatData from './components/CatData';
import DogData from './data/dog-data';
import Dog from './data/dog'
import Form from './components/Form'

function App() {
	const [cats, setCats] = useState<Array<Cat>>(CatData)
	const catCount = cats.length;
	const [dogs, setDogs] = useState<Array<Dog>>(DogData)
	const dogCount = dogs.length;

	return (
		<>
			<Navbar />
			<Header catCount={catCount} dogCount={dogCount} />

			<main>

				<div className='cards__wrapper'>
					{cats.map((cat, index) => (
						<Card
							key={cat.id}
							name={cat.name}
							species={cat.species}
							favFoods={cat.favFoods}
							birthYear={cat.birthYear}
							index={index}
						/>
					))}
					{dogs.map((dog, index) => (
						<Card
							key={dog.id}
							name={dog.name}
							species={dog.species}
							favFoods={dog.favFoods}
							birthYear={dog.birthYear}
							index={index + catCount}
						/>
					))}



				</div>

				<Form setDogs={setDogs} />

			</main>


			<Footer />

		</>
	);
}

export default App;

