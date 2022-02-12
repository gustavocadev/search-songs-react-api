type Props = {
    bioArtist: string;
    artistName: string;
    imageArtist: string;
};

const Info = ({ bioArtist, artistName, imageArtist }: Props) => {
    return (
        <article>
            <h2 className="text-4xl font-semibold capitalize  py-8">
                {artistName}
            </h2>
            <figure>
                <img
                    src={imageArtist}
                    alt={artistName}
                    className="rounded-lg pb-4"
                />
            </figure>

            <p className="whitespace-pre-wrap">{bioArtist}</p>
        </article>
    );
};

export default Info;
