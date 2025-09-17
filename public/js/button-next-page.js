const button = document.querySelector ( ".next-area" )
const nextArea = document.querySelector ( ".container-technologies-with-illustration" )

button.addEventListener ( "click", ( ) => {
    nextArea.scrollIntoView ( { behavior : "smooth" } )
} )