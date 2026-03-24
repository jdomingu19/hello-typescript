"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 3 ? true : false;
    };
    Validations.validateDate = (date) => {
        return !isNaN(date.valueOf()) ? true : false;
    };
})(Validations || (Validations = {}));
console.log(Validations);
console.log(typeof Validations);
console.log(Validations.validateText);
console.log(typeof Validations.validateText);
console.log(Validations.validateText("ABC"));
console.log(typeof Validations.validateText("ABC"));
console.log(Validations.validateText("ABCDE"));
console.log(typeof Validations.validateText("ABCDE"));
console.log(Validations.validateDate);
console.log(typeof Validations.validateDate);
console.log(Validations.validateDate(new Date("invalid-date")));
console.log(typeof Validations.validateDate(new Date("invalid-date")));
console.log(Validations.validateDate(new Date()));
console.log(typeof Validations.validateDate(new Date()));
//# sourceMappingURL=main.js.map