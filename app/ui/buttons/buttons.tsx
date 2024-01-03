export function NotificationButtonFloat({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`${isOpen && "hidden"} duration-300 z-[8]`}>
      <span className="animate-ping fixed bottom-3 right-3 w-10 h-10 rounded-full bg-green-300"></span>
      <button className="w-14 h-14 text-xs sm:text-sm font-normal sm:font-medium text-gray-900 bg-green-300 rounded-full shadow-md fixed bottom-1 right-1 z-[9]">
        اطلاعیه
      </button>
    </div>
  );
}
