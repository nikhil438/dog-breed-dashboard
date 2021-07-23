import './App.css';
import Routes from './Routes';
import DogBreeds from './master-data/DogBreeds'
import MetaData from './master-data/BreedsMeta'
import Users from './master-data/User'
import { getObject, setObject } from './DB/LocalStorage'
import { DOG_BREEDS, META_DATA, USER } from './Constants'

function App() {
  if (Object.keys(getObject(DOG_BREEDS)).length === 0) {
    setObject(DOG_BREEDS, DogBreeds)
  }
  if (Object.keys(getObject(USER)).length === 0) {
    setObject(USER, Users)
  }
  if (Object.keys(getObject(META_DATA)).length === 0) {
    setObject(META_DATA, MetaData)
  }
  return (
    <Routes />
  );
}

export default App;
