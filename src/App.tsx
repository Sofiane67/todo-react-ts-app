import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import classes from "./App.module.scss";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Filter from './components/Filter/Filter';

const App = () => {
  const {color} = useSelector((store:any) => store.theme);
  const {tasks} = useSelector((store: any) => store);
  const {localStorage} = useSelector((store: any) => store);
  const [, setIsStoreUpdated] = useState<boolean>(localStorage);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => setIsStoreUpdated(currentState => !currentState), [localStorage]);

  const getFilterType = (filter: string) => {
	setFilter(filter);
  }

  return (
    <div className={`${classes.app} ${classes[`app--${color}`]}`}>
      <Header/>
      {tasks.length>0 &&  <TodoList filter={filter}/>}
      <Filter onFilter={getFilterType}/>
    </div>
  );
}

export default App;
