import Form from "./components/Form";
import { useState, FormEvent, useEffect } from "react";
import { getSong } from "./helpers/getSong";
import Song from "./components/Song";
import Bio from "./components/Bio";
import { getInfo } from "./helpers/getInfo";

const App = () => {
    // hooks
    const [search, setSearch] = useState({
        artist: "",
        song: "",
    });
    const [error, setError] = useState(false);
    const [lyricsSong, setLyricsSong] = useState("");
    const [bioArtist, setBioArtist] = useState("");
    const [imageArtist, setImageArtist] = useState("");
    const [artistName, setArtistName] = useState("");
    // destructuring
    const { artist, song } = search;

    // useEffect(() => {
    //     const lyrics = localStorage.getItem("lyricsSong") ?? "";
    //     setLyricsSong(lyrics);
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem("lyricsSong", lyricsSong);
    // }, [lyricsSong]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const searches = [artist.trim(), song.trim()];
        if (searches.includes("")) {
            setError(true);
            return;
        }
        setError(false);

        const [songLyric, infoSong] = await Promise.all([
            getSong(artist, song),
            getInfo(artist),
        ]);
        // save in a   state the lyrics of the song
        setLyricsSong(songLyric);
        // save in a state the bio of the artist
        const { bio, imageThumb, name } = infoSong;
        setArtistName(name);
        setImageArtist(imageThumb);
        setBioArtist(bio);

        // Reset the form
        setSearch({ artist: "", song: "" });
    };
    return (
        <main className="px-4 lg:px-[132px]">
            <header className="text-4xl text-center py-8">
                <h1>Buscador de letras de canciones</h1>
            </header>
            {error && (
                <p className="text-center text-red-500">
                    Todos los campos son obligatorios
                </p>
            )}
            <Form
                setSearch={setSearch}
                search={search}
                handleSubmit={handleSubmit}
            />
            {lyricsSong != "" && (
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Bio
                        bioArtist={bioArtist}
                        imageArtist={imageArtist}
                        artistName={artistName}
                    />
                    <Song lyricsSong={lyricsSong} />
                </section>
            )}
        </main>
    );
};

export default App;
