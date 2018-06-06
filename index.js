const form = document.querySelector('form');

function add(ev){
    ev.preventDefault()
    
    
    const newSpell = ev.target;
    const addSpell = newSpell.spellName.value;

    const dvList = document.querySelector('#spellList');
    const spellList= document.createElement('li');
    spellList.appendChild(document.createTextNode(addSpell));
    dvList.appendChild(spellList);
    newSpell.reset();
}

form.addEventListener('submit', add);

function TypeAdd(ev){
    ev.preventDefault()

    const newType = ev.target;
    const addType = newType.spellType.value;

    const dvTypeList = document.querySelector('#typeList');
    const typeList= document.createElement('li');
    typeList.appendChild(document.createTextNode(addType));
    dvTypeList.appendChild(typeList);

}
form.addEventListener('submit', TypeAdd);
 