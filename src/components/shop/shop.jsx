import React from "react";
import "./shop.css"
import axios from "axios";
import ShopItem from "./shopItem/shopItem";


function Shop() {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then(function (response) {
                console.log(response.data.products);
                setData(response.data.products)
            });
    }, [])

    return (<>

        <div>

            {

                data &&
                data.map((item) => {
                    return <ShopItem data={item} key={item.id} />
                })


            }
        </div>
    </>);
}

export default Shop;