log("--> Running ajax.ts")

# match($path) {
#   # Match the Ajax path
#   with(/foo/) {
#     html_fragment() {
#       log("--> Importing ajax/foo.ts in ajax.ts")
#       @import ajax/foo.ts
#     }
#   }
# }
match($path) {
  # Match the Ajax path
 	with(/category/) {   
     log("-->  Ajax content in category")      
    }
    with(/product/) {   
     log("-->  Ajax content in product")      
    }
    else() {
    	log("--->  This Ajax is not recognized")
    }

}
# needed for product images
# replace("%24", "$")
# replace("&amp;", "&")