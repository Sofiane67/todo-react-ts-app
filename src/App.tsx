import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import classes from "./App.module.scss";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Filter from './components/Filter/Filter';

const App = () => {
  const {color} = useSelector((store:any) => store.theme);
  const {allTasks} = useSelector((store: any) => store.tasks);
  const [filter, setFilter] = useState<string>("");

  const getFilterType = (filter: string) => {
	  setFilter(filter);
  }

  return (
    <div className={`${classes.app} ${classes[`app--${color}`]}`}>
      <Header/>
      {allTasks && allTasks.length > 0 && <TodoList filter={filter}/> } 
      <Filter onFilter={getFilterType}/>
    </div>
  );
}

export default App;
