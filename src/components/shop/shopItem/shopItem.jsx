import "./shopItem.css"



function ShopItem({data}) {
    return ( <>
        <div className="shopItemWrapper">
            <div className="imgBox">
                <img src={data.thumbnail} alt="" />
            </div>
            <p>{data.title}</p>
            <button>Buy</button>
        </div>
    
    </> );
}

export default ShopItem;