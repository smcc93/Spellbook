class book {
  constructor(){
    this.spellArr= []
    this.template = document.querySelector('.spell.template')
    this.list = document.querySelector('#spellList')

    this.load()

    const form = document.querySelector('form')
    form.addEventListener('submit', (ev) => {
      this.handleSubmit(ev)
    })
  }

  load() {

    const spellJSON = localStorage.getItem('spellArr')
    const spellArray = JSON.parse(spellJSON)

    if (spellArray) {
      spellArray.forEach(this.addSpell.bind(this))
    }
  }

  save() {

    localStorage.setItem('spellArr', JSON.stringify(this.spellArr))

  }
  renderProperty(name, value) {
    
    const el = document.createElement('span')
    el.textContent = value
    el.classList.add(name)
    el.setAttribute('title', value)

    return el
  }
  renderItem(spell) { 
    const item = this.template.cloneNode(true)

    item.classList.remove('template');
    
    const properties = Object.keys(spell) 
    properties.forEach(property => {
      const el = item.querySelector(`.${property}`)

      if (el) {
        el.textContent = spell[property]
        el.setAttribute('title', spell[property])
      }

     })
    if (spell.favorite) {
      item.classList.add('fav')
     } 
    item.querySelector('button.delete').addEventListener('click', this.removeSpell.bind(this, spell))
    item.querySelector('button.fav').addEventListener('click', this.toggleFavorite.bind(this, spell))
    item.querySelector('button.up').addEventListener('click', this.moveUp.bind(this, spell))
    item.querySelector('button.down').addEventListener('click', this.moveDown.bind(this, spell))

  return item

}
moveDown(spell, ev) {

  const button = ev.target
  const item = button.closest('.spell')
  const i = this.spellArr.indexOf(spell)
  if (i < this.spellArr.length - 1) {  
    this.list.insertBefore(item.nextSibling, item)
    const nextSpell = this.spellArr[i + 1]
    this.spellArr[i + 1] = spell
    this.spellArr[i] = nextSpell
  }
    this.save()
  
}

moveUp(spell, ev) {

  const button = ev.target
  const item = button.closest('.spell')
  const i = this.spellArr.indexOf(spell)
  if (i > 0) {
    this.list.insertBefore(item, item.previousSibling)
    const previousSpell = this.spellArr[i - 1]
    this.spellArr[i - 1] = spell
    this.spellArr[i] = previousSpell
  }
    this.save()
    
  }

  toggleFavorite(spell, ev) {

    const button = ev.target
    const item = button.closest('.spell')
    spell.favorite = item.classList.toggle('fav')

    this.save()
  }

  removeSpell(spell, ev) {

    const button = ev.target
    const item = button.closest('.spell')
    item.parentNode.removeChild(item)
    const i = this.spellArr.indexOf(spell)
    this.spellArr.splice(i, 1)

    this.save()
  }

  addSpell(spell) {

    this.spellArr.push(spell)
    const item = this.renderItem(spell)
    this.list.appendChild(item)
  }
      
    handleSubmit(ev) { 

      ev.preventDefault();
     const f = ev.target     
     const spell = { 
    
     name: f.spellName.value, 
     spellType: f.spellType.value, 

     favorite: false,
     } 
    
     this.addSpell(spell)
     this.save()

     f.reset() 
     f.spellName.focus()
    }
    save() {

      localStorage.setItem('spellArr', JSON.stringify(this.spellArr))
      }
}
const newBook = new book()

 