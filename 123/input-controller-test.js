import InputController from "./input-controller"

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
/* moves.actions
let keyboard = new InputController('body');
keyboard.mapKey('ArrowUp', ()=>{
    console.log('arrowUp')
}) */
