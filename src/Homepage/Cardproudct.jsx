export function Cardproudct({img,category,name,price}){
    return(
        <div  className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                <div className="aspect-square bg-gray-50 overflow-hidden">
                    <img
                    src={img}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                </div>
                <div className="p-5">
                    <span className="text-xs text-gray-400 uppercase">{category}</span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-1">{name}</h3>
                    <p className="text-gray-700 font-bold mt-2">${price}.00</p>
                </div>
        </div>
    )
}