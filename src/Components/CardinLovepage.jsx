import { getPriceAfterDiscount } from '../utils/priceUtils';

export function CardLove({product , handleClickOpen , keye , handleAddtocard}){
    return(
        <div
                className="group relative flex flex-col rounded-2xl overflow-hidden border shadow-[0px_6px_30px_rgba(0,0,0,0.3)] hover:shadow-[0px_12px_40px_rgba(200,168,130,0.2)] transition-all duration-300"
                style={{ backgroundColor: '#1a1a1a', borderColor: 'rgba(200,168,130,0.2)' }}
            >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden" style={{ backgroundColor: '#0D0D0D' }}>
                <img
                    src={product.img}
                    alt={product.name}
                    loading='lazy'
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Delete */}
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-200" style={{ backgroundColor: 'rgba(200,168,130,0.1)', backdropFilter: 'blur(4px)', color: 'rgba(200,168,130,0.6)' }} onClick={()=>{handleClickOpen(keye)}}>

                    <span className="material-symbols-outlined">
                    delete
                    </span>

                </button>

                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">

                <div className="flex justify-between items-start mb-2">

                    <h3 className="text-lg font-semibold" style={{ color: '#F0ECE4' }}>
                    {product.name}
                    </h3>

                    <span className="font-bold" style={{ color: '#C8A882' }}>
                    ${getPriceAfterDiscount(product.price, product.Discount)}
                    </span>

                </div>

                <p className="text-xs uppercase tracking-[3px] mb-6" style={{ color: 'rgba(200,168,130,0.6)' }}>
                    {product.category}
                </p>

                {/* Add To Cart */}
                <button className="mt-auto w-full py-4 rounded-xl text-white font-medium flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200" style={{ backgroundColor: '#C8A882', color: '#0D0D0D' }} onClick={()=>{handleAddtocard(keye+1)}}>

                    <span className="material-symbols-outlined text-[18px]">
                    add_shopping_cart
                    </span>

                    Add to Cart

                </button>
                </div>
            </div>
    )
}