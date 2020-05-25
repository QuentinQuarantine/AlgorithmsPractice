from datetime import datetime

"""
https://app.codesignal.com/challenge/qAYye4nduWhC6dDhR
Your Math teacher takes education very seriously, and hates it when a class is missed or 
canceled for any reason. He even made up the following rule: if a class is missed because 
of a holiday, the teacher will compensate for it with a makeup class after school.

You're given an array, daysOfTheWeek, with the weekdays on which your teacher's classes are scheduled, 
and holidays, representing the dates of the holidays throughout the academic year 
(from 1st of September in year to 31st of May in year + 1). 
How many times will you be forced to stay after school for a makeup class 
because of holiday conflicts in the current academic year?

For your convenience, here is the list of month lengths (from January to December, respectively):

Month lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
Please note that in leap years February has 29 days.

Example

For year = 2015, daysOfTheWeek = [2, 3], and
holidays = ["11-04", "02-22", "02-23", "03-07", "03-08", "05-09"],
the output should be
missedClasses(year, daysOfTheWeek, holidays) = 3.

November 4th of 2015 is a Wednesday, February 23th of 2016 and March 8th of 2016 are Tuesdays, 
and the other holidays fall on Mondays. Classes are scheduled on Wednesdays and Tuesdays, 
so there will be only 3 missed classes.
"""


def missedClasses(year, daysOfTheWeek, holidays):
    numberMissedClasses = 0
    for holiday in holidays:
        [month, day] = holiday.split("-")
        dt = datetime(year if int(month) >= 9 else year +
                      1, int(month), int(day))
        if (dt.weekday() + 1) in daysOfTheWeek and (int(month) > 8 or int(month) < 6):
            numberMissedClasses += 1
    return numberMissedClasses


testParams = [
    [[2015, [2, 3], ["11-04",
                     "02-22",
                     "02-23",
                     "03-07",
                     "03-08",
                     "05-09"]], 3, 'test 1'],
    [[1900, [], []], 0, 'test 2'],
    [[2100, [1, 4, 7], ["10-28",
                        "05-03",
                        "10-02",
                        "05-07",
                        "05-25",
                        "09-04",
                        "10-30",
                        "03-03",
                        "09-02",
                        "11-08"]], 4, 'test 3'],
    [[1956, [1, 4, 6, 7], ["03-17",
                           "04-03",
                           "03-08",
                           "09-18",
                           "05-28",
                           "02-14",
                           "10-20",
                           "01-02",
                           "01-22",
                           "10-04",
                           "02-02",
                           "10-07",
                           "09-30",
                           "05-20",
                           "05-23",
                           "09-22",
                           "01-12",
                           "05-02",
                           "10-21",
                           "03-20"]], 13, 'test 4'],
    [[2067, [1, 2, 3, 4, 5, 6, 7], ["01-20",
                                    "02-09",
                                    "01-25",
                                    "09-01",
                                    "05-30",
                                    "12-24",
                                    "09-05",
                                    "10-15",
                                    "09-25",
                                    "10-23",
                                    "10-10",
                                    "05-29",
                                    "02-05",
                                    "11-19",
                                    "04-28",
                                    "02-17",
                                    "05-04",
                                    "01-26",
                                    "05-31",
                                    "03-19",
                                    "12-31",
                                    "09-26",
                                    "05-19",
                                    "05-14",
                                    "09-03",
                                    "05-21",
                                    "02-08",
                                    "11-09",
                                    "09-09",
                                    "04-21"]], 30, 'test 5'],
    [[2000, [], []], 0, 'test 6'],
    [[1995, [1, 2, 3], ["10-28",
                        "05-26",
                        "09-24",
                        "11-28",
                        "09-17",
                        "03-29",
                        "09-08",
                        "05-13",
                        "10-23",
                        "11-29",
                        "04-26",
                        "10-27",
                        "09-26",
                        "09-09",
                        "12-07"]], 5, 'test 7'],
    [[2045, [1, 2, 3, 5], ["11-12",
                           "09-10",
                           "11-10",
                           "05-12",
                           "05-03",
                           "03-04",
                           "02-14",
                           "12-25",
                           "09-24",
                           "11-17",
                           "09-22",
                           "09-14",
                           "12-04",
                           "01-24",
                           "03-24",
                           "05-26",
                           "09-01",
                           "11-20",
                           "04-30",
                           "03-20",
                           "10-04",
                           "11-21",
                           "01-14",
                           "05-11",
                           "12-03",
                           "11-01"]], 15, 'test 8'],
    [[2014, [2, 3], ["11-04",
                     "02-22",
                     "02-23",
                     "03-07",
                     "03-08",
                     "05-09"]], 1, 'test 9'],
    [[2100, [], []], 0, 'test 10'],
]
