
var menu = document.querySelector('.logo')
var sidebar = document.querySelector('aside')


menu.onclick = function(){
  sidebar.classList.toggle("small-sidebar")
}



  function addDarkmodeWidget() {
    new Darkmode().showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);


  const options = {
    bottom: '64px',
    right: 'unset', 
    left: '32px', 
    time: '0.5s', 
    mixColor: '#fff',
    backgroundColor: '#fff', 
    buttonColorDark: '#100f2c',  
    buttonColorLight: '#fff',
    saveInCookies: false, 
    label: '🌓', 
    autoMatchOsTheme: true 
    
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
