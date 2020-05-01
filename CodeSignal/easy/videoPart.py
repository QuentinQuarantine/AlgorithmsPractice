"""
https://app.codesignal.com/challenge/aesrryCpibT2mevy6 

You have been watching a video for some time. Knowing the total video duration find out what portion of the video you 
have already watched.

Example
For part = "02:20:00" and total = "07:00:00", the output should be
videoPart(part, total) = [1, 3].
You have watched 1 / 3 of the whole video.

Input/Output
[execution time limit] 4 seconds (py3)
[input] string part
A string of the following format "hh:mm:ss" representing the time you have been watching the video.
[input] string total
A string of the following format "hh:mm:ss" representing the total video duration.
[output] array.integer
An array of the following format [a, b] (where a / b is a reduced fraction).
"""


def toSeconds(time):    
    hours, minutes, seconds = time.split(":")
    return int(hours) * 3600 + int(minutes) * 60 + int(seconds)
    
def videoPart(part, total):
    seconds_part = toSeconds(part)
    seconds_total = toSeconds(total)
    i = 2
    while i <= seconds_part:
        while seconds_part % i == 0 and seconds_total % i == 0:
            seconds_part = seconds_part // i
            seconds_total = seconds_total // i
        i+=1
    return [seconds_part, seconds_total]


# UNIT TESTS
def testCase(fn):
    def tryCase(params1, params2, expected, name):
        result = fn(params1, params2)
        assert result == expected, "%s: params: %s; expected: %s; result: %s" % (name, [params1, params2], expected, result)
    return tryCase

tc = testCase(videoPart)

tc("00:00:07", "00:00:13", [7, 13], "prime factors test")
tc("00:00:30", "00:01:00", [1, 2], "minute test") 
