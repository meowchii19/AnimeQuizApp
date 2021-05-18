


export const submitQuestion = (allDataInputs) => {
    postData(allDataInputs)
  }


  const URL = 'http://localhost:4242/api/create'
  const postData = async ({image , question, answer, incorrect_answers}) => {
     await fetch(URL, {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "image": image,
        "question": question,
        "answer" : answer,
        "incorrect_answers": incorrect_answers 
        })
    }).then(res => res.json())
      .then(res=> console.log(res._id))
  }

export default submitQuestion 
