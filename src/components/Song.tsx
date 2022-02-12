type SongsProps = {
    lyricsSong: string;
};

const Song = ({ lyricsSong }: SongsProps) => {
    return (
        <article>
            <h2 className="text-4xl font-semibold text-center py-8">
                Letra de la canción
            </h2>
            <p className="whitespace-pre-wrap">{lyricsSong}</p>
        </article>
    );
};

export default Song;
