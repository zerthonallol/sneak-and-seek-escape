import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Побег пацана: Стелс школьник" },
      { name: "description", content: "3D стелс-игра: сбеги из дома, пока мама поливает цветы, а папа смотрит телик." },
      { property: "og:title", content: "Побег пацана: Стелс школьник" },
      { property: "og:description", content: "Стелс-побег из живого дома с четырьмя концовками." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/game.html"
      title="Побег пацана: Стелс школьник"
      className="fixed inset-0 h-screen w-screen border-0"
      allow="fullscreen; autoplay"
    />
  );
}
