import Tasks from "~/components/tasks";

export default function Home() {
  return (
    <main class="max-w-md mx-auto flex my-8 flex-col gap-8">
      {/* Heading */}
      <section class="grid grid-cols-[1.5rem_1fr] gap-4">
        <div class="mt-2">
          <img src="/Logo.svg" alt="Logo" class="size-6" />
        </div>

        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-4">
            <p class="text-3xl font-mainFont text-[2.5rem]">My Task Board</p>

            <button class="mt-1">
              <img src="Edit_duotone.svg" alt="Edit Button" class="size-6" />
            </button>
          </div>

          <p class="text-[1rem] font-light">Tasks to keep organized</p>
        </div>
      </section>
      {/* End of Heading */}

      <Tasks />
    </main>
  );
}
