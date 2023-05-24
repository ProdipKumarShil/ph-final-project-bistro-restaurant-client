import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './feature.css'

const Featured = () => {
  return (
    <div className="featured-items text-white my-20">
      <SectionTitle subHeading='check it out' heading='Featured Item'></SectionTitle>
      <div className="md:flex justify-center py-20 items-center pt-12 px-36">
        <div className="">
          <img src={featuredImg} alt="" />
        </div>
        <div className="mt-4 md:mt-0 md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">where can i get some?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque earum omnis esse laborum beatae dolore repudiandae recusandae perferendis provident eius?</p>
          <button className="btn btn-outline">Order Now!!</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;