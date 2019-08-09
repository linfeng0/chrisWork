import { stateItem } from '../content-bar/index'
export const stampPoint = (time: string[]) => {
    return time.map((v, k) => parseInt(v)).reduce((sum = 0, v, k) => {
        return sum += v * Math.pow(60, 2 - k)
    }, 0)
}

export const isLeaveEarly = (timeFirst: string, timeLast: string): boolean => {
    const first = stampPoint(timeFirst.split(":"))
    const last = stampPoint(timeLast.split(":"))
    return (last - first) > 32400 ? false : true
}


//随机生成数组
const randomArray = (length: number, start: number, end: number): number[] => {
    let arr = [];
    while (arr.length < length) {
        let found = false;
        let item = Math.round(Math.random() * (end - start) + start);
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === item) {
                found = true
            }
        }
        if (found) {
            continue;
        } else {
            arr[arr.length] = item;
        }
    }
    // console.log(arr);
    return arr.sort((a, b) => { return a - b });
}

const numArrToStrArr = (arr: number[]): string[] => {
    let arr2 = ['0'];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 10) {
            arr2[i] = ("0" + arr[i])
        } else {
            arr2[i] = ("" + arr[i])
        }
    }
    // console.log(arr2);
    return arr2
}

export const hourArray = (): string[] => {
    let arr = randomArray(2, 0, 120);
    let hoursArray: number[] | string[] = arr.map((v, k) => {
        return 8 + Math.round(v / 60)
    })
    hoursArray = numArrToStrArr(hoursArray)
    return hoursArray.concat(numArrToStrArr(randomArray(4, 9, 20)))
}

export const minAndSecArray = (): string[] => {
    return numArrToStrArr(randomArray(6, 0, 60))
}


export const randomRecord = (date: string, hour: string[], min: string[], sec: string[]): stateItem => {
    let recording = [' '];
    for (let i = 0; i < hour.length; i++) {
        recording[i] = hour[i] + ":" + min[i] + ":" + sec[i];
    };
    var result = {
        record: {
            date: date,
            recording: recording,
        }
    };

    return result;
}

export const isWeekends = (year: number, date: string): boolean => {
    let weekNo: number = new Date(year, +date.split("-")[0] - 1, +date.split("-")[1]).getDay();
    return weekNo % 6 === 0 ? true : false
}