// Loading animation
export const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent z-50";

export function ShortcutBoxSkeleton() {
  return (
    <div
      className={`${shimmer} w-44 h-36 rounded-xl shadow-md bg-gray-100 p-4 overflow-hidden `}
    >
      <div className="w-10 h-10 rounded-xl bg-gray-300"></div>
      <div className="w-20 h-5 bg-gray-300"></div>
    </div>
  );
}

export function NewsCard() {
  return (
    <div className={`${shimmer} p-4 w-[250px] h-[430px] rounded-xl shadow-xl flex flex-col justify-between`}>
      <div className={`w-[200px] h-[200px] bg-gray-200 rounded-xl`}></div>
      <div className={`w-[200px] h-[20px] bg-gray-200 rounded-xl`}></div>
      <div className={`w-[150px] h-[20px] bg-gray-200 rounded-xl`}></div>
      <div className={`w-[50px] h-[10px] bg-gray-200 rounded-xl mr-auto`}></div>
      <div className={`w-[80px] h-[30px] bg-gray-200 rounded-xl mx-auto`}></div>
    </div>
  );
}
