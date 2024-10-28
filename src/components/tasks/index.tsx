import AddNewTask from "./AddNewTask";
import Task from "./Task";

export default function Tasks() {
  return (
    <section class="space-y-4">
      <Task emoji="clock" status="ACTIVE" text="Task in Progress" />
      <Task emoji="gym" status="DONE" text="Task completed" />
      <Task emoji="coffee" status="CANCELED" text="Task Won't Do" />
      <Task
        emoji="books"
        status="PENDING"
        text="Task To Do"
        description="Work on a Challenge on devChallenges.io, learn TypeScript."
      />

      <AddNewTask />
    </section>
  );
}
