import { Title, TodoList } from './components';
import { TodoProvider } from './context/TodoProvider';

const Todo = () => {
  return (
    <TodoProvider>
      <Title />
      <TodoList />
    </TodoProvider>
  );
};

export default Todo;
