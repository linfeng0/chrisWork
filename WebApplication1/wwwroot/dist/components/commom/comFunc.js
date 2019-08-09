"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stampPoint = (time) => {
    return time.map((v, k) => parseInt(v)).reduce((sum = 0, v, k) => {
        return sum += v * Math.pow(60, 2 - k);
    }, 0);
};
exports.isLeaveEarly = (timeFirst, timeLast) => {
    const first = exports.stampPoint(timeFirst.split(":"));
    const last = exports.stampPoint(timeLast.split(":"));
    return (last - first) > 32400 ? false : true;
};
//随机生成数组
const randomArray = (length, start, end) => {
    let arr = [];
    while (arr.length < length) {
        let found = false;
        let item = Math.round(Math.random() * (end - start) + start);
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === item) {
                found = true;
            }
        }
        if (found) {
            continue;
        }
        else {
            arr[arr.length] = item;
        }
    }
    // console.log(arr);
    return arr.sort((a, b) => { return a - b; });
};
const numArrToStrArr = (arr) => {
    let arr2 = ['0'];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 10) {
            arr2[i] = ("0" + arr[i]);
        }
        else {
            arr2[i] = ("" + arr[i]);
        }
    }
    // console.log(arr2);
    return arr2;
};
exports.hourArray = () => {
    let arr = randomArray(2, 0, 120);
    let hoursArray = arr.map((v, k) => {
        return 8 + Math.round(v / 60);
    });
    hoursArray = numArrToStrArr(hoursArray);
    return hoursArray.concat(numArrToStrArr(randomArray(4, 9, 20)));
};
exports.minAndSecArray = () => {
    return numArrToStrArr(randomArray(6, 0, 60));
};
exports.randomRecord = (date, hour, min, sec) => {
    let recording = [' '];
    for (let i = 0; i < hour.length; i++) {
        recording[i] = hour[i] + ":" + min[i] + ":" + sec[i];
    }
    ;
    var result = {
        record: {
            date: date,
            recording: recording,
        }
    };
    return result;
};
exports.isWeekends = (year, date) => {
    let weekNo = new Date(year, +date.split("-")[0] - 1, +date.split("-")[1]).getDay();
    return weekNo % 6 === 0 ? true : false;
};
//# sourceMappingURL=comFunc.js.map