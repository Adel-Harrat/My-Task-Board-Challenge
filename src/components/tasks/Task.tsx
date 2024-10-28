export default function Task({
  status,
  emoji,
  text,
  description,
  icon,
}: {
  status: "ACTIVE" | "DONE" | "PENDING" | "CANCELED";
  emoji: "computer" | "comment" | "coffee" | "gym" | "books" | "clock";
  text: string;
  description?: string;
  icon?: string;
}) {
  // Change task color based on status
  let statusClass = {
    background: "",
    iconBackground: "",
    iconSrc: "",
  };

  switch (status) {
    case "ACTIVE":
      statusClass.background = "bg-app-light-orange";
      statusClass.iconBackground = "bg-app-orange";
      statusClass.iconSrc = "Time_atack_duotone.svg";
      break;
    case "DONE":
      statusClass.background = "bg-app-light-green";
      statusClass.iconBackground = "bg-app-green";
      statusClass.iconSrc = "Done_round_duotone.svg";
      break;
    case "PENDING":
      statusClass.background = "bg-app-light-gray";
      statusClass.iconBackground = "bg-app-";
      statusClass.iconSrc = "";
      break;
    case "CANCELED":
      statusClass.background = "bg-app-pink";
      statusClass.iconBackground = "bg-app-red";
      statusClass.iconSrc = "close_ring_duotone.svg";
      break;
  }

  let showEmoji = "";
  switch (emoji) {
    case "computer":
      showEmoji = "🖥";
      break;
    case "comment":
      showEmoji = "💭";
      break;
    case "coffee":
      showEmoji = "☕";
      break;
    case "gym":
      showEmoji = "💪";
      break;
    case "books":
      showEmoji = "📚";
      break;
    case "clock":
      showEmoji = "⏰";
      break;
  }

  return (
    <article
      class={`p-3 rounded-lg flex items-start gap-4 justify-between ${statusClass.background}`}
    >
      <div class="bg-app-white p-1 rounded-lg flex items-center justify-center">
        <span>{showEmoji}</span>
      </div>

      <div class="flex-1 flex flex-col gap-1 font-mainFont">
        <span class="text-[1.25rem] font-semibold">{text}</span>
        <span class="text-sm text-app-gray max-w-xs">{description}</span>
      </div>

      {statusClass.iconSrc && status !== "PENDING" && (
        <div
          class={`p-1 rounded-lg flex items-center justify-center ${statusClass.iconBackground}`}
        >
          <img src={statusClass.iconSrc} alt="icon" />
        </div>
      )}
    </article>
  );
}
