def summation(number):
    controller = 0
    sum = 0
    if number > 0: # confirming if the the number is positive
        while controller < number:
            controller += 1 
            sum += controller
        return sum

print(summation(2))
print(summation(8))
