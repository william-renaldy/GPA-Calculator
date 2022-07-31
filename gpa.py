def calculate(grade_list: list, credit_list: list):
    totalPoints = 0.0
    totalcredits = 0
    gpa = 0.0

    if 0 in grade_list:
        while True:
            try:
                credit_list.pop(grade_list.index(0))
                grade_list.remove(0)
            except ValueError:
                break

    if 0 in credit_list:
        while True:
            try:
                grade_list.pop(credit_list.index(0))
                credit_list.remove(0)
            except ValueError:
                break
            
    for grade,credit in zip(grade_list,credit_list):

        totalPoints += grade * credit
        totalcredits += credit

    try:
        gpa = totalPoints/totalcredits
    except ZeroDivisionError:
        pass

    return gpa


if __name__ == "__main__":
    print(calculate([10,9,10],[4,3,0]))