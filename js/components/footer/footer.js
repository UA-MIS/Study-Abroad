async function renderFooter(){
    const context = {

    }

    const res = await fetch("/js/components/footer/footer-template.html")
    const textTemplate = await res.text() 

    const template = Handlebars.compile(textTemplate)

    const populatedTemplate = template(context)

    document.getElementById('main-footer').outerHTML = populatedTemplate
}

renderFooter()