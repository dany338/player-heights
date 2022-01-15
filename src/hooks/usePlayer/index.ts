/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { queryAtom, playersAtom, playersFilteredAtom } from '../../atoms/player';
import Player from '../../entities/Player';
import { getPalyers } from '../../services/player';
import { waitFor } from '../../utils/wait';

const usePlayer = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ query, setQuery ] = useAtom(queryAtom);
  const [ players, setPlayers ] = useAtom(playersAtom);
  const [ playersFiltered, setPlayersFiltered ] = useAtom(playersFilteredAtom);

  const onChangeQuery = (value: string) => {
    setQuery(value);
  };

  const onSearchByNum = async () => {
    setIsLoading(true);
    if (players.length > 0 && query !== '') {
      const newNum: number = +query;
      const filteredPlayers = players.map((player: Player) => new Player({...player}, player.id, newNum + Number(player.h_in)) ).sort((a: any, b: any) => a.num - b.num);
      console.log(filteredPlayers);
      setPlayersFiltered(filteredPlayers);
    } else if ( players.length > 0 && query === '') {
      setPlayersFiltered(players);
    }
    await waitFor(300);
    setIsLoading(false);
  };

  const fetchPlayers = async () => {
    setIsLoading(true);
    const response: Player[] | unknown = await getPalyers();
    if (response instanceof Array) {
      setPlayers(response);
      setPlayersFiltered(response);
    } else {
      console.log('response', response);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPlayers();
    return () => {
    }
  }, []);

  return [
    query,
    playersFiltered,
    isLoading,
    onChangeQuery,
    onSearchByNum,
  ];
}

export default usePlayer;