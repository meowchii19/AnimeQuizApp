
export const GoToUpdateForm = (history,event) =>{
    history.push(`/edit/${event}`) 
}


export const deleteQuestion = async (func,id) => {
    await fetch(`http://localhost:4242/api/delete/${id}`, 
   { method: 'DELETE' }).then(() => {
        func(id)
    })
}

const buttonFunctions = {
    GoToUpdateForm,
    deleteQuestion 
}


  export default buttonFunctions
      
  