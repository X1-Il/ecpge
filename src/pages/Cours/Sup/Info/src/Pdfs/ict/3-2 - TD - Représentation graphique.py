'''3 - Modules - Bibliothèques'''

## 3-2 - Représentation Graphique

## Exercice 1 - Représentation graphique simple

import matplotlib.pyplot as plt
plt.close('all')
from math import sqrt

N = 1001
Lx = [2*i/(N-1) for i in range(N)]

f = lambda x : x**2
Ly1 = [f(x) for x in Lx]

g = lambda x : sqrt(x)
Ly2 = [g(x) for x in Lx]

plt.figure(1)
plt.plot(Lx,Ly1)
plt.plot(Lx,Ly2)
plt.show()

# Le tout avec une fonction

def affiche(fig,Lx,Ly):
    plt.figure(fig)
    plt.plot(Lx,Ly)
    plt.show()

affiche(2,Lx,Ly1)
affiche(3,Lx,Ly2)

## Exercice 2 - Représentation graphique depuis un fichier

Nom_Fichier = '3-2 - TD - Représentation graphique - Positions carres.txt '
fichier = open(Nom_Fichier)
fichier.readline() # Sans la première ligne
Liste_Lignes = fichier.readlines()
fichier.close()

Lt,LX,LY,LZ = [],[],[],[]
for ligne in Liste_Lignes:
    ligne = ligne.strip() # Non obligatoire car float
    t,x,y,z = ligne.split()
    t,x,y,z = float(t),float(x),float(y),float(z)
    Lt.append(t)
    LX.append(x)
    LY.append(y)
    LZ.append(z)

import matplotlib.pyplot as plt
plt.close('all')
def affiche(fig,Lx,Ly):
    plt.figure(fig)
    plt.plot(Lx,Ly)
    plt.show()

affiche(1,Lt,LX)
affiche(2,Lt,LY)
affiche(3,LX,LY)

## Exercice 3 - Illustration de la loi de Benford

# Question 1 - liste_chiffre

Nom_Fichier = '3-2 - TD - Représentation graphique - Balance commune 2018 court.csv'
fichier = open(Nom_Fichier,'r')
fichier.readline() # Lecture d'une première ligne

liste_chiffre = []
for ligne in fichier.readlines():
    ligne = ligne.strip()
    ligne = ligne.split(',') # Attention, certaines lignes peuvent avoir 5 termes
    solde = ligne[-1]
    if solde[0] == '-':
        chiffre = int(solde[1])
    else:
        chiffre = int(solde[0])
    if chiffre != 0:
        liste_chiffre.append(chiffre)
fichier.close()

# Question 2 - Histogramme

import matplotlib.pyplot as plt
plt.close('all')

plt.figure()
plt.hist(liste_chiffre,bins=9)
plt.show()

# Question 3 - Liste des ni

Lni = [0]*9
nb_val = 0
for x in liste_chiffre:
    Lni[x-1] += 1
    nb_val += 1
print(Lni)

# Question 4 - Fréquences

Lf = []
for ni in Lni:
    freq = round(100*ni/nb_val,1)
    Lf.append(freq)

print(Lf)

'''
[30.3, 18.1, 12.4, 9.6, 7.9, 6.6, 5.7, 4.9, 4.5]
C'est pas loin de la prévision du tableau sur wikipédia:
30.1  17.6  12.5  9.7  7.9  6.7  5.8  5.1  4.6
'''