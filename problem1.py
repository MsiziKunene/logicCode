def square_sum(list):
    sum = 0 # this variable will store the sum
    for x in list:
        sum += x*x #updating sum with squared values and get the total
    return sum


a = [1,2,2]
print(square_sum(a))
    