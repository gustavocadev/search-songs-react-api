import { Dispatch, FormEvent, SetStateAction } from "react";

type Search = {
    artist: string;
    song: string;
};

type FormProps = {
    setSearch: Dispatch<SetStateAction<Search>>;
    search: Search;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const Form = ({ setSearch, search, handleSubmit }: FormProps) => {
    const { artist, song } = search;
    return (
        <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 lg:px-16"
            onSubmit={handleSubmit}
        >
            <section className="flex flex-col">
                <label htmlFor="" className="text-2xl">
                    Artista
                </label>
                <input
                    type="text"
                    name="artist"
                    placeholder="Nombre del artista"
                    className="rounded-lg border-transparent flex-1 appearance-none  w-full py-2 px-4 bg-slate-800 text-gray-200 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    onChange={(e) =>
                        setSearch({ ...search, artist: e.target.value })
                    }
                    value={artist}
                />
            </section>
            <section className="flex flex-col">
                <label htmlFor="" className="text-2xl">
                    Canción
                </label>
                <input
                    type="text"
                    name="song"
                    placeholder="Nombre de la canción"
                    className="rounded-lg border-transparent flex-1 appearance-none  w-full py-2 px-4 bg-slate-800 text-gray-200 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    onChange={(e) =>
                        setSearch({ ...search, song: e.target.value })
                    }
                    value={song}
                />
            </section>
            <button
                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg col-span-1 sm:col-span-2 "
                type="submit"
            >
                Buscar
            </button>
        </form>
    );
};

export default Form;
