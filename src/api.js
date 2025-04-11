import axios from "axios";

const searchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=ttEeylI51PVEaoeKW5tQlvTi6RjpIujASS1FIbXmwe8'

    const response = await axios.get(url,{
        params:{
            query: term
        }
    })

    console.log(response)
    return response.data.results
}   

export default searchImages