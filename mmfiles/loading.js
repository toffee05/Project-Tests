function hide_loader() {
  const loader = document.querySelector('.loading');

  setTimeout(function() {
    loader.className += ' hidden';
  }, 500)
  
}