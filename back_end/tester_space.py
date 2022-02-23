names = """names from word""".splitlines()

def_vals = """vals from word""".splitlines()

for name, val in zip(names, def_vals):
    if name[0:2] != "//":
        print(name + ": " + val + ",")
    else:
        print(name)
