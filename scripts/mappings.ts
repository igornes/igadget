/*
  Mappings

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

match($status) {

  with(/302/) {
    log("--> STATUS: 302") # redirect: just let it go through
  }

  with(/200/) {
    log("--> STATUS: 200")

    match($path) {
      with(/^\/$|^\/\?/) {
        log("--> Importing pages/home.ts in mappings.ts")
        @import pages/home.ts
      }
    with(/shop/){
    log("--> Importing pages/category.ts in mapping.ts")
    @import "pages/category.ts"
    }
      else() {
      $("//div[@id='ProductDetails']/ancestor::html"){
      log("--> Importing products.ts - mapping on content")
        @import pages/product.ts
        }
       
      }
    }
    
  }

  else() {
    # not 200 or 302 response status
    log("--> STATUS: " + $status + " assuming its an error code pages/error.ts")
    @import pages/error.ts
  }

}
