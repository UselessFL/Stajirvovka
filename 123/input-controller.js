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
       ''
    }
    enableAction(actionName){
        /* if(this.isActionActive(actionName)){
            this.actionsToBind.actionName.keys = actionNames;
        } */
        console.log(actionName)
    }
    disableAction(actionName){
        if(!this.isActionActive(actionName)){

        }
    }
    attach(target){
        target.addEventListener('keydown',  /* (event)=> this.bindActions(event.key)  */ (event)=>this.enableAction(event.key))
    }
    detach(){
        
    }
    isActionActive(action){
        if (action){
            return true
        }
        else{return false}
    }
    isKeyPressed(keyCode){
        if(key == keyCode){
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
