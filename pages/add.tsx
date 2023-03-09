import { useState } from 'react';

export default function Add() {
  const [albumCover, setAlbumCover] = useState('');
  const [albumName, setAlbumName] = useState('');
  const [albumYear, setAlbumYear] = useState('');
  const [yourName, setYourName] = useState('');
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

  const handleYourNameChange = (event) => {
    setYourName(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-800">
      <div className="bg-green-200 rounded-md p-8 shadow-md">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label>
              Album Cover Image:
              <input type="text" value={albumCover} onChange={handleAlbumCoverChange} className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
            </label>
          </div>
          <div>
            <label>
              Album Name:
              <input type="text" value={albumName} onChange={handleAlbumNameChange} className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
            </label>
          </div>  
          <div>
            <label>
              Favorite Song on the Album:
              <input type="text" value={favoriteSong} onChange={handleFavoriteSongChange} className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
            </label>
          </div>
          <div>
            <label>
              Release Year:
              <input type="text" value={albumYear} onChange={handleAlbumYearChange} className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
            </label>
          </div>
          <div className="col-span-2">
          <label>
            Your Name: 
            <input type="text" value={yourName} onChange={handleYourNameChange} className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" /> 
          </label>
          </div>
        
          <div className="col-span-2">
            <button type="submit" className="w-full bg-purple-500 text-white py-2 px-4 mt-4 rounded-md shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
