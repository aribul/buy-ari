import React from 'react';
import products from './Item/Item.jsx';
import ItemCount from "./ItemCount/ItemCount.jsx";

function ItemList(){

    const [newItem, setnewItem] = useState([]);

        useEffect(() => {
            setTimeout(() => {
                const promise = new Promise ((resolve, reject) => {
                    resolve(products);
                });
                promise.then(product => {
                    setnewItem(products);
                })
            }, 5000);
        
        }, [])









        return(
            <>
            
            {newItem.map((item) => {

                    return(
                    <div key={item.id} id="pastryContainer">
                        <div id="pastry">
                            <img id= "imagen producto" src={item.image} alt="Imagen producto"/>
                        </div>
                        <div>
                            <h3 classNAme="itemTitle">{item.title}</h3>
                            <p className="itemPrice">{item.price}</p>
                        </div>
                        <ItemCount />
                    </div>
                    )
                })
            
                
                }
            </>
        )

        }
export default ItemList;