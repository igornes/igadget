 $('./body') {
	remove("//*[@id='AjaxLoading']")
	

	$(".//div[@id='Header']") {
		attribute("data-ur-set", "toggler")
		# Select logo scope
		$("./div[@id='Logo']"){	
				log("--------> selected the Logo containter")
			# Move top menu into #Logo container
				move_here("../../../div[@id='TopMenu']","bottom"){
				# Remove unwanted top menu items from upper menu
					$("./ul") {
							$("./li[position()= 1 or position() > 2 and not(position()=last()-1)]"){
						 	remove()
						 }
					}
				}
				#Insert header template
				inject_after(read("../sections/header.html"))
			$("..//div[@class='mw_menu_btn']") {
				attribute("data-ur-toggler-component", "button")
			}

			# Fill search html
			$("..//div[@class='mw_search']"){
				#Move search form into container element
				move_here("//div[@id='SearchForm']","bottom"){
				remove("./p")
					$("./form") {
						remove("./label")
						# Change search button background image
						$("./input[@type='image']") {
							wrap("div", class: "mw_search_btn sprites-search")
						}
						$("./input[@type='text']") {
							wrap("div"){
								attribute("data-ur-set", 'input-clear')
							}
							attribute("data-ur-input-clear-component", "input") 
						 	attribute("placeholder", "Search...")
						 	
						}
					}
				}
			}		
		}
		# Remove br
		$("./br") {
			remove()
		}
			
		# Move menu items into header
		move_here("../div[@id='Menu']","bottom"){
			#Declare toggler content element which is enabled/disabled by toggler button
			attribute("data-ur-toggler-component","content")
			# Move "Category List" element on bottom of #Menu element
			move_here("../../div[@id='Wrapper']/div[@class='Left']/div[@id='SideCategoryList']","bottom")

		}
	}

}
