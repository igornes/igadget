 $('./body') {
 	add_class ("mw_category")
	
	$("./div[@id='Container']/div[@id='Outer']"){
		$("./div[@id='Wrapper']"){
			
			$("./div[@class='Left']"){
			log("------- Selecting Left")
				# Create Togglers
				$("./div[@id='SideShopByBrand' or @id='SideCategoryShopByPrice']") {
				 log(" ------------ Selecting SideShopByBrand or SideCategoryShopByPrice")
				 	attribute("data-ur-set", "toggler")
				 	$("./h2"){
				 		add_class("mw_bar1") 
				 		attribute("data-ur-toggler-component","button")
				 		insert("div", class:"mw_indicator") 	
				 	}
				 	$("./div"){
				 		attribute("data-ur-toggler-component", "content")
				 		$(".//li/a"){
				 		insert("div",class:"mw_arrow")
				 		}

				 	}
				}
				$("//*[contains(@class,'NewsletterSubscription')]"){
					remove()
				}	 
			}

			$("./div[@class='Content ']") {
			log("------- Selecting Content ")
				$("./div[@id='CategoryHeading']") {
					$("./div[@class='BlockContent']") {
						# Move page title on top of the content area
						$("./h2") {
							move_to("../../../../div[@class='Left']", "top")
						}
						$("./div[@class='FloatRight SortBox']") {
							log("----------- Selecting Sort Box")
							$("./form") {
								log("----------- Selecting Form")
								wrap_text_children("span")
							}
						}
					}
				}
			}
		}
	} 
	
}

 