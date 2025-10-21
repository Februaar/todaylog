import LogCard from "@/features/todaylog/components/LogCard";
import LogForm from "@/features/todaylog/components/LogForm";

export default function TodayLog() {
  return (
    <section className="w-full flex flex-col border space-y-6 py-8 px-4">
      <button>뒤로가기</button>
      <div className="">
        <h2>2025</h2>
        <p className="text-lg">10.22</p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="w-full">사진업로드</div>
        <LogForm />
      </div>
    </section>
  );
}
