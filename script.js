function showPage (target){

  for(element of document.getElementsByClassName('show')){
    element.className = 'hidden'
  }

  document.getElementById(target).className = 'show';
  
}
