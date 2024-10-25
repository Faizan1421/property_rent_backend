const Slide = () => {
  return (
    <div
      className="hidden md:block w-[100%] h-[80vh] bg-gradient-to-b from-black via-black to-black bg-opacity-50 bg-contain md:bg-cover bg-no-repeat md:bg-center  "
      style={{ backgroundImage: "url(/assets/images/slide.jpg)" }}
    >
      <h1 className="px-[30px] py-[30px] md:px-[20px] md:py-[40px] text-[15px] md:text-[40px] text-center text-[white]">
        Welcome Home! Anywhere you roam <br /> Stay in the moment. Make your
        memories
      </h1>
    </div>
  );
};

export default Slide;
