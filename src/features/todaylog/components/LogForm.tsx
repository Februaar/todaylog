export default function LogForm() {
  return (
    <form className="w-full flex flex-col">
      <input
        type="text"
        placeholder="오늘에 제목을 붙여보세요"
        className="p-4"
      />
      <textarea
        placeholder="오늘을 자유롭게 기록해보세요"
        className="w-[400px] flex-1 rounded-xl bg-gray-100 p-4"
      />
      <button className="p-4">기록하기</button>
    </form>
  );
}
