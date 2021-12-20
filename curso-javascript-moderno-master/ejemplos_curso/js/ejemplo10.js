try {
    var num = 2;
    var strNum ="2";
    if (num === strNum){
        document.getElementById("txtResultado").value = num + strNum;
    }
    else{
        throw new Error('Los tipos no coinciden, ejecución interrumpida');
    }

    
  } catch (error) {
    console.error(error);
    document.getElementById("txtResultado").value = "se produjo un error:" + error
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }

  function resta(num1,num2){
      return num1-num2;
  }