export default function App() {
  return (
    <>
      <div className="section1 bg-gray-500 p-5 flex flex-col gap-5 justify-center items-center flex-wrap md:relative md:flex-row lg:flex-col">
        <div className="innerChild w-[200px] bg-green-500 p-2 mb-5 bg-red-500 text-black md:bg-purple-500 md:text-white md:text-2xl lg:bg-orange-500 lg:text-white lg:text-4xl">1</div>
        <div className="innerChild w-[200px] bg-green-500 p-2 mb-5">2</div>
        <div className="innerChild w-[200px] bg-green-500 p-2 mb-5 md:absolute md:end-0 lg:bottom-0">3</div>
        <div className="innerChild w-[200px] bg-green-500 p-2 mb-5">4</div>
      </div>
    </>
  );
}
