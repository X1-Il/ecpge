'''5 - Fonctions récursives'''

## 5-3 - Figures récursives

## Exercice 1 - Figures simples

# Question 1&2 - Logique 1

def triangle_bas(n):
    if n == 0:
        return
    else:
        print("*"*n)
        triangle_bas(n-1)
triangle_bas(5)

def triangle_haut(n):
    if n == 0:
        return
    else:
        triangle_haut(n-1)
        print("*"*n)
triangle_haut(5)

# Question 1&2 - Logique 2

def triangle_bas(n): # Variante possible
    if n == 1:
        return "*"
    else:
        return "*"*n+"\n"+triangle_bas(n-1)
print(triangle_bas(5))

def triangle_haut(n): # Variante possible
    if n == 1:
        return "*"
    else:
        return triangle_haut(n-1)+"\n"+"*"*n
print(triangle_haut(5))

## Exercice 2 - Triangle de Sierpinski

# Question 1 - Milieu

def Milieu(M1,M2):
    X1,Y1 = M1
    X2,Y2 = M2
    X = (X1+X2)/2
    Y = (Y1+Y2)/2
    return [X,Y]

# Question 2 - Sierpinski(n,A,B,C)

import matplotlib.pyplot as plt
plt.close('all')

def Polygon(Liste_Points) :
    X = []
    Y = []
    for Point in Liste_Points :
        X.append(Point[0])
        Y.append(Point[1])
    plt.fill(X,Y,'k')
    plt.show()

from math import sqrt

A = [0,0]
B = [1,0]
C = [0.5,sqrt(3)/2]

def Sierpinski(n,A,B,C):
    if n == 1:
        Polygon([A,B,C])
    else:
        mAB = Milieu(A,B)
        mAC = Milieu(A,C)
        mBC = Milieu(B,C)
        Sierpinski(n-1,A,mAB,mAC)
        Sierpinski(n-1,B,mAB,mBC)
        Sierpinski(n-1,C,mAC,mBC)

plt.figure()
Sierpinski(3,A,B,C)

# Question 3 - Complexité

'''
3 auto appels au rang n-1
O(3^n)
'''

# Question 4 - Sierpinski(n)

def Sierpinski(n):
    def rec(n,A,B,C):
        if n == 1:
            Polygon([A,B,C])
        else:
            mAB = Milieu(A,B)
            mAC = Milieu(A,C)
            mBC = Milieu(B,C)
            rec(n-1,A,mAB,mAC)
            rec(n-1,B,mAB,mBC)
            rec(n-1,C,mAC,mBC)
    rec(n,A,B,C)

plt.figure()
Sierpinski(3)

## Exercice 3 - Cercles concentriques

import matplotlib.pyplot as plt
plt.close('all')

def Cercle(r,c):
    x = 0
    y = 0
    Circle = plt.Circle((x,y),r,color=c)
    plt.gca().add_artist(Circle)

def Affiche(x_min,x_max,y_min,y_max):
    plt.xlim(x_min,x_max)
    plt.ylim(y_min,y_max)
    plt.show()
    plt.gca().set_aspect('equal', adjustable='box')

def Cercles(n): # Version argument r - Cas de base petit cercle
    def Rec(n,r,i):
        c = Colors[(i+1)%2]
        Cercle(r,c)
        if n == 1:
            return
        else:
            r = r - dr
            Rec(n-1,r,i+1)
    dr = 2 / n
    Colors = ['k','w']
    Rec(n,2,1)
    Affiche(-3,3,-3,3)

n = 10
plt.figure()
Cercles(n)

def Cercles(n): # version rayon = n*dr - Cas de base petit cercle
    def Rec(n,i):
        c = Colors[(i+1)%2]
        r = n*dr
        Cercle(r,c)
        if n == 1:
            return
        else:
            Rec(n-1,i+1)
    dr = 2 / n
    Colors = ['r','w']
    Rec(n,1)
    Affiche(-3,3,-3,3)

n = 10
plt.figure()
Cercles(n)

def Cercles(n): # version dont le cas de base est le grand cercle
    def Rec(n):
        c = Colors[(n+1)%2] # On peut utiliser la parité de n car n=1 noir
        if n==1:
            Cercle(2,c)
        else:
            Rec(n-1)
            r = 2-(n-1)*dr
            Cercle(r,c)
    dr = 2 / n
    Colors = ['b','w']
    Rec(n)
    Affiche(-3,3,-3,3)

n = 11
plt.figure()
Cercles(n)

## Exercice 4 - Triangles infinis

# Question 1 - Triangles_Infinis

import matplotlib.pyplot as plt

def Polygon(Liste_Points,Color) :
    X = []
    Y = []
    for Point in Liste_Points :
        X.append(Point[0])
        Y.append(Point[1])
    plt.fill(X,Y,Color)
    plt.show()

from math import sqrt

A = [0,0]
B = [1,0]
C = [0.5,sqrt(3)/2]

def Triangles_Infinis(n,A,B,C,i):
    Polygon([A,B,C],Couleurs[i])
    if n == 1:
        return
    else:
        mAB = Milieu(A,B)
        mAC = Milieu(A,C)
        mBC = Milieu(B,C)
        Triangles_Infinis(n-1,mAB,mAC,mBC,(i+1)%2)

Couleurs = ['k','w']
plt.figure()
Triangles_Infinis(5,A,B,C,0)

# Question 2 - Triangles

import matplotlib.pyplot as plt

def Polygon(Liste_Points,Color) :
    X = []
    Y = []
    for Point in Liste_Points :
        X.append(Point[0])
        Y.append(Point[1])
    plt.fill(X,Y,Color)
    plt.show()

from math import sqrt

A = [0,0]
B = [1,0]
C = [0.5,sqrt(3)/2]

def Triangles(n,A,B,C,i):
    Polygon([A,B,C],Couleurs[i])
    if n == 1:
        return
    else:
        mAB = Milieu(A,B)
        mAC = Milieu(A,C)
        mBC = Milieu(B,C)
        Triangles(n-1,A,mAB,mAC,i)
        Triangles(n-1,B,mAB,mBC,i)
        Triangles(n-1,C,mBC,mAC,i)
        Triangles(n-1,mAB,mAC,mBC,(i+1)%2)

Couleurs = ['k','w']
plt.figure()
Triangles(5,A,B,C,0)

## Exercice 5 - Cercles récursifs

import matplotlib.pyplot as plt

def Cercle(x,y,r):
    Circle = plt.Circle((x,y),r,color='k')
    plt.gca().add_artist(Circle)

def Affiche(x_min,x_max,y_min,y_max):
    plt.xlim(x_min,x_max)
    plt.ylim(y_min,y_max)
    plt.show()
    plt.gca().set_aspect('equal', adjustable='box')

# Question 1 - Bulles 1

def Bulles_1(n):
    def Rec(n,X,Y,R):
        Cercle(X,Y,R)
        if n == 1:
            return
        else:
            Rec(n-1,X,Y-3*R/2,R/2)
            Rec(n-1,X+3*R/2,Y,R/2)
    plt.figure()
    Rec(n,0,0,1)
    Affiche(-2,4,-4,2)

# Question 2 - Bulles 2

def Bulles_2(n):
    def Rec(n,X,Y,R):
        Cercle(X,Y,R)
        if n == 1:
            return
        else:
            d = 3*R/2
            Rec(n-1,X,Y-d,R/2)
            Rec(n-1,X,Y+d,R/2)
            Rec(n-1,X-d,Y,R/2)
            Rec(n-1,X+d,Y,R/2)
    plt.figure()
    Rec(n,0,0,1)
    Affiche(-4,4,-4,4)

def Bulles_2_Aux(n): # Méthode +- ux uy
    def Rec(n,X,Y,R,ux,uy):
        Cercle(X,Y,R)
        if n == 1:
            return
        else:
            d = 3*R/2
            Rec(n-1,X+ux*d,Y+uy*d,R/2,ux,uy) # Premier direction voulue
            Rec(n-1,X+uy*d,Y+ux*d,R/2,uy,ux) # Les deux autres
            Rec(n-1,X-uy*d,Y-ux*d,R/2,-uy,-ux) # Les deux autres
    plt.figure()
    Rec(n,0,0,1,1,0)  # Droite
    Rec(n,0,0,1,-1,0) # Gauche
    Rec(n,0,0,1,0,-1) # Bas
    Rec(n,0,0,1,0,1)  # Haut
    Affiche(-4,4,-4,4)

n = 5
Bulles_1(n)
Bulles_2_Aux(n)

## Exercice 6 - Flocon de von Koch

import matplotlib.pyplot as plt
plt.close('all')

def Polygon(Liste_Points) :
    X = []
    Y = []
    for Point in Liste_Points :
        X.append(Point[0])
        Y.append(Point[1])
    plt.fill(X,Y,'k')
    plt.axis('scaled')
    plt.pause(0.00000001)
    plt.show()

# Question 1 - Unit

from math import sqrt
def Unit(A,B):
    XA,YA = A
    XB,YB = B
    dX,dY = XB-XA,YB-YA
    N = sqrt((dX)**2+(dY)**2)
    Xn,Yn = dX/N,dY/N
    return N,[Xn,Yn]

'''
Unit([0,0],[1,1])
'''

# Question 2 - Triangle

def Triangle(M1,M2):
    X1,Y1 = M1
    X2,Y2 = M2
    d,[Xn,Yn] = Unit(M1,M2)
    d1,d2 = d*1/3,d*2/3
    XP1,YP1 = X1+Xn*d1,Y1+Yn*d1
    XP3,YP3 = X1+Xn*d2,Y1+Yn*d2
    h = (d/3)*sqrt(3)/2
    Xnp,Ynp = -Yn,Xn
    XM,YM = (X1+X2)/2,(Y1+Y2)/2
    XP2,YP2 = XM+Xnp*h,YM+Ynp*h
    return [[XP1,YP1],[XP2,YP2],[XP3,YP3]]

'''
Triangle([0,0],[1,0])
'''

# Question 3 - Rec

def Rec(n,A,B):
    if n == 1:
        return
    else:
        P1,P2,P3 = Triangle(A,B)
        Polygon([P1,P2,P3])
        Rec(n-1,A,P1)
        Rec(n-1,P1,P2)
        Rec(n-1,P2,P3)
        Rec(n-1,P3,B)

'''
A = [0,0]
B = [0.5,sqrt(3)/2]
plt.figure()
Rec(2,A,B)
Rec(3,A,B)
Rec(4,A,B)
'''

# Question 4 - Flocon

def Flocon(n):
    A = [0,0]
    B = [0.5,sqrt(3)/2]
    C = [1,0]
    plt.figure()
    Polygon([A,B,C])
    Rec(n,A,B)
    Rec(n,B,C)
    Rec(n,C,A)

Flocon(6)

# Question 5 - P

'''
A partir d'un périmètre de 3, chaque itération multiplie chaque côté par 4/3
'''

def P(n):
    P0 = 3
    return P0*(4/3)**n

def P(n):
    P = 3
    for i in range(n):
        P *= 4/3
    return P

def P(n): # récursif
    if n==0:
        return 3
    else:
        return P(n-1)*(4/3)

def Affiche(Lx,Ly,leg):
    plt.figure()
    plt.plot(Lx,Ly,label=leg)
    plt.legend()
    plt.show()

Ln = [i for i in range(10)]
LP = [P(n) for n in Ln]
Affiche(Ln,LP,'Périmètre = f(n)')

# Question 6 - S

'''
A partir d'une aire de 1*sqrt(3)/2/3 (bas*hauteur/3), chaque itération ajoute 3 fois la même aire d'un triangle équilatérale de côtés divisés par 3.
'''

def S(n):
    h0 = 1*sqrt(3)/2
    tri = 1*h0/3
    S = tri
    for i in range(n):
        tri = tri/(3*3)
        S += 3*tri
    return S

def S(n):# Récursif
    def rec(n):
        if n==0:
            h = 1*sqrt(3)/2
            S = 1*h/3
            return S,S
        else:
            S,tri = rec(n-1)
            tri = tri/9
            S += 3*tri
            return S,tri
    S,_ = rec(n)
    return S

LS = [S(n) for n in Ln]
Affiche(Ln,LS,'Surface = f(n)')