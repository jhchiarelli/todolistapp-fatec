"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./modal";
import { addTodo } from "@/services/service-todo";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      title: newTaskValue,
    });
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
        <div className='text-center mx-4'>
      <button
        onClick={() => setModalOpen(true)}
        className='btn btn-primary min-w-full'
      >
        Adicionar nova tarefa <AiOutlinePlus className='ml-2' size={18} />
      </button>
       </div> 
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className='font-bold text-lg'>Nova tarefa</h3>
          <div className='modal-action'>
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type='text'
              placeholder='Digite aqui'
              className='input input-bordered w-full'
            />
            <button type='submit' className='btn'>
              Enviar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;