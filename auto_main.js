
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
        appendDots:$('.our_customers_block_two_buttons_indicator'),
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive:[
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
            },
          },
    
        ]
        
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



// Section - 5 - "Our blog" - Articles Hover Effect - Start -->

let articlesContainer = document.querySelector('.our_blog_block_two_articles_cards')


function mouseOver (event) {
  let card = event.target.closest('.articleCardHover')

  if (card.classList.contains('articleCardHover')) {
    let titelColor = card.querySelector('.hover_js')

    titelColor.style.color = '#61C3A1'
    card.style.background = '#eaedef'
  }
}

articlesContainer.addEventListener('mouseover', mouseOver)


function mouseOut (event) {
  let card = event.target.closest('.articleCardHover')

  if (card.classList.contains('articleCardHover')) {
    let titelColor = card.querySelector('.hover_js')

    titelColor.style.color = ''
    card.style.background = ''
  }
}

articlesContainer.addEventListener('mouseout', mouseOut)

// Section - 5 - "Our blog" - Articles Hover Effect - End -->



// Section - 7 - "Frequently" - Start -->

let containerFrequently = document.querySelector('.frequently_block_two')

function openSection (event){
  let btn = event.target.closest('.frequently_section_header_button')

  if(btn) {
    let parent = btn.parentElement.parentElement

    let text = parent.querySelector('.frequently_section_text')
    let indicator = parent.querySelector('.frequently_section_button_close')

    text.hidden = !text.hidden
    indicator.classList.toggle('frequently_section_close')
  }
}

containerFrequently.addEventListener ('click', openSection)

// Section - 7 - "Frequently" - End -->



// Header - Burger Manue Open and Close - Start --------------------

function CloseBurgerMenue () {
  const headerBlockOne = document.querySelector('.header_block_one')
  headerBlockOne.classList.toggle('no_display')

  const overlay = document.querySelector('.overlay')
  overlay.classList.toggle('overlay_open')

  const spanCentralBurgerMenue = document.querySelectorAll('.burger_manue_span_close')[1]
  spanCentralBurgerMenue.classList.toggle('burger_manue_central_span_open')

  const spanTopBurgerMenue = document.querySelectorAll('.burger_manue_span_close')[0]
  spanTopBurgerMenue.classList.toggle('burger_manue_top_span_open')

  const spanBottomBurgerMenue = document.querySelectorAll('.burger_manue_span_close')[2]
  spanBottomBurgerMenue.classList.toggle('burger_manue_button_span_open')
}

document.querySelector('.burger_manue').addEventListener('click', CloseBurgerMenue)
document.querySelector('.overlay').addEventListener('click', CloseBurgerMenue)
document.querySelector('.header_block_one').addEventListener('click', CloseBurgerMenue)

// Header - Burger Manue Open and Close - Start --------------------