croAlpha = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
word = input()

for i in croAlpha:
    word = word.replace(i, '*')
print(len(word))