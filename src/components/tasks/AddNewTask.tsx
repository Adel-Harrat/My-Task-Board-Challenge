export default function AddNewTask() {
  return (
    <button
      class={`w-full p-3 rounded-lg flex items-center gap-4 bg-app-light-pink active:scale-95 transition-all ease-in-out duration-150`}
    >
      <div class="bg-app-orange p-1 rounded-lg flex items-center">
        <img src="/Add_round_duotone.svg" alt="Add new task icon" />
      </div>

      <div class="flex-1 font-mainFont text-left">
        <span class="text-[0.875rem] font-medium">Add new task</span>
      </div>
    </button>
  );
}
