export default function LogForm() {
  return (
    <form className="flex flex-col w-[20rem]">
      <input
        type="text"
        placeholder="오늘에 제목을 붙여보세요"
        className="py-4 px-6"
      />
      <textarea
        placeholder="오늘을 기록해보세요"
        className="flex-1 rounded-xl bg-gray-100 py-4 px-6 min-h-60 resize-none "
      />
      <button className="p-4 text-sm">기록하기</button>
    </form>
  );
}
