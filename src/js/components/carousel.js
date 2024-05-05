// We want to find all elements marked as carousels and populate those divs

const carouselElements = document.getElementsByClassName('app-carousel')

carouselElements && carouselElements.forEach(element => {

    // We assume that the divs will be populated with the images already
    // we will set these aside and inject them into the html later, to
    // help prevent repeat of code
    const imageTags = element.innerHTML

    let html = `
        <div id="gallery-item" class="carousel slide mt-50" data-ride="carousel">
            <ol class="carousel-indicators">
    `

    for (let i = 0; i < imageTags.length; i++) {

        // We want to ensure that the first item in the carousel is set to active
        if (i == 0) {
            html += `<li data-target="#gallery-item" data-slide-to="${i}" class="active clay"></li>`
        } else {
            html += `<li data-target="#gallery-item" data-slide-to="${i}" class="clay"></li>`
        }
    }

    html += ` 
        </ol>
            <div class="carousel-inner content">

                <!-- Image -->
                <div class="carousel-item active"> 
                    <img src="assets/img/gallery/01.jpg" alt="exodus" class="img-fluid">
                </div>
    `
    // Injecting image tags that consumer has specified
    for (let i = 0; i < imageTags.Length; i++) {

        // We want the first image to default to active
        if (i === 0) {

            html += '<div class="carousel-item active">'
        } else {
            html += '<div class="carousel-item">'
        }
        html += imageTags[i]
        html += '</class>'
    }
    
    html += `
            </div>
        </div>
    `
});