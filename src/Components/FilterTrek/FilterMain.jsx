import FilterHero from "./FilterHero/FilterHero";
import FilterPackageBox from "./FilterPackages/FilterPackageBox";

const Main = (props) => {
  return (
    <div>
      <FilterHero />
      <FilterPackageBox trekAllData={props.trekAllData} />
    </div>
  );
};

export default Main;
