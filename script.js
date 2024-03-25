document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section")
  const menuLinks = document.querySelectorAll("#menu-superior a")

  function showSection(sectionId) {
    sections.forEach((section) => {
      section.style.display = "none"
    })

    const currentSection = document.getElementById(sectionId)
    if (currentSection) {
      currentSection.style.display = "block"
    }
  }

  function setActiveLink(link) {
    menuLinks.forEach((menuLink) => {
      menuLink.classList.remove("active")
    })

    link.classList.add("active")
  }

  function navigateToSection(event) {
    event.preventDefault()
    const targetId = event.target.getAttribute("href").substring(1)
    showSection(targetId)
    setActiveLink(event.target)
  }

  menuLinks.forEach((link, index) => {
    link.addEventListener("click", navigateToSection)
    link.dataset.index = index + 1
  })

  showSection("home")
  setActiveLink(menuLinks[0])
})

document.addEventListener("DOMContentLoaded", function () {
  const charactersSection = document.getElementById("characters")
  const personagensLink = document.querySelector('a[href="#characters"]')

  personagensLink.addEventListener("click", function (event) {
    event.preventDefault()
    charactersSection.classList.toggle("hidden")
  })
})
