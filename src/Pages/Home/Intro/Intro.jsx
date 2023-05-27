import img from '../../../assets/home/chef-service.jpg'

const Intro = () => {
  return (
    <div className='relative'>
      <img className='h-[572px] object-cover ' src={img} alt="" />
      <div className="absolute bg-opacity-50 inset-0 bg-white">
        <h1>Bistro Boss</h1>
        <p>
          Welcome to Bistro Boss, where culinary excellence meets warm hospitality! Nestled in the heart of City, our restaurant is a haven for food enthusiasts seeking an unforgettable dining experience. With our passion for flavor, creativity, and impeccable service, we aim to surpass your expectations and leave you craving for more.
          As you step into Bistro Boss, youll be embraced by an inviting and charming ambiance. The soothing lighting, tasteful decor, and cozy seating arrangement create an atmosphere that exudes both elegance and comfort. Whether youre looking to enjoy a romantic evening, celebrate a special occasion, or simply savor a delicious meal, our restaurant provides the perfect backdrop for any dining affair.
        </p>
      </div>
    </div>
  );
};

export default Intro;