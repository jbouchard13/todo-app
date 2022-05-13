export default class Todo {
  constructor(name, date, project) {
    this.name = name;
    this.date = date;
    this.completed = false;
    this.project = project;
  }

  updateCompleted = (status) => {
    this.completed = status;
  };

  logInfo = () => {
    console.log(this);
  };
}
