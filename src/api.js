import axios from "axios";

const searchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=ODZvhKORnTpWzXC0AA_2NNTaa-LM9FE-n3JHD_T9kbs'

    const response = await axios.get(url,{
        params:{
            query: term
        }
    })

    console.log(response)
    return response.data.results
}   

export default searchImages