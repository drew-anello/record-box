import { useState } from "react";
import { useRouter } from "next/router";

export default function Add() {
  const [albumCover, setAlbumCover] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [albumYear, setAlbumYear] = useState("");
  const [artistName, setArtistName] = useState("");
  const [yourName, setYourName] = useState("");
  const [favoriteSong, setFavoriteSong] = useState("");

  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!albumName || !albumYear || !favoriteSong || !artistName || !yourName) {
      alert("Please fill out all required fields");
      return;
    }
    try {
      const response = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          albumCoverImage: albumCover,
          albumName,
          releaseYear: parseInt(albumYear),
          favoriteSong,
          artistName,
          userName: yourName,
        }),
      });

      if (response.ok) {
        alert('Album Added');
        router.push('/')
        setAlbumCover("");
        setAlbumName("");
        setAlbumYear("");
        setFavoriteSong("");
        setArtistName("");
        setYourName("");
      } else {
        console.log("Error adding the post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAlbumCoverChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlbumCover(event.target.value);
  };


  const handleAlbumNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlbumName(event.target.value);
  };

  const handleAlbumYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlbumYear(event.target.value);
  };

  const handleFavoriteSongChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavoriteSong(event.target.value);
  };

  const handleArtistNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArtistName(event.target.value);
  };
  const handleYourNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYourName(event.target.value);
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Enter") {
        event.preventDefault();
        const form = event.currentTarget.form;
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.click();
      }
    }
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
              Album Name: <span className="text-red-500">*</span>
              <input type="text" value={albumName} onChange={handleAlbumNameChange} className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
            </label>
          </div>
          <div>
            <label>
              Favorite Song on the Album: <span className="text-red-500">*</span>
              <input type="text" value={favoriteSong} onChange={handleFavoriteSongChange} className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
            </label>
          </div>
          <div>
            <label>
              Release Year: <span className="text-red-500">*</span>
              <input type="text" value={albumYear} onChange={handleAlbumYearChange} className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
            </label>
          </div>
          <div>
            <label>
              Artist Name: <span className="text-red-500">*</span>                     <input type="text" value={artistName} onChange={handleArtistNameChange} className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
            </label>
          </div>
          <div>
            <label>
              Your Name: <span className="text-red-500">*</span>
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
