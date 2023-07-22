'''4 - Algorithmes dichotomiques'''

## 4-4 - Maximum

# Question 1

from math import sin,pi
def f(x):
    return sin(x*pi/180)

# Question 2

from matplotlib import pyplot as plt
plt.close('all')
def Affiche(fig,Lx,Ly):
    plt.figure(fig)
    plt.plot(Lx,Ly)
    plt.show()

# Question 3

Lx = [i for i in range(181)]
Ly = [f(x) for x in Lx]
Affiche(1,Lx,Ly)

# Question 4

def Max(f,a,b,eps):
    fa = f(a)
    fb = f(b)
    c = (a+b)/2
    fc = f(c)
    while abs(b-a)>eps:
        print("eps:"+str(abs(b-a))+">"+str(eps))
        ac = (a+c)/2
        cb = (c+b)/2
        fac = f(ac)
        fcb = f(cb)
        if fac > fa and fac > fc:
            b,c = c,ac
            fb,fc = fc,fac
        elif fc > fac and fc > fcb:
            a,b = ac,cb
            fa,fb = fac,fcb
        elif fcb > fc and fcb > fb:
            a,c = c,cb
            fa,fc = fc,fcb
        else:
            erreur
    return a,fa

# Question 5

a,b,eps = 0,180,0.001
xm,ym = Max(f,a,b,eps)
print("x:",xm)
print("Max:",ym)