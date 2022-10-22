import React from 'react';

export default function meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  function handleChange(e) {
    setMeme((prevMeme) => ({
      ...prevMeme,
      [e.target.name]: e.target.value,
    }));
  }

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemes(data));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.data.memes.length);
    const randomURL = allMemes.data.memes[randomNumber].url;
    console.log(allMemes);

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: randomURL,
    }));
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="top text"
          className="form__input"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="bottom text"
          className="form__input"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        />
        <button onClick={getMemeImage} className="btn--gen-meme">
          Get a new meme image 🍱
        </button>
      </div>
      <div className="form__image">
        <img src={meme.randomImage} alt="meme image" />
        <h2 className="meme-text top-meme">{meme.topText}</h2>
        <h2 className="meme-text bottom-meme">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
