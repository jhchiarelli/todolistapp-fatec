import AddTask from "@/components/add-task";
import TodoList from "@/components/todo-list";
import { getAllTodos } from "@/services/service-todo";


export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Aplicativo lista de tarefas</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}
