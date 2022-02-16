export const changeArray = (arr:[],dragged:never) => {
    const {removedIndex, addedIndex, payload} = dragged;
    if (removedIndex === null && addedIndex === null) return arr

    const result = [...arr]        
    let itemToAdd = payload

    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0]
      }
    
      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd)
      }
    
      return result
}   