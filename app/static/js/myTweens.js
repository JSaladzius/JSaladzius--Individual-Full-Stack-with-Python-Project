
export function cameraRotateX(passedObject) {
     const rx = passedObject.rotation.x
    const tween = new TWEEN.Tween({x:0, y:0, xRotation: rx })
    .to({x:0, y:0, xRotation: -Math.PI/2}, 200)
    .onUpdate((coords)=>{
    passedObject.rotation.x = coords.xRotation  
})
    // .easing(TWEEN.Easing.Exponential.InOut)
    .delay(300)
    // .repeat(Infinity)
    tween.start();
}
export function cameraRotateX2(passedObject) {
    const tween = new TWEEN.Tween({x:0, y:0, xRotation: 0 })
    .to({x:0, y:0, xRotation: Math.PI/2}, 300)
    .onUpdate((coords)=>{
    passedObject.rotation.x = coords.xRotation  
})
    // .easing(TWEEN.Easing.Exponential.InOut)
    .delay(300)
    // .repeat(Infinity)
    tween.start();
}

export function cameraRotateY(passedObject) {
    let rotationY  = passedObject.rotation.y
    const tween = new TWEEN.Tween({x:0, y:0, yRotation: rotationY})
    if(rotationY==0){
        tween.to({x:0, y:0, yRotation: -Math.PI/2}, 300)
    }
    else{
        tween.to({x:0, y:0, yRotation:rotationY - Math.PI/2 }, 300)
        }
    tween.onUpdate((coords)=>{
    passedObject.rotation.y = coords.yRotation  
})
    // .easing(TWEEN.Easing.Exponential.InOut)
    .delay(300)
    // .repeat(Infinity)
    tween.start();
}


export function cameraRotateY2(passedObject) {
    let rotationY  = passedObject.rotation.y
    const tween = new TWEEN.Tween({x:0, y:0, yRotation: rotationY })
    if(rotationY==0){
    tween.to({x:0, y:0, yRotation: Math.PI/2}, 300)
}
else{
    tween.to({x:0, y:0, yRotation:rotationY + Math.PI/2 }, 300)
    }
    tween.onUpdate((coords)=>{
    passedObject.rotation.y = coords.yRotation  
})
    // .easing(TWEEN.Easing.Exponential.InOut)
    .delay(300)
    // .repeat(Infinity)
    tween.start();
}

export function camRotateX(passedObject) {
    let rotationX  = passedObject.rotation.x
    const tween = new TWEEN.Tween({x:0, y:0, xRotation: rotationX})
    if(rotationX==0){
        tween.to({x:0, y:0, xRotation: -Math.PI/2}, 300)
    }
    else{
        tween.to({x:0, y:0, xRotation:rotationX - Math.PI/2 }, 300)
        }
    tween.onUpdate((coords)=>{
    passedObject.rotation.x = coords.xRotation  
})
    // .easing(TWEEN.Easing.Exponential.InOut)
    .delay(300)
    // .repeat(Infinity)
    tween.start();
}

export function camRotateX2(passedObject) {
    let rotationX  = passedObject.rotation.x
    const tween = new TWEEN.Tween({x:0, y:0, xRotation: rotationX})
    if(rotationX==0){
        tween.to({x:0, y:0, xRotation: Math.PI/2}, 300)
    }
    else{
        tween.to({x:0, y:0, xRotation:rotationX + Math.PI/2 }, 300)
        }
    tween.onUpdate((coords)=>{
    passedObject.rotation.x = coords.xRotation  
})
    // .easing(TWEEN.Easing.Exponential.InOut)
    .delay(300)
    // .repeat(Infinity)
    tween.start();
}

export function videoRotate(passedObject) {
    let rotationY  = passedObject.rotation.y
    const tween = new TWEEN.Tween({x:0, y:0, yRotation:rotationY})
    console.log(rotationY);
    if(rotationY==0)(
        tween.to({x:0, y:0, yRotation: Math.PI/2}, 300)    
    )
    else{
        tween.to({x:0, y:0, yRotation:rotationY + Math.PI/2 }, 300)
    }
    tween.onUpdate((coords)=>{
    passedObject.rotation.y = coords.yRotation  
    })
    // .easing(TWEEN.Easing.Exponential.InOut)
    .delay(50)
    // .repeat(Infinity)
    tween.start();
}

export function videoRotate2(passedObject) {
    const tween = new TWEEN.Tween({x:0, y:0, yRotation: Math.PI/2 })
    .to({x:0, y:0, yRotation: Math.PI/4}, 1500)
    .onUpdate((coords)=>{
    passedObject.rotation.y = coords.yRotation  
})
    // .easing(TWEEN.Easing.Exponential.InOut)
    .delay(500)
    // .repeat(Infinity)
    tween.start();
}


export function cubePress(passedObject) {
    const coords ={x:0, y:0 , z:0}
    const tween = new TWEEN.Tween({x:0, y:0, z:-1.5, yRotation: 0 })
    .to({x:0, y:0, z:-1.8 , yRotation: 0}, 50)
    .onUpdate((coords)=>{
    passedObject.position.z = coords.z  
})
    // .easing(TWEEN.Easing.Exponential.InOut)
    // .delay(100)
    // .repeat(Infinity)
    // tween.start();
    
    const tween2= new TWEEN.Tween({x:0, y:0, z:-1.8, yRotation: 0 })
    .to({x:0, y:0, z:-1.5 , yRotation: 0}, 50)
    .onUpdate((coords)=>{
    passedObject.position.z = coords.z  
})
    // .easing(TWEEN.Easing.Exponential.InOut)
    .delay(50)
    // .repeat(Infinity)
    tween.chain(tween2)
    tween.start();
}

export function cubePress2(passedObject) {
    const coords ={x:0, y:0 , z:0}
    const tween = new TWEEN.Tween({x:10, y:2.6 , z:2})
    .to({x:10.2, y:2.6, z:2}, 50)
    .onUpdate((coords)=>{
    passedObject.position.x = coords.x  
})
    const tween2= new TWEEN.Tween({x:10.2, y:2.6 , z:2, yRotation: 0 })
    .to({x:10, y:2.6, z:2 , yRotation: 0}, 50)
    .onUpdate((coords)=>{
    passedObject.position.x = coords.x  
})
    tween.chain(tween2)
    tween.start();
}

export function cubePress3(passedObject) {
    const coords ={x:0, y:0 , z:0}
    const tween = new TWEEN.Tween({x:-10, y:2.6 , z:2})
    .to({x:-10.2, y:2.6, z:2}, 50)
    .onUpdate((coords)=>{
    passedObject.position.x = coords.x  
})
    const tween2= new TWEEN.Tween({x:-10.2, y:2.6 , z:2, yRotation: 0 })
    .to({x:-10, y:2.6, z:2 , yRotation: 0}, 50)
    .onUpdate((coords)=>{
    passedObject.position.x = coords.x  
})
    tween.chain(tween2)
    tween.start();
}

export function cubePress4(passedObject) {
    const coords ={x:0, y:0 , z:0}
    const tween = new TWEEN.Tween({x:-10, y:2.8 , z:2})
    .to({x:-10, y:2.8, z:2}, 50)
    .onUpdate((coords)=>{
    passedObject.position.x = coords.x  
})
    const tween2= new TWEEN.Tween({x:-10.2, y:2.8 , z:2, yRotation: 0 })
    .to({x:-10, y:2.8, z:2 , yRotation: 0}, 50)
    .onUpdate((coords)=>{
    passedObject.position.x = coords.x  
})
    tween.chain(tween2)
    tween.start();
}

export function cubeFly(passedObject) {
    // const coords ={x:0, y:0 }
    const tween = new TWEEN.Tween({x:0, y:0, z:-1.5 , yRotation: 0 })
    .to({x:0, y:7.3, z:1.5 , yRotation: 0}, 2500)
    .onUpdate((coords)=>{
    passedObject.position.y = coords.y  
    passedObject.position.z = coords.z  
    // passedObject.rotation.z = coords.zRotation
})
    // .easing(TWEEN.Easing.Exponential.InOut)
    // .delay(100)
    // .repeat(Infinity)
    tween.start();
}






///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// export function boxMove(geometry){
    
//     function animate (t){
//       requestAnimationFrame(animate);
//       TWEEN.update(t);
//     }
//     requestAnimationFrame(animate);
    
//     const coords ={x:0, y:0}
//     const tween = new TWEEN.Tween(coords)
//         .to({x: 1800, y: 0}, 5000)
//         .easing(TWEEN.Easing.Quadratic.Out)
//         .onUpdate(function(){
//          geometry.style.setProperty('transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px)')
//     }).delay(100)
//     // .start()
//     // .repeat(Infinity)
//     function animate (t){
//       requestAnimationFrame(animate);
//       TWEEN.update(t);
//     }
//     requestAnimationFrame(animate);
    
//     const coords2 ={x:1800, y:0}
//     const tween2 = new TWEEN.Tween(coords2)
//         .to({x: 0, y: 0}, 5000)
//         .easing(TWEEN.Easing.Quadratic.Out)
//         .onUpdate(function(){
//          geometry.style.setProperty('transform', 'translate(' + coords2.x + 'px, ' + coords2.y + 'px)')
//     })
//     .delay(100)
//     tween.chain(tween2)  
//     tween2.chain(tween)  
//     tween.start();
    
// }



// const box = document.createElement('div');
// box.style.setProperty('background-color', '#008800');
// box.style.setProperty('width', '100px');
// box.style.setProperty('height', '100px');
// document.body.appendChild(box);


// const s = document.querySelector(".s")
// const coords ={x:0, y:0}

// const box2 = document.createElement('div');
// box2.style.setProperty('background-color', '#008800');
// box2.style.setProperty('width', '100px');
// box2.style.setProperty('height', '100px');
// s.append(box2)
// boxMove(box2)



  