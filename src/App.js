import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'hi',
      day: 'December 30th',
      reminder: false,
    },
    {
      id: 2,
      text: 'hey',
      day: 'January 1st',
      reminder: true,
    },
    {
      id: 3,
      text: 'hello',
      day: 'December 31st',
      reminder: false,
    },
  ])

  // Delete Task
  const deleteTask = (id) =>  {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
      task.id === id ?
        { ...task, reminder: !task.reminder} :
        task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
      )}
    </div>

  );
}

export default App;
