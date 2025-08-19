import TaskListNumber from "../TaskAndOthers/TaskListNumber";
import Header from "../TaskAndOthers/Header";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div>
    <Header/>
    <TaskListNumber/>
    <TaskList/>
    </div>
  )
}

export default EmployeeDashboard;