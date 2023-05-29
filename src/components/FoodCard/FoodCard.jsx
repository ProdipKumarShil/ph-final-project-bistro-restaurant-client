import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({item}) => {
  const { image, price, name, recipe } = item
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  
  const handleAddToCart = item => {
    console.log(item)
    if(user){
      fetch('http://localhost:5000/carts')
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        }

      })
    }
    else{
      Swal.fire({
        title: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      })
    }
    
  }

  return (
    <div className="card rounded-none w-96 bg-[#f3f3f3] shadow-md">
      <figure><img className="w-full" src={image} alt="Shoes" /></figure>
      <p className="absolute right-0 mr-4 mt-4 bg-slate-900 text-white p-2 rounded ">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleAddToCart(item)} className="btn  btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 text-orange-400 hover:text-orange-400 mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;