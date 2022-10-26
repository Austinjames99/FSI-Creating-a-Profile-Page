
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let titleOne = document.createElement('h3')
titleOne.append('Description:')
dogDetails.append(titleOne)

let dogDesc = document.createElement('p') 
dogDesc.append('This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.')
dogDetails.append(dogDesc)

let titleTwo = document.createElement('h3')
titleTwo.append("Feeding Times:")
dogDetails.append(titleTwo)


let timeOne = document.createElement('li')
timeOne.append('9:00 am')
let timeTwo = document.createElement('li')
timeTwo.append('12:00 pm')
let timeThree = document.createElement('li')
timeThree.append('5:00 pm')
dogDetails.append(timeOne)
dogDetails.append(timeTwo)
dogDetails.append(timeThree)








