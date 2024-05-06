async function renderHeader() {
    const context = {
        links: [{
            href: "/index.html",
            text: "Home"
        },{
            href: "/pages/about.html",
            text: "About"
        }]
    }

    const res = await fetch("/js/components/header/header-template.html")
    const textTemplate = await res.text() 

    const template = Handlebars.compile(textTemplate)

    const populatedTemplate = template(context)

    document.getElementById('main-header').outerHTML = populatedTemplate
}

renderHeader()