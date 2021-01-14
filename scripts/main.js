let dictionary = [];
let containsWord;

function addWord() {
    let aw=document.getElementById('addW').value;
    if (dictionary.indexOf(aw)===-1) {
        dictionary.push(aw);
        alert("The word "+aw+" was added to the dictionary");  
    } else {
        alert('The word '+aw+' already exists in the dictionary');
    }
}

function searchWord() {
    let sw = document.getElementById('searchW').value;
    containsWord= (dictionary.indexOf(sw)===-1) ? (alert("The dictionary does not contain the word "+sw)) : (alert("The dictionary contains the word "+sw));
}