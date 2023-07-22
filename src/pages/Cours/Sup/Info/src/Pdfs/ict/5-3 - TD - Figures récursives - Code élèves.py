'''
Pour copier/coller ce code, placez bien votre souris entre le 1 (numéro de ligne) et le f de from afin de ne pas récupérer les numéros de lignes
'''

## Exercice 2 - Sierpinski

from matplotlib import pyplot as plt
plt.close('all')

def Polygon(Liste_Points) :
    X = []
    Y = []
    for Point in Liste_Points :
        X.append(Point[0])
        Y.append(Point[1])
    plt.fill(X,Y,'k')
    plt.show()

A = [0,0]
B = [1,1]
C = [2,0]

Polygon([A,B,C])

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

Cercle(2,'k')
Cercle(1,'w')
Affiche(-3,3,-3,3)
