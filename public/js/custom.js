//Get the button
       

          $(document).ready(function(){
         $('.customer-logos').slick({
         slidesToShow: 6,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 1500,
         arrows: false,
         dots: false,
         pauseOnHover: false,
         responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
         }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
         }]
         });
         });

            $(document).ready(function(){
            //  $("#testimonial-slider").owlCarousel({
            //      items:2,
            //      itemsDesktop:[1000,2],
            //      itemsDesktopSmall:[990,2],
            //      itemsTablet:[768,1],
            //      pagination:true,
            //      navigation:false,
            //      navigationText:["",""],
            //      slideSpeed:1000,
            //      autoPlay:true
            //  });
         });