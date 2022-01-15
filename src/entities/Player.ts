export interface IPlayer {
  id: number | bigint;
  first_name: string;
  h_in: string;
  h_meters: string;
  last_name: string;
  num?: number;
  index?: number;
};

export interface ICardCoinContainerProps {
  colorInches: string;
  image: string;
  index: number;
};

export interface INotFoundProps {
  onChangeQuery: any | ((value: string, type: string) => void);
};

export interface ISearchBoxProps {
  width: string;
};

export interface ITextButtonProps {
  text: string;
  type: string | any;
  width: string;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
};

export interface IContainerNotFoundProps {
  image: string;
};

export interface ISearchBarProps {
  placeholder: string;
  value?: string;
  count: number;
  onChangeQuery: (value: any) => void;
  onSearchByNum: () => void;
};

export interface IMenuProps {
  open: boolean;
};

export interface IMenuItemLinkProps {
  active: string | boolean;
  onClick: (e: any) => void;
};

// !TYPES:
export type TLabelInchesColor = {
  primary: string;
  secundary: string;
  terciary: string;
};

class Player implements IPlayer {
  public num?: number;
  public id: number | bigint;
  public first_name: string;
  public h_in: string;
  public h_meters: string;
  public last_name: string;

  constructor(player: IPlayer, id?: number | bigint, num?: number) {
    this.num = num ?? -1;
    this.id = id ?? -1;
    this.first_name = player.first_name;
    this.h_in = player.h_in;
    this.h_meters = player.h_meters;
    this.last_name = player.last_name;
  }
}

export interface IPlayersProps {
  loading: boolean | unknown;
  data: Player[] | any;
  query: string | any;
  onSearchByNum: any | (() => void);
  onChangeQuery: any | ((value: string) => void);
};

export default Player;