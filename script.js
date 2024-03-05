document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section")
  const menuLinks = document.querySelectorAll("#menu a")

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

  document.getElementById("nextButton").addEventListener("click", nextStory)

  // Show the initial section
  showSection("story1")
  setActiveLink(menuLinks[0])

})

document.addEventListener("DOMContentLoaded", function () {
  const charactersSection = document.getElementById("characters")
  const personagensLink = document.querySelector('a[href="#characters"]')

  personagensLink.addEventListener("click", function (event) {
    event.preventDefault()
    charactersSection.classList.toggle("hidden");
  })
})

document.addEventListener("DOMContentLoaded", function () {
  // ...

  const story1Link = document.querySelector('a[href="#story1"]')
  const story1Complete = document.querySelector("#story1 .hidden")

  story1Link.addEventListener("click", function (event) {
    event.preventDefault()
    story1Complete.classList.toggle("hidden")
  })

  const story2Link = document.querySelector('a[href="#story2"]')
  const story2Complete = document.querySelector("#story2 .hidden")

  story2Link.addEventListener("click", function (event) {
    event.preventDefault()
    story2Complete.classList.toggle("hidden")
  })

  const story3Link = document.querySelector('a[href="#story3"]')
  const story3Complete = document.querySelector("#story3 .hidden")

  story3Link.addEventListener("click", function (event) {
    event.preventDefault()
    story3Complete.classList.toggle("hidden")
  })

  const story4Link = document.querySelector('a[href="#story4"]')
  const story4Complete = document.querySelector("#story4 .hidden")

  story4Link.addEventListener("click", function (event) {
    event.preventDefault()
    story4Complete.classList.toggle("hidden")
  })


  // Repita o padrão para outras histórias, conforme necessário.
})
