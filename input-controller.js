class InputController{
    //публичные переменные 
   
    constructor(target,actionsToBind={}){
        this.target = target;
        this.actionsToBind=actionsToBind;
        this.actions={};
        this.enabled = true;
        this.focused = true;
         this.ACTION_ACTIVATED = 'input-controller:action-activated'
        this.ACTION_DEACTIVATED = 'input-controller:action-deactivated'
        /* this.bindActions (actionsToBind); */
       
    }


    bindActions(actionsToBind){
        this.enableAction(actionsToBind.actions[actionName])
    }
    enableAction(actionName){
        if(this.isActionActive(actionName)){
            
        }
    }
    disableAction(actionName){

    }
    attach(target){
        target.addEventListener('keydown', this.bindActions(this.actionsToBind))
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
    
    'right':{
        keys:[39,68]
    },
    'left':{
        keys:[37,65]
    }
    
}
moves.actions
let keyboard = new InputController('body');
keyboard.mapKey('ArrowUp', ()=>{
    console.log('arrowUp')
})