export const FetchAllQuestions = async () => {
    const url = 'http://localhost:4242/api/play'
    const data =  await fetch(url)
    return data
  }

 
export default FetchAllQuestions
