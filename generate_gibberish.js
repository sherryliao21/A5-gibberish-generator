// assign constants
const characterList = require('./characters.json')
const engineer = characterList.results[0]
const designer = characterList.results[1]
const entrepreneur = characterList.results[2]
const phrase = characterList.phrase

function generateIndex(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function generateGibberish(options) {

  // create a collection to store the options user picked
  if (options.engineer || options.designer || options.entrepreneur) {
    let collection = ['身為一個']
    // start generating gibberish
    if (options.engineer === 'on') {
      let gibberishTask = generateIndex(engineer.task)
      let gibberishPhrase = generateIndex(phrase)
      collection = collection.concat(engineer.title + '，' + gibberishTask + gibberishPhrase)
    }
    if (options.designer === 'on') {
      let gibberishTask = generateIndex(designer.task)
      let gibberishPhrase = generateIndex(phrase)
      collection = collection.concat(designer.title + '，' + gibberishTask + gibberishPhrase)
    }
    if (options.entrepreneur === 'on') {
      let gibberishTask = generateIndex(entrepreneur.task)
      let gibberishPhrase = generateIndex(phrase)
      collection = collection.concat(entrepreneur.title + '，' + gibberishTask + gibberishPhrase)
    }
    // return the gibberish
    return collection.join('')
  } else {
    return '選項不能為空，請先勾選一項'
  }
}

module.exports = generateGibberish