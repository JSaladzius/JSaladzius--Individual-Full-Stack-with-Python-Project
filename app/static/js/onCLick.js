let currentIntersect = null

export function onClick(passedObject){
    window.addEventListener("click", (event) => {
      if (currentIntersect) {
        if (currentIntersect.object === passedObject) {
          console.log("yesyesyes");
  
        }  
      }
    })
  }