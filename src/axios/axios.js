import axios from "axios";


export async function getText() {
     let response= await axios.get(`https://baconipsum.com/api/?type=meat-and-filler&paras=2&format=text`)
     return await response.data
}


// .then(res => {
//     const text= res.data;
//     this.setState({ text});
// })