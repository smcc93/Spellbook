const book = {

    init: function() {
  
     const form = document.querySelector('form')
  
     form.addEventListener('submit', (ev) => {
  
     ev.preventDefault()
  
     this.handleSubmit(ev)
  
     })
  
    },
    renderProperty: function(name, value) {

     const el = document.createElement('span')

     el.classList.add(name)

     el.textContent = value

     el.setAttribute('title', value)

     return el

    },
    renderItem: function(spell) { 
      
      const properties = Object.keys(spell) 
       
      const childElements = properties.map((prop) => { 
    
      return this.renderProperty(prop, spell[prop]) 
    
     }) 

     const spellList= document.createElement('li');
     childElements.forEach(function(el) { 

       spellList.appendChild(el) 
      })
      return item 
    },     
    handleSubmit: function(ev) { 

     const f = ev.target 
       
     const spell = { 
    
     name: f.spellName.value, 
    
     spellType: f.spellType.value, 
     } 
    
     const item = this.renderItem(spell) 
     const list = document.querySelector('#spellList') 
    
     list.appendChild(item) 

     const spellArr = [];

     spellArr.push(spellName.value);

     const delButton = document.createElement('button');

     const delRef = document.querySelector('#delSpell');

     delRef.appendChild(delButton);

     f.reset() 
    }, 
    
}

book.init()

 