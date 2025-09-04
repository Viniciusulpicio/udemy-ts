import React from 'react';

// 4 - import component
import FirstComponents from './components/FirstComponents';

// 5 - desestruturando props
import SecondComponents from './components/secondComponent'
import Destructuring, {Category} from './components/Destructuring';

// 6 - useState
import State from './components/State';

// 10 - utilizando contexto
import Context from './components/Context';

// 8 - type

type textOrNull = string | null

// 9 - context 
interface IAppContext {
  language: "Javascript",
  framework: "Express",
  projects: 5
}

export const AppContext = React.createContext<IAppContext | null>(null)


function App() {

  // 1 - variaveis
  const nome: string = "Vinicius";
  const age: number = 17;
  const isWorking: boolean = true

  // 2 - funcoes 
  const UserGreeting = (name: string): string => {
    return `ola ${name}`
  }

  // 8 - types

  const myText:textOrNull = "Tem texto"
  let mySecondText:textOrNull = null

  // mySecondText = "opa"

  // 9 - context

  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5,
  }

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>typescript com react</h1>
      <h2>Nome: {nome}</h2>
      <h3>Age: {age}</h3>
      {isWorking && (
        <div>
           <p>esta trablalhando !</p>
        </div>
      )}

      <h4>{UserGreeting(nome)}</h4>

      <FirstComponents />
      <SecondComponents name='second component name'/>
      <Destructuring title="Primero post" content="Conteudo" comentsQty={10}  tags={["ts", "js", "react"]} category={Category.JS}/>
      <State />
      {
        myText && <p>tem texto na variavel</p>
      }
      
      <Context />
    </div>
    </AppContext.Provider>
  );
}

export default App;
