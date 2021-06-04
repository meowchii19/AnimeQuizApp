import axios from 'axios'

export const GoToUpdateForm = (history,event) =>{
    history.push(`/edit/${event}`) 
}


export const deleteQuestion = async (func,id) => {
    try {
        await axios.delete(`http://localhost:4242/api/delete/${id}`).then(()=>func(id))
    }catch(err){
        console.log(err)
    }
}

const buttonFunctions = {
    GoToUpdateForm,
    deleteQuestion 
}


  export default buttonFunctions
      
  
