$("./body") {
	$(".//div[@id='Footer']") {
		wrap("div", class: "mw_footer")
		 $("./p") {
			 # Change current <p> tag to <div> tag
			  name("div")
			  #Wrap text children with span tag
			   wrap_text_children ("span")

			#Insert placeholders for the footer elements 

			inject(read("../sections/footer.html"))
			#insert("div", class: "mw_currency")
      		#insert("div", class: "mw_copy")
      		#insert("div", class: "mw_moovweb")

			# Move first two spans to  mw_currency container.
			$("./div[@class='mw_currency']") {
				log ("------>  mw_currency selected")
				move_here(" ../span[position() < 3]", "bottom")
			}

			# Insert span with copyright into .mw_copy container
			$("./div[@class='mw_copy']") {
				insert("span", "Copyright 2013 iGadgetCommerce")
			}

			#Insert span  and image elment into .mw_moovweb container
			$("./div[@class='mw_moovweb']") {
				insert("span", class: "mw_powered", "powered by:")
				insert("div", class: "sprites-moovweb")
			}
			# Remove other elements
			$("./*[not(self::div)]") {
				remove()
			}
		}  
	} 
  
}

