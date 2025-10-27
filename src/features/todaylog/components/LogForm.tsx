export default function LogForm() {
  return (
    <form className="w-full flex flex-col">
      <input
        type="text"
        placeholder="오늘에 제목을 붙여보세요"
        className="py-4 px-6"
      />
      <textarea
        placeholder="오늘을 기록해보세요"
        className="w-[400px] flex-1 rounded-xl bg-gray-100 py-4 px-6 "
      />
      <button className="p-4 text-sm">기록하기</button>
    </form>
  );
}
