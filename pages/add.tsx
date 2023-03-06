import { useState } from 'react';

export default function Add() {
  const [albumCover, setAlbumCover] = useState('');
  const [albumName, setAlbumName] = useState('');
  const [albumYear, setAlbumYear] = useState('');
  const [favoriteSong, setFavoriteSong] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(albumCover, albumName, albumYear, favoriteSong);
    // You can submit the form data to your backend API here
  };

  const handleAlbumCoverChange = (event) => {
    setAlbumCover(event.target.value);
  };

  const handleAlbumNameChange = (event) => {
    setAlbumName(event.target.value);
  };

  const handleAlbumYearChange = (event) => {
    setAlbumYear(event.target.value);
  };

  const handleFavoriteSongChange = (event) => {
    setFavoriteSong(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Album Cover:
          <input type="text" value={albumCover} onChange={handleAlbumCoverChange} />
        </label>
      </div>
      <div>
        <label>
          Album Name:
          <input type="text" value={albumName} onChange={handleAlbumNameChange} />
        </label>
      </div>
      <div>
        <label>
          Year Album Was Made:
          <input type="text" value={albumYear} onChange={handleAlbumYearChange} />
        </label>
      </div>
      <div>
        <label>
          Favorite Song on the Album:
          <input type="text" value={favoriteSong} onChange={handleFavoriteSongChange} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
