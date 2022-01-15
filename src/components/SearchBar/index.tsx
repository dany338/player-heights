import React from 'react';
import {
  Container,
  Wrapper,
  SearchBox,
} from './styled';
import SearchIcon from '../../assets/icons/search.svg';
import { ISearchBarProps } from '../../entities/Player';

const SearchBar: React.FC<ISearchBarProps> = ({ onSearchByNum, placeholder, value = '', onChangeQuery, count }) => (
  <Container data-testid="searchbar-container">
    <Wrapper>
      <SearchBox>
        <img
          src={SearchIcon}
          alt='Search...'
        />
        <input type="text" placeholder={ placeholder } value={value} onChange={e => onChangeQuery(e.target.value)} />
        <div>
          <span>{count} results</span>
        </div>
        <button onClick={() => onSearchByNum()}>
          <span>Search</span>
        </button>
      </SearchBox>
    </Wrapper>
  </Container>
)

export default SearchBar;
