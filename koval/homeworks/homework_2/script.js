var inputList = document.getElementsByTagName('input');
for (i = 0; i < (inputList.length); i++) {
    inputList[i].onfocus = remove_err;
    inputList[i].onblur = validation;
}

function remove_err() {
    this.classList.remove('error');
}

function validation() {
    if (this.value == "") {
        this.classList.add('error')
    }

}