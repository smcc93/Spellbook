const form = document.querySelector('form');

function add(ev){
    ev.preventDefault()
        
    const newSpell = ev.target;
    const addSpell = newSpell.spellName.value;
    const addType = newSpell.spellType.value;

    const dvList = document.querySelector('#spellList');
    const spellList= document.createElement('li');

    const dvtypeList = document.querySelector('#typeList');
    const typeList = document.createElement('li');
    
    typeList.appendChild(document.createTextNode(addType));
    spellList.appendChild(document.createTextNode(addSpell));
    dvList.appendChild(spellList);
    dvtypeList.appendChild(typeList);
    newSpell.reset();
    
}

form.addEventListener('submit', add);

 