export const calendars=(year: number, month: number): string[] => {
    let firstDay = new Date(year, month, 1).getDay() % 7;//每月1号是星期几
    let monthNum = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    let monthDaySum = (year % 4) === 0 ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let curMonth:string[] = new Array(monthDaySum[month]);
    for(let i=0;i<curMonth.length;i++){
        curMonth[i]=monthNum[month]+"-"+((i+1<10)?"0":"")+(i+1);
    }
    let preMonth:string[] = new Array(firstDay);
    for(let i = 0;i<preMonth.length;i++){
        let num=monthDaySum[((month-1)>=0?(month-1):11)]-firstDay+i+1;
        preMonth[i] = monthNum[((month-1)>=0?(month-1):11)]+"-"+((num<10)?"0":"")+(num);
    }
    let nextMonth:string[] = new Array((35-curMonth.length-firstDay<0)?42-curMonth.length-firstDay:35-curMonth.length-firstDay)
    for(let i = 0;i<nextMonth.length;i++){
        nextMonth[i] =monthNum[((month+1)>11?0:(month+1))]+"-"+((i+1<10)?"0":"")+(i+1);
    }
    let result = preMonth.concat(curMonth,nextMonth);
    // console.log(result);
    return result;
}