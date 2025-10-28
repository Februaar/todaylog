import LogImage from "@/features/todaylog/components/LogImage";
import LogForm from "@/features/todaylog/components/LogForm";

export default function WritePage() {
  return (
    <section className="flex flex-col space-y-6 py-8">
      <div className="px-2">
        <h2>2025</h2>
        <p className="text-lg">10.22</p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <LogImage />
        <LogForm />
      </div>
    </section>
  );
}
