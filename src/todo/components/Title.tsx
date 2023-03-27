import { useTodos } from '../hooks';

const Title = () => {
  const { pendingTodos } = useTodos();

  return <h1>Todos: {pendingTodos.length}</h1>;
};

export default Title;
