import usePlayer from '../../hooks/usePlayer';
import Players from '../../components/Players';
import { Container } from './styled';

const PlayersView = () => {
  const [
    query,
    playersFiltered,
    isLoading,
    onChangeQuery,
    onSearchByNum,
  ] = usePlayer();

  return (
    <Container>
      <Players
        loading={isLoading}
        data={playersFiltered}
        query={query}
        onChangeQuery={onChangeQuery}
        onSearchByNum={onSearchByNum}
      />
    </Container>
  );
};

export default PlayersView;
