const track = document.querySelector ( ".carousel-track" )
const cards = Array.from ( track.children )
const prevButton = document.querySelector ( ".prev-btn" )
const nextButton = document.querySelector ( ".next-btn" )
const carWidth = cards [ 0 ].getBoundingClientRect ( ).width
const visibleCards = 3
const totalCards = cards.length

let currentIndex = 0

function updateCarouselPosition ( ) 
{
    const newTransform = - currentIndex * carWidth

    track.style.transform = `translateX(${newTransform}px)`

    cards.forEach ( card => card.classList.remove ( "active" ) )

    cards [ currentIndex ].classList.add ( "active" )
}

nextButton.addEventListener ( "click", ( ) => {
    currentIndex ++

    if ( currentIndex > totalCards - visibleCards )
    {
        currentIndex = 0
    }

    updateCarouselPosition ( )
} )

prevButton.addEventListener ( "click", ( ) => {
    currentIndex --

    if ( currentIndex < 0 )
    {
        currentIndex = totalCards - visibleCards
    }

    updateCarouselPosition ( )
} )