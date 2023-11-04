export const getGifs = async (categorie) => {
    const api_key = '0s5ESn4N3lKjSwOb8d0cUjQ4sX4Pkt5S'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categorie}&limit=5`;

    const request = await fetch(url);
    const response = await request.json();

    const data = response.data;

    const gifs = data.map((item)=>{
        
        const {id, title} = item;

        return {
            key: id,
            img: item.images.downsized_medium.url,
            title
        }
    })
    return gifs
}