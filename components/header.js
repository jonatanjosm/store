
function header() {

    var categoriesList = categories().map((category) => {
        var html;
        switch (category.extra) {
            case 'hot':
                html = `<li><a href="category.html?category=${category.id}"><span>${category.name}<span class="tip tip-hot">Hot</span></span></a></li>`
                break;
            case 'new':
                html = `<li><a href="category.html?category=${category.id}"><span>${category.name}<span class="tip tip-new">New</span></span></a></li>`
                break;
        
            default:
                html = `<li><a href="category.html?category=${category.id}">${category.name}</a></li>`
                break;
        }
        return html
    })
    categoriesHtml = categoriesList.join('');

    var brandsList = brands().map((brand) => {
        var html;
        switch (brand.extra) {
            case 'hot':
                html = `<li><a href="category.html?brand=${brand.name}"><span>${brand.name}<span class="tip tip-hot">Hot</span></span></a></li>`
                break;
            case 'new':
                html = `<li><a href="category.html?brand=${brand.name}"><span>${brand.name}<span class="tip tip-new">New</span></span></a></li>`
                break;
        
            default:
                html = `<li><a href="category.html?brand=${brand.name}">${brand.name}</a></li>`
                break;
        }
        return html
    })
    brandsHtml = brandsList.join('');
    return `<div class="header-top">
    <div class="container">
        <div class="header-left">
            <a><i class="icon-phone"></i>Kushki store</a>
        </div><!-- End .header-left -->

        <div class="header-right">

            <ul class="top-menu">
                <li>
                    <a href="#">Links</a>
                    <ul>
                        <li>
                            <div class="header-dropdown">
                                <a href="#"><img src="assets/images/flags/USD.png" width="15">&nbsp USD</a>
                                <div class="header-menu">
                                    <ul>
                                        <li><a href="#"><img src="assets/images/flags/CLP.png" width="15">&nbsp CLP &nbsp</a></li>
                                        <li><a href="#"><img src="assets/images/flags/COP.png" width="15">&nbsp COP &nbsp</a></li>
                                        <li><a href="#"><img src="assets/images/flags/PEN.png" width="15">&nbsp PEN &nbsp</a></li>
                                        <li><a href="#"><img src="assets/images/flags/MXN.png" width="15">&nbsp MXN &nbsp</a></li>
                                        <li><a href="#"><img src="assets/images/flags/USD.png" width="15">&nbsp USD &nbsp</a></li>
                                    </ul>
                                </div><!-- End .header-menu -->
                            </div>
                        </li>
                    </ul>
                </li>
            </ul><!-- End .top-menu -->
        </div><!-- End .header-right -->

    </div><!-- End .container -->
</div><!-- End .header-top -->

<div class="header-middle">
    <div class="container">
        <div class="header-left">
        
            <a href="index.html" class="logo">
                <img src="assets/images/logos/PNG/Logo Kushki - Oscuro-G.png" alt="Kushki Logo" width="150">
            </a>
        </div><!-- End .header-left -->

        <div class="header-center">
            <div class="header-search header-search-extended header-search-visible d-none d-lg-block">
                <a href="#" class="search-toggle" role="button"><i class="icon-search"></i></a>
                <form action="#" method="get">
                    <div class="header-search-wrapper search-wrapper-wide">
                        <label for="q" class="sr-only">Search</label>
                        <button class="btn btn-primary" type="submit"><i class="icon-search"></i></button>
                        <input type="search" class="form-control" name="q" id="q" placeholder="Buscar producto ..." required>
                    </div><!-- End .header-search-wrapper -->
                </form>
            </div><!-- End .header-search -->
        </div>

        <div class="header-right">
            

            <div class="dropdown cart-dropdown">
                <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                    <div class="icon">
                        <i class="icon-shopping-cart"></i>
                        <span class="cart-count">2</span>
                    </div>
                    <p>Carrito</p>
                </a>

                <div class="dropdown-menu dropdown-menu-right">
                    <div class="dropdown-cart-products">
                        <div class="product">
                            <div class="product-cart-details">
                                <h4 class="product-title">
                                    <a href="categories.html">Beige knitted elastic runner shoes</a>
                                </h4>

                                <span class="cart-product-info">
                                    <span class="cart-product-qty">1</span>
                                    x $84.00
                                </span>
                            </div><!-- End .product-cart-details -->

                            <figure class="product-image-container">
                                <a href="product.html" class="product-image">
                                    <img src="assets/images/products/cart/product-1.jpg" alt="product">
                                </a>
                            </figure>
                            <a href="#" class="btn-remove" title="Remove Product"><i class="icon-close"></i></a>
                        </div><!-- End .product -->

                        <div class="product">
                            <div class="product-cart-details">
                                <h4 class="product-title">
                                    <a href="product.html">Blue utility pinafore denim dress</a>
                                </h4>

                                <span class="cart-product-info">
                                    <span class="cart-product-qty">1</span>
                                    x $76.00
                                </span>
                            </div><!-- End .product-cart-details -->

                            <figure class="product-image-container">
                                <a href="product.html" class="product-image">
                                    <img src="assets/images/products/cart/product-2.jpg" alt="product">
                                </a>
                            </figure>
                            <a href="#" class="btn-remove" title="Remove Product"><i class="icon-close"></i></a>
                        </div><!-- End .product -->
                    </div><!-- End .cart-product -->

                    <div class="dropdown-cart-total">
                        <span>Total</span>

                        <span class="cart-total-price">$160.00</span>
                    </div><!-- End .dropdown-cart-total -->

                    <div class="dropdown-cart-action">
                        <a href="cart.html" class="btn btn-primary">View Cart</a>
                        <a href="checkout.html" class="btn btn-outline-primary-2"><span>Checkout</span><i class="icon-long-arrow-right"></i></a>
                    </div><!-- End .dropdown-cart-total -->
                </div><!-- End .dropdown-menu -->
            </div><!-- End .cart-dropdown -->
        </div><!-- End .header-right -->
    </div><!-- End .container -->
</div><!-- End .header-middle -->

<div class="header-bottom sticky-header">
    <div class="header-bar-container" >
        <div >
            <nav class="main-nav">
                <ul class="menu sf-arrows">
                    <li class="megamenu-container">
                        <a href="index.html" >Inicio</a>
                    </li>
                    <li>
                        <a href="categories.html" class="sf-with-ul">Categorias</a>

                        <div class="megamenu megamenu-sm">
                            <div class="row no-gutters">
                                <div class="col-md-6">
                                    <div class="menu-col">
                                        <div class="menu-title">Nuestras categorias</div><!-- End .menu-title -->
                                        <ul>
                                            ${categoriesHtml}
                                        </ul>
                                    </div><!-- End .menu-col -->
                                </div><!-- End .col-md-6 -->

                                <div class="col-md-6">
                                    <div class="banner banner-overlay">
                                        <a href="category.html">
                                            <img src="assets/images/menu/menu-products.jpg" alt="Banner">

                                            <div class="banner-content banner-content-bottom">
                                                <div class="banner-title text-white">New Trends<br><span><strong>spring 2023</strong></span></div><!-- End .banner-title -->
                                            </div><!-- End .banner-content -->
                                        </a>
                                    </div><!-- End .banner -->
                                </div><!-- End .col-md-6 -->
                            </div><!-- End .row -->
                        </div><!-- End .megamenu megamenu-sm -->
                    </li>
                    <li>
                        <a class="sf-with-ul">Marcas</a>

                        <div class="megamenu megamenu-sm">
                            <div class="row no-gutters">
                                <div class="col-md-6">
                                    <div class="menu-col">
                                        <div class="menu-title">Marcas aliadas</div><!-- End .menu-title -->
                                        <ul>
                                            ${brandsHtml}
                                        </ul>
                                    </div><!-- End .menu-col -->
                                </div><!-- End .col-md-6 -->

                                <div class="col-md-6">
                                    <div class="banner banner-overlay">
                                        <a href="category.html">
                                            <img src="assets/images/menu/menu-brands.jpg" alt="Banner">

                                            <div class="banner-content banner-content-bottom">
                                                <div class="banner-title text-white">New Trends<br><span><strong>spring 2023</strong></span></div><!-- End .banner-title -->
                                            </div><!-- End .banner-content -->
                                        </a>
                                    </div><!-- End .banner -->
                                </div><!-- End .col-md-6 -->
                            </div><!-- End .row -->
                        </div><!-- End .megamenu megamenu-sm -->
                    </li>
                    
                </ul><!-- End .menu -->
            </nav><!-- End .main-nav -->
        </div><!-- End .header-center -->
    </div><!-- End .container -->
</div><!-- End .header-bottom -->`
}