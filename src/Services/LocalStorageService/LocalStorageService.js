



export  const WriteToLocalStorageLinkArray=(value)=>{
    const a = ReadFromLocalStorage()
    console.log(`nitz WriteToLocalStorage: ${a}`)

    localStorage.setItem('links' , value)
}




const ReadFromLocalStorage=()=>{

}