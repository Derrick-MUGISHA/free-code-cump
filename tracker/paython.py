def getSleepHours(day):  
    if day == "Monday":  
        return 8  
    elif day == "Tuesday":  
        return 7  
    elif day == "Wednesday":  
        return 6  
    elif day == "Thursday":  
        return 5  
    elif day == "Friday":  
        return 4  
    elif day == "Saturday":  
        return 9  
    elif day == "Sunday":  
        return 10  
    else:  
        return "Not a valid day"  

        print(getSleepHours("Monday")) 
print(getSleepHours("Thursday"))  
print(getSleepHours("Friday"))   