lines = """set actions
""".splitlines()


def find_2nd(string, substring):
    return string.find(substring, string.find(substring) + 1)


# must be in correct format with one line empty between actions
for first_line, second_line, third_line in zip(lines[0::4], lines[1::4], lines[2::4]):
    t = first_line.replace("set", "inc")
    t = t[:t.find("(") + 1] + " numToIncrement = 1 " + t[t.find(")"):]

    l = second_line.replace("SET", "INC")
    l = l[:find_2nd(l, ":") + 1] + " { numToIncrement } }" + l[l.find(";"):]

    x = third_line
    print(t)
    print(l)
    print(x)

    t = first_line.replace("set", "dec")
    t = t[:t.find("(") + 1] + " numToDecrement = 1 " + t[t.find(")"):]

    l = second_line.replace("SET", "DEC")
    l = l[:find_2nd(l, ":") + 1] + " { numToDecrement } }" + l[l.find(";"):]

    x = third_line
    print(t)
    print(l)
    print(x)

    print("\n")
