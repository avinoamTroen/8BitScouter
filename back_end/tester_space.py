import random
ppl = """הלל,נעמה,נחשון,עלמה,אלישע,ירדן,דוד""".split(',')
num = len(ppl)
random.shuffle(ppl)
ppl = ppl[:] + ppl[:1]
for i in range(num):
    print(ppl[i] + '==>' + ppl[i+1])
