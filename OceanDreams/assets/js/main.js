
function get_products(category, arr) {
  // console.log(category,arr);
  for (var item in arr) {
    var count = 0;
    var image_path="./products/"+category+"/"+arr[item].name.toLowerCase().replace(/ /g, "")+"/"+arr[item].name.toLowerCase().replace(/ /g, "")+".jpg";
    document.getElementById(category+'-grid').innerHTML += '<div class="products-card">\
              <a href="#">\
              <div class="card-head">\
              <img src="'+image_path+'" alt="'+category+'-img" class="card-img" id="'+ arr[item].name + '">\
                <div class="card-overlay">\
                  <div class="shop">\
                    <ion-icon name="cart"></ion-icon>\
                  </div>\
                </div>\
              </div>\
              <div class="card-body">\
                <h3 class="card-title">'+ arr[item].name + '</h3>\
                <div class="card-info">\
                <span class="price">'+ "₹" + arr[item].cost + '</span>\
              </div>\
              </div>\
              </a>\
            </div>'
    count++;
    if (count <= 2) {
      document.getElementById(category+'-grid').style.gridTemplateColumns = "repeat(auto-fit, minmax(140px,0fr))";
    }
    else {
      document.getElementById(category+'-grid').style.gridTemplateColumns = "repeat(auto-fit, minmax(140px,1fr))";
    }
  }
}


function get_categories() {
  $.getJSON('./data/products.json', function (data) {
    var category = Object.keys(data);
    for (var type in category) {
      document.getElementById('main').innerHTML +=
        '<section class="products" id="' + category[type] + '">\
                <div class="filter-bar">\
                    <h2>'+ category[type].toUpperCase() + '</h2>\
                </div>\
                <div class="products-grid" id="'+ category[type] + '-grid">\
                    </div>\
            </section>';
      get_products(category[type], data[category[type]]);
    }
  });
}




