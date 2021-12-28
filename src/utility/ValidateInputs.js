export const validateNumeric = (num, min, max) => {
    if(Object.is(Number(num), NaN)) return false
    return num <= max && num >=min
}

export const removeSpacesFromTextInput = (val) => {
    return val.replace(/\s\s+/g, ' ')
}

export const allowWholeNumbers = (evt) => {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
    } else {
        return true;
    }
}

export const allowIntegers = (e, val) => {
    // console.log(e.keyCode); //keyCodes value
    let keyCode = (e.keyCode ? e.keyCode : e.which);

    // only allow number and one dot
    if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || val.indexOf('.') != -1)) { // 46 is dot
        //console.log("INTEGER INPUT FIRST", e, val)
        e.preventDefault();
    }

    // restrict to 2 decimal places
    if(val!=null && val.indexOf(".")>-1 && (val.split('.')[1].length > 1)){
        //console.log("INTEGER INPUT SECOND", e, val)
        e.preventDefault();
    }
  }

export const validateEmail = (email) => {
    return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)
}

export const removeSpacesFromPasswordInput = (val) => {
    return val.replace(/\s/g, "")
}