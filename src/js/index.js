import '../css/index.scss'
import { aaa } from './common.js'
// 渲染页面
let a = 'red'
console.log('%c你好吗', `color: ${a};`)
console.log('%c我不好', 'color: green;')
console.log('%c你好吗', 'color: red;')
console.log('%c我不好', 'color: green;')
aaa()
var sett = new Set([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6]);
var arr = [...sett];
var sym = Symbol();
console.log(arr.includes(1), 5 ** 5)

console.log([...sett]);

function timeout1(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    await timeout1(ms);
    console.log(value);
}

asyncPrint('hello world', 1000);

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(100).then((value) => {
    console.log(value);
});