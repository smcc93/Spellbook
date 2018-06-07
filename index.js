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
      const delButton = document.createElement('button');
      delButton.innerHTML += 'Delete';
      spellList.appendChild(delButton);
      delButton.addEventListener('click', (ev) =>{
        ev.preventDefault();
        this.removeSpell;
      })

      return spellList 
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

     

     this.spellArr.push(spell);
     console.log(this.spellArr);

     f.reset() 
    }, 
   spellArr:  [],

   removeSpell: function()
}

book.init()

 