import React, { lazy } from 'react';
import SearchBar from '../../components/SearchBar';
import {
  Container,
  Wrapper,
  ContainerBlog
} from './styled';
import Player, { IPlayersProps } from '../../entities/Player';

const CardPlayer = lazy(() => import('../CardPlayer'));
const NotFound = lazy(() => import('../NotFound'));

const Players: React.FC<IPlayersProps> = ({ loading, data, query, onChangeQuery, onSearchByNum }) => (
  <Container>
    <Wrapper>
      <SearchBar placeholder="Search" value={query} onChangeQuery={onChangeQuery} onSearchByNum={onSearchByNum} count={data.length} />
      {loading && <div>Loading...</div>}
      {data.length > 0 ? (
        <ContainerBlog>
          {data.map((player: Player) => (
            <CardPlayer key={`card-player-${player.id}`} {...player} />
          ))}
        </ContainerBlog>
      ) : (
        <NotFound onChangeQuery={onChangeQuery} />
      )}
    </Wrapper>
  </Container>
)

export default Players;
