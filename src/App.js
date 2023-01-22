import { Container } from 'react-bootstrap';

import FavoriteContatiner from './components/favorite/FavoriteContainer';
import Search from './components/search/Search';

function App() {
  return (
    <Container>
      <FavoriteContatiner />
      <Search />
    </Container>
  );
}

export default App;
