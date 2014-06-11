$(document).ready(function() {
   $("[data-toggle='tooltip']").tooltip(); 
   
   var peopleScroll = new Swiper('#people-scroll .swiper-container', {
    scrollContainer:true,
    mousewheelControl : true,
    mode:'vertical',
    //Enable Scrollbar
    scrollbar: {
      container :'#people-scroll .swiper-scrollbar',
      hide: false,
      draggable: true
    }
  });
  
  var rightContentScroll = new Swiper('#right-content-scroll .swiper-container', {
    scrollContainer:true,
    mousewheelControl : true,
    mode:'vertical',
    //Enable Scrollbar
    scrollbar: {
      container :'#right-content-scroll .swiper-scrollbar',
      hide: false,
      draggable: true
    }
  });     
});