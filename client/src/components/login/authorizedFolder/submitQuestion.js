


export const submitQuestion = async ({image , question, answer, incorrect_answers}, route) => {

    const URL = `http://localhost:4242/api/${route.url}/${route.id}`
    const fetchData =  await fetch(URL, {
      method: route.route,
      mode: 'cors',
       cache: 'no-cache',
      credentials: 'same-origin',
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
     })
  return fetchData
}
export default submitQuestion 
