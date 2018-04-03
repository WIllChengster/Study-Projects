
const BASE_URL = 'http://jsbin.com/oembed?url=https://jsbin.com/?html,output'

axios.get( `${BASE_URL}` ).then( res => {
    console.log(res)
})