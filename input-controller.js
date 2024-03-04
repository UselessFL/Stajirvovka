class InputController{
    //публичные переменные 
   
    constructor(target,actionsToBind={}){
        this.target = target;
        this.actions={};
        this.enabled = true;
        this.focused = true;
         this.ACTION_ACTIVATED = 'input-controller:action-activated'
        this.ACTION_DEACTIVATED = 'input-controller:action-deactivated'
        this.bindActions (actionsToBind);
       
    }
/*     initKeyboard(){
    
        
        document.addEventListener('keydown', (event)=>{
            this.handleInput(event.key)
        })
    }
    handleInput(key){
        if(this.keyMap[key]){
            this.keyMap[key]()
        }
    }
    mapKey(key,action){
        this.keyMap[key] = action;
    }
    unmapKey(key){
        delete this.keyMap[key]
    } */

    /* bindActions(actionsToBind){
        this.enableAction(actionsToBind.actions)
    }
    enableAction(actionName){
        this.isActionActive? actionName.:' '
    }
    disableAction(actionName){

    }
    attach(target){
        target.addEventListener('keydown', this.bindActions(this.actionsToBind))
    }
    detach(){
        
    }
    isActionActive(action){

        return
    }
    isKeyPressed(keyCode){
        return
    } */
    bindActions(actionsToBind){
        for(const actionName in actionsToBind){
            const action = actionsToBind[actionName];
        }
        this.actions[actionName] = {
            keys:[...action.keys]
        }
    }
    enableAction(actionName){
        if(this.actions[actionName]){
            this.actions[actionName].enabled = true;
        
        }
    }
    disableAction(actionName){

    }
    attach(target){
        target.addEventListener('keydown', this.bindActions(this.actionsToBind))
    }
    detach(){
        
    }
    isActionActive(actionName){
        const action = this.actions[actionName];
        if(!action.enabled || this.focused){
            return false
        }
        for(const key of actions.keys){
            if(this.keyState[key]){
                return true
            }
        }
        
    }
    isKeyPressed(keyCode){
        return
    }
}
const moves ={
    actions:{
    'right':{
        keys:[39,68]
    },
    'left':{
        keys:[37,65]
    }
    }
}
moves.actions
let keyboard = new InputController('body');
keyboard.mapKey('ArrowUp', ()=>{
    console.log('arrowUp')
})