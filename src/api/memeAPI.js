import axios from 'axios';

//maybe add so that it fetches more than just one
export const memeAPI = () => {
    const getMeme = () => {
        axios.get('https://meme-api.com/gimme')
        .then( res => {
            const items = res.data;
            console.log(items);
            return items;
        });
    }

    return{
        getMeme
    };
}