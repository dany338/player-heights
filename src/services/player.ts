import { BACKEND_URL } from '../constants/backend';
import Player from '../entities/Player';
import { getRandomInt } from '../utils/randomInt';

export const getPalyers = (): Promise<Player[] | unknown> => new Promise( async (resolve, reject) => {
  try {
    const response = await fetch(BACKEND_URL);
    if (response.status === 200) {
      const data = await response.json();
      const newPlayers = data.values.map((player: Player) => {
        const id: number | bigint = getRandomInt();
        return new Player(player, id);
      });
      resolve(newPlayers);
    }
  } catch (error) {
    reject(error);
  }
});