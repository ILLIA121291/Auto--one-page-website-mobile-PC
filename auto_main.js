
$(function () {
    
    // Section - 5 - "Our blog" - Start -->
    var mixer = mixitup('.container');

    $('.ft_32px_fw_700_black_Manrope').on('click', function () {
        $('.ft_32px_fw_700_black_Manrope').removeClass('our_blog_push_button')
        $(this).addClass('our_blog_push_button')
      })
      // Section - 5 - "Our blog" - End -->
    


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




