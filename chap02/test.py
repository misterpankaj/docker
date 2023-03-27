num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

if num1 > num2:
    max_num = num1
    min_num = num2
else:
    max_num = num2
    min_num = num1

print("Maximum number is", max_num)
print("Minimum number is", min_num)