export const API_KEY = `AIzaSyAA0m6nBoFxRdSPqsei8o4m1QjLDFZfZ5w`;
 

export const valueConverter = (value) => {
    if (value > 1000000) {
        return Math.floor(value / 1000000) + 'm';
    }
    else if (value >= 1000) {
        return Math.floor(value / 1000) + 'k';
    }
    else {
        return value;
    }
}



