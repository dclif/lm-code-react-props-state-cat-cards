import React, { useState } from "react";
import Dog from '../data/dog';
import DogData from '../data/dog-data';
import { v4 as uuidv4 } from 'uuid';
import './Form.css'

const defaultValues = {
  name: "",
  species: "",
  favFoods: [],
  birthYear: 2022,
  id: "",
};

interface FormProps {
  setDogs: React.Dispatch<React.SetStateAction<Dog[]>>;
}

const Form: React.FC<FormProps> = ({ setDogs }) => {
  const [inputs, setInputs] = useState<Dog>(defaultValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputs(values => ({ ...values, [name]: value }))
  }


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    DogData.push(inputs)
    DogData[DogData.length - 1].id = uuidv4()
    setDogs([...DogData])
    setInputs(defaultValues)

  }


  return (
    <div className="form-container" >
      <form onSubmit={handleSubmit}>

        <label>Enter animal name:
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label>Enter species:
          <input
            type="text"
            name="species"
            value={inputs.species}
            onChange={handleChange}
          />
        </label>
        <label>Enter their favourite foods:
          <input
            type="text"
            name="favFoods"
            value={inputs.favFoods}
            onChange={handleChange}
          />
        </label>
        <label>Enter the year of birth:
          <input
            type="number"
            name="birthYear"
            value={inputs.birthYear}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  )
}


export default Form

