import Navigation from "./Navigation";

const MainHeader = () => {
  return (
    <header className="fixed left-0 top-0 flex h-20 w-[100%] items-center justify-between bg-[#741188] px-8  ">
      <h1 className="text-white">A Typical Page</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
