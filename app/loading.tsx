export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className=" h-screen w-screen flex justify-center items-center ">
      <div className="animate-bounce w-6 h-6">
        <span className="text-[#A076CC] text-xl font-semibold">fQuiz</span>
      </div>
    </div>
  );
}
