
const FoodCard = ({item}) => {
  const { image, price, name, recipe } = item
  return (
    <div className="card rounded-none w-96 bg-[#f3f3f3] shadow-md">
      <figure><img className="w-full" src={image} alt="Shoes" /></figure>
      <p className="absolute right-0 mr-4 mt-4 bg-slate-900 text-white p-2 rounded ">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn  btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 text-orange-400 hover:text-orange-400 mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;