
import React from 'react';
import data from "./data";

function App() {
  return (
    <div className="grid-container">
    <nav>
        <a className = "estiloNav" href="/">¡¡ESTA PAGINA ESTA EN MANTENIMIENTO!!</a>
    </nav>
    
    <header className = "row">
        
        <div>
            <img className="logo" src="/img/logoUD.png" alt='logoUD'/>
        </div>
        <div>
            <a className = "ingresaStyle"href="/cart">Ingresa</a>
            <a href="/signin"><img className="carrito" src="/img/carrito.png" alt='logoUD'/></a>
        </div>
    </header>
    
    <main>
        <div>
            <div className="row center">
                {
                     data.products.map(product =>(
                        <div key={product._id} className="card">
                            <a href =    {`/product/${product._id}`}>
                            <img className="medium" src={product.image} alt={product.name}/>
                            </a>

                            <div className="card-body">
                                <a href = {`/product/${product._id}`} >
                                    <h2>{product.name}</h2>
                                </a>
                                <div className="rating">
                                    <span><i className="fa fa fa-star"></i></span>
                                    <span><i className="fa fa fa-star"></i></span>
                                    <span><i className="fa fa fa-star"></i></span>
                                    <span><i className="fa fa fa-star"></i></span>
                                    <span><i className="fa fa fa-star"></i></span>
                                </div>
                                <div className="price">  ${product.price}</div>
                            </div>
                    </div>
                    )) }  
            </div>
        </div>
    </main>

    <footer  className="row center" >
        UD Electronics©2022 CEL: 3208576038-3213213756
        KRA 9 #19-30 local 202 BY Christian Gonzalez
    </footer>
</div>

  );
}

export default App;
