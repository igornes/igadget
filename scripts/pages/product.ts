$("./body") {
	add_class("mw_product")
	
	$(".//div[@class='BulkDiscount']") {
		$("./input[@type='image']") {
			log ("------> Selected Add to Cart")
			wrap("div", class: "mw_add_cart_btn")
			 
		}
		$("./div[@class='mw_add_cart_btn']"){
			log ("------> Selected w_add_cart_btn class")
			 inject_at("bottom" , "Add to Cart") 
		}
	}
	$(".//div[@id='ProductReviews']/a")  {
		 
		wrap ("div", class: "mw_write_review")
	}
}