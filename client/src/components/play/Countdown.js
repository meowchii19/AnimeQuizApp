import * as React from "react";

export default function Coutdown({wrongAnswer, renderNextQuestion}) {
  const [counter, setCounter] = React.useState(10);
  
 React.useEffect(() => {
   let isMounted = true;
  counter > 0 && setTimeout(() => {if (isMounted){setCounter(counter - 1)}}, 1000);
   if(counter === 0){
     wrongAnswer()
     setCounter(counter + 10)
     renderNextQuestion()
    }
    return() => { isMounted = false}
  }, [counter]);
  
  return (
    <div className="App">
      <h4>Time: {counter}</h4>
    </div>
  );
}
