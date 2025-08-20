
def starWars():
    x = 997
    y = 312
    z = 663
    while((10*x) > y):
        x = (y * z) % 10000
        y = (3 * z) % 10000
        z = (7 * z) % 10000 
    print(x, y, z)

def tonyStarks(nombre):
    i = 0
    res = 0
    while(i < nombre):
        if(i % 3 == 0 or i % 5 == 0):
            res += i
        i += 1
    print(res)
tonyStarks(1435)