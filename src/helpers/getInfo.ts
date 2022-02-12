const getInfo = async (artist: string) => {
    const resp = await fetch(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`)
    const { artists } = await resp.json()
    
    const bioEs = artists[0].strBiographyES
    const bioEn = artists[0].strBiographyEN
    const bio = bioEs ?? bioEn
    const imageThumb = artists[0].strArtistThumb
    const name = artists[0].strArtist

    return {
        bio,
        imageThumb,
        name
    }
}

export {
    getInfo
}