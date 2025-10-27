import LogImage from "@/features/todaylog/components/LogImage";
import LogForm from "@/features/todaylog/components/LogForm";

export default function WritePage() {
  return (
    <section className="w-full flex flex-col space-y-6 py-8 px-4">
      <div className="">
        <h2>2025</h2>
        <p className="text-lg">10.22</p>
      </div>
      <div className="flex flex-col gap-4 h-[500px] sm:flex-row">
        <LogImage />
        <LogForm />
      </div>
    </section>
  );
}
