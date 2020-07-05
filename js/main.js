
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:1
        },
        768:{
            items:2
        },
        992:{
        	items:3
        }
    }

    
})


        $(document).ready(function(){
       $("#ch").click(function () {
       $('#form1').toggle('');
    })
       $(".navbar-toggler-icon").click(function()
       {
        $('#chips').toggle('');
       })

       })




AOS.init({
      offset:400,
      duration:3000
    })