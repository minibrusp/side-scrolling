

const photosAPI = 'https://picsum.photos/v2/list?page=18&limit=5'

const getPhotos = async api => {
    const response = await fetch(api)
    const photos = await response.json()
    const blocks = document.querySelectorAll('.block')

    photos.map(photo => {
        let index = photos.indexOf(photo)
        let currentBlock = blocks[index]

        currentBlock.style.backgroundImage = `url(${photos[index].download_url})`

    })
}

getPhotos(photosAPI)


// unfin

const lastBlock = document.querySelector('.block:last-of-type')
const h1s = document.querySelectorAll('h1')
const container1 = document.querySelector('.container')
const blocks1 = document.querySelector('.blocks')

const screenMove = () => {
    
    console.log(container1.getBoundingClientRect().x)

    window.requestAnimationFrame(screenMove)
}

window.requestAnimationFrame(screenMove)
