
numeroPrimo(2)
function numeroPrimo(n) {
    var primo = true 
   for (var i=2; i < n; i ++) {
    
      if (n % i === 0 ) {
        primo = false;
        break
      }
     
  }
  if (primo == true){
    console.log ('O valor é primo')
  }
  else {
    console.log ('O valor não é primo!')
  }
   
 
  }
