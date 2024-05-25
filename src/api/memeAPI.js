import axios from 'axios';

//maybe add so that it fetches more than just one
export const memeAPI = () => {
    const getMeme =  async () => {
        let items;
        await axios.get('https://meme-api.com/gimme')
        .then( res => {
            items = res.data;
            console.log(items);
            
        });
        return items;
    }

    return{
        getMeme
    };
}