import React from 'react';
import { Container } from './styled';
import Favorite from '../../assets/icons/heart-red.svg';
import Hand from '../../assets/icons/hand.svg';
import ImagePlayer from '../../assets/images/player.png';
import colorInches from '../../utils/colorInches';
import { IPlayer } from '../../entities/Player';

const CardPlayer: React.FC<IPlayer> = ({ first_name, h_in, h_meters, last_name, num = -1, index = -1 }) => (
  <Container data-testid="card-container" image={ImagePlayer} colorInches={colorInches(+h_in)} index={index}>
    <div className="image">
      <div className="header">
        <div>
          <span>Height {h_in}, in inches.</span>
        </div>
        <img
          src={Favorite}
          alt='Favorite...'
        />
      </div>
    </div>
    <div className="textos">
      <h2 className="titulo">{first_name}</h2>
		  <p className="description">{last_name}</p>
    </div>
    <div className="line" />
    <div className="footer">
      <div>
        <img
          src={Hand}
          alt='Palyer...'
        />
        <span>Height {h_meters}, in meters.</span>
      </div>
      <div>
        <span>{num !== -1 && (`inches + num entered = ${num}`)}</span>
      </div>
    </div>
  </Container>
);

export default CardPlayer;
