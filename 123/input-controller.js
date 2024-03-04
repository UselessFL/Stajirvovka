  class InputController{
    constructor(target,actionsToBind={}){
        this.target = target;
        this.actionsToBind=actionsToBind;
        this.actions={};
        this.enabled = true;
        this.focused = true;
        this.ACTION_ACTIVATED = 'input-controller:action-activated'
        this.ACTION_DEACTIVATED = 'input-controller:action-deactivated' 
    }
    bindActions(actionsToBind){
       //развернуть объект и соеденить события с кнопками
    }
    enableAction(actionName){
       
    }
    disableAction(actionName){
        
    }
    attach(target){
        target.addEventListener('keydown', ()=> this.enabled=true)
        target.addEventListener('keyUp', ()=> this.enabled=false)
    }
    detach(){
        
    }
    isActionActive(action){
        if (a){
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
    
    '1':{
        keys:[39,68]
    },
    'left':{
        keys:[37,65]
    
}
}
let keyboard = new InputController(document, moves)
keyboard.attach(document)
/* moves.actions
let keyboard = new InputController('body');
keyboard.mapKey('ArrowUp', ()=>{
    console.log('arrowUp')
}) */
