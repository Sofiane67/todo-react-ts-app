import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import classes from "./App.module.scss";
import { useSelector } from 'react-redux';

const App = () => {
  const {color} = useSelector((store:any) => store.theme);

  return (
    <div className={`${classes.app} ${classes[`app--${color}`]}`}>
      <Header/>
      <TodoList/>
    </div>
  );
}

export default App;
