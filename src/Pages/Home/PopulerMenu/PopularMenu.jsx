import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu()
  const popular = menu.filter(item => item.category === 'popular')
  
  return (
    <section>
      <SectionTitle
        heading={'From Our Menu'}
        subHeading={'Popular Items'}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {
          popular.map(item => <MenuItem
            key={item._id}
            item={item}
          ></MenuItem>)
        }
      </div>
      <div className="flex">
      <button className="btn btn-outline mx-auto  border-0 border-b-4 mt-4">View Full Menu!!</button>

      </div>
    </section>
  );
};

export default PopularMenu;