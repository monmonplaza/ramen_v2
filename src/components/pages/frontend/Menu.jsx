import { imgPath } from "@/components/helpers/functions-general.jsx";
import { Plus } from "lucide-react";

const Menu = ({ cartItem, setCartItem }) => {



  return (
    <>
      <section className="py-24 bg-orange bg-[url('./public/img/pattern.webp')] bg-repeat bg-center bg-blend-color-burn bg-opacity-100">
        <div className="container">
          <h2 className="text-center uppercase text-white ">Ramen Menu</h2>
          <div className="grid grid-cols-2 gap-10 mt-14">         
            <div className="grid-item mb-6" >
                <div className="grid grid-cols-[250px_1fr] gap-2 items-center">
                    <div>
                    <h3 className="mb-2">Ramen 1</h3>
                    <h4 className="mb-5 text-nowrap">
                        Shoyo Tonkatsu
                    </h4>
                    <h4 className="text-accent">PHP 200</h4>

                    <ul className="text-white mb-5">
                        <li>Onion</li>
                        <li>Char Sui</li>
                        <li>Noodle</li>
                        <li>Oil</li>
                    </ul>

                    <button
                        className="btn btn-accent"
                        
                    >
                        <Plus size={18} /> Add to Cart
                    </button>
                    </div>
                    <img
                    src={`${imgPath}/menu-1.webp`}
                    alt=""
                    className="size-[300px] rounded-full object-cover"
                    />
                </div>
            </div>        

            <div className="grid-item mb-6" >
                <div className="grid grid-cols-[250px_1fr] gap-2 items-center">
                    <div>
                        <h3 className="mb-2">Ramen 1</h3>
                        <h4 className="mb-5 text-nowrap">
                            Shoyo Tonkatsu
                        </h4>
                        <h4 className="text-accent">PHP 200</h4>

                        <ul className="text-white mb-5">
                            <li>Onion</li>
                            <li>Char Sui</li>
                            <li>Noodle</li>
                            <li>Oil</li>
                        </ul>

                        <button
                            className="btn btn-accent"
                        >
                            <Plus size={18} /> Add to Cart
                        </button>
                    </div>
                    <img
                    src={`${imgPath}/menu-1.webp`}
                    alt=""
                    className="size-[300px] rounded-full object-cover"
                    />
                </div>
            </div>  
          </div>
        </div>
      </section>


    </>
  );
};

export default Menu;
