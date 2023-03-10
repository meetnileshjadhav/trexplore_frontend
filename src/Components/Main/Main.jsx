import Hero from "./Hero/Hero";
import PackageBox from "./Packages/PackageBox";

const Main = (props) => {
  return (
    <div>
      <Hero />
      <PackageBox trekAllData={props.trekAllData} />
    </div>
  );
};

export default Main;
