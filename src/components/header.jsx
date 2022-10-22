import React from 'react';
import troll from '../assets/troll-face.png';

export default function header() {
  return (
    <header className="header">
      <img src={troll} alt="troll face" className="header__logo" />
      <h2 className="header__title">Meme Generator</h2>
      <h4 className="header__project">React course - project 3</h4>
    </header>
  );
}
