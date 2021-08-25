import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import classes from "./App.module.scss";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const App = () => {
  const {color} = useSelector((store:any) => store.theme);
  const {tasks} = useSelector((store: any) => store);
  const {localStorage} = useSelector((store: any) => store);
  const [, setIsStoreUpdated] = useState<boolean>(localStorage);

  useEffect(() => setIsStoreUpdated(currentState => !currentState), [localStorage]);

  return (
    <div className={`${classes.app} ${classes[`app--${color}`]}`}>
      <Header/>
      {tasks.length>0 && <TodoList/>}
    </div>
  );
}

export default App;
