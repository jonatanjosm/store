function loadCategories() {
    var html = ``;
    const categories = categories();
    categories.forEach((category, index) => {
        `<div class="filter-item">
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="cat-${index}">
                <label class="custom-control-label" for="cat-1">${category.name}</label>
            </div><!-- End .custom-checkbox -->
            <span class="item-count">3</span>
        </div><!-- End .filter-item -->`
    });
}