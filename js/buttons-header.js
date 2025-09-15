const buttonHome = document.querySelector ( ".main-house" )
const main = document.querySelector ( ".main-container-info" )
const buttonTec = document.querySelector ( ".main-tec" )
const tec = document.querySelector ( ".container-technologies-with-illustration" )
const buttonProjects = document.querySelector ( ".main-projects" )
const projects = document.querySelector ( ".projects-section" )
const buttonAboutMe = document.querySelector ( ".main-phone" )
const aboutMe = document.querySelector ( ".container-about-me" )


buttonHome.addEventListener ( "click", ( ) => {
    main.scrollIntoView ( { behavior : "smooth" } )
} )

buttonTec.addEventListener ( "click", ( ) => {
    tec.scrollIntoView ( { behavior : "smooth" } )
} )


buttonProjects.addEventListener ( "click", ( ) => {
    projects.scrollIntoView ( { behavior : "smooth" } )
} )

buttonAboutMe.addEventListener ( "click", ( ) => {
    aboutMe.scrollIntoView ( { behavior : "smooth" } )
} )