using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Calendar
    {
        public string[] calendar(int curYear, int curMonth)
        {
            int firstDay = Convert.ToInt32(new DateTime(curYear, curMonth, 1).DayOfWeek);
            string[] monthNum = new string[] { "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" };
            int[] monthDaySum = new int[12];
            if (curYear % 4 == 0)
            {
                monthDaySum = new int[] { 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
            }
            else
            {
                monthDaySum = new int[] { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
            };
            string[] curMonthDay = new string[monthDaySum[curMonth]];
            for (int i = 0; i < curMonthDay.Length; i++)
            {
                curMonthDay[i] = monthNum + "-" + ((i + 1 < 10) ? "0" : "" + (i + 1));
            }
            string[] preMonth = new string[firstDay];
            for (int i = 0; i < preMonth.Length; i++)
            {
                int num = monthDaySum[((curMonth - 1) >= 0 ? (curMonth - 1) : 11)] - firstDay + i + 1;
                preMonth[i] = monthNum[((curMonth - 1) >= 0 ? (curMonth - 1) : 12)] + "-" + ((num < 10) ? "0" : "") + num;

            }
            string[] nextMonth = new string[((35 - curMonthDay.Length - firstDay < 0) ? 42 - curMonthDay.Length - firstDay : 35 - curMonthDay.Length - firstDay)];
            for (int i = 0; i < nextMonth.Length; i++)
            {
                nextMonth[i] = monthNum[((curMonth + 1) > 11 ? 0 : (curMonth + 1))] + "-" + ((i + 1 < 10) ? "0" : "") + (i + 1);
            }
            string[] result = preMonth.Concat(curMonthDay).Concat(nextMonth).ToArray();
            return result;

        }
    }
    public class Func
    {
        static int[] randomArray(int length, int start, int end)
        {
            int[] arr = new int[0];
            while (arr.Length < length)
            {
                bool found = false;
                Random item = new Random();
                int itemNum = item.Next(start, end);
                for (int j = 0; j < arr.Length; j++)
                {
                    if (arr[j] == itemNum)
                    {
                        found = true;
                    }
                }
                if (found)
                {
                    continue;
                }
                else
                {
                    arr[arr.Length] = itemNum;
                }
                Array.Sort(arr);
            }
            return arr;
        }

        static string[] numArrToStr(IEnumerable<int> arr1)
        {
            string[] arr2 = new string[0];
            foreach (int j in arr1)
            {
                arr2.Append(Convert.ToString(j));
            }
            return arr2;
        }

        public static string[] hourArray()
        {
            return numArrToStr(randomArray(2, 8, 10));
        }

        public static string[] minAndSecArray()
        {
            string[] hours1 = numArrToStr(randomArray(6, 0, 60));
            string[] hours2 = numArrToStr(randomArray(4, 9, 20));
            return hours1.Concat(hours2).ToArray();
        }
    }




    public class MockRecordRepository
    {
        public Record[] Record { get; set; }
        public MockRecordRepository()
        {
            Record = new List<Record>() {
                new Record() { date = "07-28", recording =new string[]{"09:05:23", "10:12:29", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "10:12:29", "10:35:36", } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "10:12:29", "10:35:36" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "10:12:29", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "10:12:29", "10:35:36","17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "10:12:29", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-28", recording =new string[]{"10:12:29", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-28", recording =new string[]{"09:05:23", "10:12:29",  "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "10:12:29", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"08:05:23", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "10:12:29", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23",  "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-28", recording =new string[]{"09:05:23", "10:12:29", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-28", recording =new string[]{"09:05:23", "10:12:29", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "10:12:29", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "10:12:29", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"12:05:23", "10:12:29", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "10:12:29", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-28", recording =new string[]{"09:05:23", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-28", recording =new string[]{"08:05:23", "10:12:29", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "10:12:29", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"03:05:23", "10:12:29", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "10:12:29", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "10:12:29", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "10:12:29", "17:56:58" } },
                new Record() { date = "07-28", recording =new string[]{"09:05:23", "10:12:29", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-28", recording =new string[]{"09:05:23", "10:12:29", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "10:12:29", "10:35:36","16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "10:12:29", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "10:12:29",  "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-29", recording =new string[]{"09:05:23", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
                new Record() { date = "07-28", recording =new string[]{"09:05:23", "10:12:29", "10:35:36", "13:45:49", "16:48:54", "17:56:58" } },
            }.ToArray();


        }
    }
}