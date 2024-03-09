// Вам потрібно реалізувати функцію performBankOperations, яка приймає об'єкт з балансом рахунку та callback-функцію, яка виконує різні банківські операції, а саме: покалсти гроші на рахунок та зняти гроші з рахунку. Функції з банківськими  операціями  є колбеками


const addOperation = ({history}, typeOf, amount) => {
    history.push ({id: history.length + 1, type: typeOf, amount: amount});
}
const deposit = (obj, amount) => {
    obj.balance += amount;
    addOperation (obj, 'deposit', amount);
}
const withdrow = (obj, amount) => {
    if (obj.balance - amount >= 0) {
        obj.balance -= amount;
        addOperation(obj, 'withdraw', amount);
    } else {
        addOperation (obj, 'not enaugh money on balance!', 0);
    }
}
const check = (obj) => {
    return Object.keys(profile).includes('balance') && Object.keys(profile).includes('history');
}
function performBankOperations (obj, callback, amount) {
if (check(obj)) {
    callback(obj, amount);
} 
}

const profile = {
    balance: 0,
    history: []
}

performBankOperations(profile, deposit, 50);
performBankOperations(profile, withdrow, 10);

console.log(profile.history);
console.log(profile.balance);




