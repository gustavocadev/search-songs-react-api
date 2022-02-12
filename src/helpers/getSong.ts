const getSong = async (artist: string, song: string) => {
    const resp = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
    const { lyrics } = await resp.json()
    return lyrics
}

export {
    getSong
}
