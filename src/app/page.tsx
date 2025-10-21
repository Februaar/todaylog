import LogCard from "@/features/todaylog/components/LogCard";

export default function Home() {
  return (
    <section className="space-y-6 py-8">
      <div className="grid grid-cols-3 gap-4">
        <LogCard />
      </div>
    </section>
  );
}
