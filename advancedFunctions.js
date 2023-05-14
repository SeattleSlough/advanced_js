const first = () => {
    const greet = "hi";
    const second = () => {
        alert( greet );
    };
    second;
};

const newFunc = first();
newFunc();