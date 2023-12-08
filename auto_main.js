
$(function () {
    
    // Section - 5 - "Our blog" - Start -->
    var mixer = mixitup('.container');

    $('.ft_32px_fw_700_black_Manrope').on('click', function () {
        $('.ft_32px_fw_700_black_Manrope').removeClass('our_blog_push_button')
        $(this).addClass('our_blog_push_button')
      })
      // Section - 5 - "Our blog" - End -->
    


      $('.our_customers_block_two_slider').slick({
        arrows: false,
        slidesToShow: 2,
        infinity: true,
        draggable:false,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 2000,
        
        
      }) 
      $('.our_customers_slider_button_previous').on('click', function (e) {
        e.preventDefault()
        $('.our_customers_block_two_slider').slick('slickPrev')
      })
    
      $('.our_customers_slider_button_next').on('click', function (e) {
        e.preventDefault()
        $('.our_customers_block_two_slider').slick('slickNext')
      })
    




















})


// Section - 5 - "Our blog" - Titel color - Start -->

let articleCards = document.querySelectorAll('.articleCardHover')

for (let card of articleCards) {
    let titelColor = document.querySelectorAll('.hover_js')[card.getAttribute('data-order')-1]

    card.onmouseenter = function(event){
        titelColor.style.color = '#61C3A1'
    }

    card.onmouseleave = function(event){
    titelColor.style.color = ''
    }

    card.onmousedown = function(event){    
    titelColor.style.color = ''
}
}
// Section - 5 - "Our blog" - Titel color - End -->




