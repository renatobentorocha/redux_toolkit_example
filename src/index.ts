import { createInterface } from "readline";
import { promisify } from "util";

import store from "./store/index";
import { increment  } from "./store/features/counter/counterSlice";

const reader = createInterface({
	input: process.stdin,
	output: process.stdout,
});

store.subscribe(() => console.log(`store.subscribe: ${JSON.stringify(store.getState())}`))

const question = promisify<string, string>((question: string, callback: Function) => 
	reader.question(question, callback.bind(null, null))
);

async function askQuestion(): Promise<string> {
	return question("Inc number or 'x' to exit.: ");	
}

const dispatch = (answer: string ) => {
  try {
    store.dispatch(increment({value: Number(answer)}))    
  } catch (error) {
    console.log(error)
  }
}

async function read(){
  while (true) {
    const answer = await askQuestion();

    if(answer.toLocaleLowerCase() === 'x') process.exit();
    
    dispatch(answer)
  }
}

read()


