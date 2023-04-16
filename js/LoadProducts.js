function loadRandomProducts(category, id) {
    const currency = localStorage.getItem('currency');
    const productsShow = category === 'all'
                ? seleccionarObjetosAleatorios(products())
                : seleccionarObjetosAleatorios(products().filter(product => product.category === category));
    var html = ``;

    productsShow.forEach((product)=>{
        let colors = ``;
        product.colors.forEach((color)=> colors += `<a href="#color_${product.reference}_${color}" id="color_${product.reference}_${color}" style="background: #${color};"><span class="sr-only">Color name</span></a>`)
        html += `<div class="product product-2">
                    <figure class="product-media">
                        <a href="product.html?reference=${product.reference}">
                            <img src="assets/images/product/${product.reference}_1.jpg" class="product-img-small" alt="Product image" class="product-image">
                        </a>


                        <div class="product-action">
                            <a onClick="addCart('${product.reference}')" class="btn-product btn-cart mouse-pointer" title="Agregar al carrito"><span>Agregar al carrito</span></a>
                        </div><!-- End .product-action -->
                    </figure><!-- End .product-media -->

                    <div class="product-body">
                        
                        <h3 class="product-title"><a href="product.html?reference=${product.reference}">${product.name}</a></h3><!-- End .product-title -->
                        <div class="product-price">
                            ${currency} ${formatNumber(product[currency] ?? 0)}
                        </div><!-- End .product-price -->
                        <div class="ratings-container">
                            <div class="ratings">
                                <div class="ratings-val" style="width: ${product.stars * 100 / 5}%;"></div><!-- End .ratings-val -->
                            </div><!-- End .ratings -->
                            <span class="ratings-text">( ${product.reference} )</span>
                        </div><!-- End .rating-container -->

                        <div class="product-nav product-nav-dots">
                           ${colors}
                        </div><!-- End .product-nav -->
                    </div><!-- End .product-body -->
                </div><!-- End .product -->`
    })
    $(`#${id}`).html(html)
    
}

function addCart(productReference){
    var cartProducts = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    var added = false;
    console.log(cartProducts);
    cartProducts = cartProducts.map((product) => {
        if(product.reference == productReference){
            product.quantity = product.quantity ? product.quantity + 1 : 1;
            added = true
        } 
        return product
    })

    if(!added){
        cartProducts.push({reference: productReference, quantity: 1})
    }
    
    localStorage.setItem('cart', JSON.stringify(cartProducts))
    loadCartProducts()
}

function removeCart(productReference){
    var cartProducts = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    console.log(cartProducts);
    cartProducts = cartProducts.filter((product) => product.reference != productReference)
    
    localStorage.setItem('cart', JSON.stringify(cartProducts))
    loadCartProducts()
}

function loadCartProducts(){
    const currency = localStorage.getItem('currency') ?? 'CLP';
    var cartProducts = localStorage.getItem('cart')
    if(cartProducts !== null){
        //dropdown-cart-products
        cartProducts = JSON.parse(cartProducts);
        var total = 0;
        var html = ``;

        const productsObj = {};
            products().forEach(item => {
            productsObj[item.reference] = item;
            });

        const result = [];
        cartProducts.forEach(item => {
        let product = productsObj[item.reference];
        if (product) {
            var obj = {
                reference: item.reference,
                name: product.name,
                quantity: item.quantity
            };
            obj[currency] = product[currency]

            result.push(obj);
        }
        });

        result.forEach((product)=> {
            html += `<div class="product">
                        <div class="product-cart-details">
                            <h4 class="product-title">
                                <a href="product.html?reference=${product.reference}">${product.name}</a>
                            </h4>

                            <span class="cart-product-info">
                                <span class="cart-product-qty">${product.quantity}</span>
                                x ${currency} ${formatNumber(product[currency] ?? 0)}
                            </span>
                        </div><!-- End .product-cart-details -->

                        <figure class="product-image-container">
                            <a href="product.html" class="product-image">
                                <img class="product-img-cart" src="assets/images/product/${product.reference}_1.jpg" alt="product">
                            </a>
                        </figure>
                        <a class="btn-remove" onClick="removeCart('${product.reference}')" title="Remove Product"><i class="icon-close"></i></a>
                    </div><!-- End .product -->`
            total += product[currency] ? product[currency] * product.quantity : 0;
        })
        $('.dropdown-cart-products').html(html)
        $('.cart-count').html(cartProducts.length)
        $('.cart-total-price').html(`${currency} ${formatNumber(total ?? 0)}`)

        
    }
}

function seleccionarObjetosAleatorios(array) {
    const objetosSeleccionados = [];
    let objetosRestantes = [...array];
    const randomNumber = Math.random() * (8 - 5) + 5;
    
    for (let i = 0; i < randomNumber && objetosRestantes.length > 0; i++) {
      const indiceAleatorio = Math.floor(Math.random() * objetosRestantes.length);
      objetosSeleccionados.push(objetosRestantes[indiceAleatorio]);
      objetosRestantes = objetosRestantes.filter((_, index) => index !== indiceAleatorio);
    }
    
    return objetosSeleccionados;
  }


  function formatNumber(num) {
    if (num >= 1000000) {
      const millions = Math.floor(num / 1000000);
      const thousands = Math.floor((num % 1000000) / 1000);
      const rest = num % 1000;
      return millions.toLocaleString() + "'" + thousands.toLocaleString('en-US', {minimumIntegerDigits: 3}) + "." + rest.toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping: false});
    } else {
      return num.toLocaleString();
    }
  }
  