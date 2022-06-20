

# import math

# labels = ["legal", "illigal", "legal", "illigal", 
#             "legal", "illigal", "legal", "illigal"]
# cost = [2,5,3,1,5,7,5,4]
# dailycount = 3

# legalIndex = []

# for i in range(0, len(labels)):
#     if (labels[i]=="legal"):
#         legalIndex.append(i)

# days = math.ceil(len(legalIndex)/dailycount)
# dailyCost = []

# for i in range(0, days):
#     dailyCost.append(sum(cost[i*dailycount:legalIndex[(i+1)*dailycount]]))

# print(dailyCost)
# def timeConversion(s):

#     # Write your code here
#     splited = s.split(":")
#     hour = int(splited[0])
#     minute = splited[1]
#     sec = splited[2][:2]
#     ampm = splited[2][2:]
    
#     if ampm == "PM":
#         hour = hour + 12
#         if hour == 24:
#             hour = 0
#     if ampm == "AM":
#         if hour == 12:
#             hour = 0
    
#     print(f"{hour}:{minute}:{sec}")
    

# timeConversion("12:45:13AM")


# arr = [3,6,2,7,3,5,9,2]

# print(sorted(arr))

def reverseWord(s):
    #your code here
    srev = ""
    n = len(s)
    while (i>0):
        srev = srev + s[n-1]
        i = i - 1
    return srev

reverseWord("Geeks")