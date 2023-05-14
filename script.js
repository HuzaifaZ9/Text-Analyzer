console.log("heel");
uppercase.addEventListener("click",()=>{
    inpText.value =inpText.value.toUpperCase()
})


lowercase.addEventListener("click", ()=>{
    inpText.value = inpText.value.toLowerCase()
})

removeextraspaces.addEventListener("click", ()=>{
    inpText.value = inpText.value.replace(/\s+/g,' ').trim();
})

inpText.addEventListener("input",() =>{
    console.log("changed")
    charCount.innerText = inpText.value.length
    wordCount.innerText = inpText.value.trim().split(" ").length
})

