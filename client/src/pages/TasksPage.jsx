import { useEffect } from "react";
import { useTasks } from "../context/tasksContext";
import { TaskCard } from "../components/tasks/TaskCard";
import { ImFileEmpty } from "react-icons/im";
import { Link } from "react-router-dom";

export function TasksPage() {
  const { tasks, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="flex min-h-screen bg-white-100">
      {/* Sidebar izquierda - Exactamente como en la imagen */}
      <aside className="w-64 bg-[#004D37] text-white p-4 hidden md:block">
        <h1 className="text-xl font-bold mb-6">Actividades solidarias</h1>
        
        <div className="mb-4">
          <ul className="space-y-1">
          <li className="hover:bg-[#003529] p-3 rounded">Buscar y Filtrar Actividad</li>
            <li className="hover:bg-[#003529] p-3 rounded">Lista de Actividades</li>
            <li className="hover:bg-[#003529] p-3 rounded">Actividades Promocionadas</li>
            <li className="hover:bg-[#003529] p-3 rounded">Configurar Notificaciones</li>
            <li className="hover:bg-[#003529] p-3 rounded">Publicar en Redes Sociales</li>
            <li className="hover:bg-[#003529] p-3 rounded">Gestionar Asistencia</li>
          </ul>
        </div>
      </aside>

      {/* Contenido principal - SIN CAMBIOS (igual que tu versión original) */}
      <main className="flex-1 p-4">
        {tasks.length === 0 && (
          <div className="flex justify-center items-center p-10">
            <div>
              <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
              <h1 className="font-bold text-xl text-gray-400">
                No hay tareas aún, Porfavor agregue una nueva tarea
              </h1>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 bg-white text-black">
          {tasks.map((task) => (
            <TaskCard task={task} key={task._id} />
          ))}
        </div>
      </main>
    </div>
  );
}