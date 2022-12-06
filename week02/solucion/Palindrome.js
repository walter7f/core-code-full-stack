function isPalindrome(line) {
    let newLine= line.toString().split('').reverse( ).join('');
      if(line==newLine){
        return true;
      }else{
        return false;
      }
    
    }