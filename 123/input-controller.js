  class InputController{
    enabled = true;
    focused = true;
    ACTION_ACTIVATED = 'input-controller:action-activated'
    ACTION_DEACTIVATED = 'input-controller:action-deactivated'

    constructor(target,actionsToBind={}){
        this.target = target;
        this.actionsToBind=actionsToBind; 
    }
    bindActions(actionsToBind){
       //развернуть объект и соеденить события с кнопками
    }
    enableAction(actionName){
        /* this.isActionActive(actionName.keyCode)?'':'' */
        this.enabled = true;
     console.log(actionName.keyCode)
    }
    disableAction(actionName){
        this.enabled = false;
        this.isActionActive(actionName)? '': console.log(this.ACTION_DEACTIVATED,)
    }
    attach(target){
        target.addEventListener('keydown', this.enableAction)
      /*   target.addEventListener('keyup', ()=> this.enabled=false) */
    }
    detach(){
        removeEventListener('keydown', this.disableAction)
    }
    isActionActive(action){
        if (this.enabled==true){
            console.log(action)
            return true
        }
        else{return false}
    }
    isKeyPressed(keyCode){
        if(a){
            return true
        }
        else{
            return false
        }
    }
    
}

const moves ={
    
    'right':{
        keys:[39,68]
    },
    'left':{
        keys:[37,65]
    
}
}
let keyboard = new InputController(document, moves)
keyboard.attach(document)
console.log(keyboard.ACTION_ACTIVATED)
/* moves.actions
let keyboard = new InputController('body');
keyboard.mapKey('ArrowUp', ()=>{
    console.log('arrowUp')
}) */
