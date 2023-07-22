'''3 - Modules - Bibliothèques'''

## 3-3 - Calcul statistique

## Moyenne Glissante - Courbe de tendance

# Question 1

Liste_Temps = [0.0, 1.82, 4.67, 6.92, 6.93, 9.57, 9.92, 10.2, 10.52, 11.9, 12.03, 12.07, 12.12, 14.15, 14.27, 14.73, 14.82, 16.17, 16.42, 16.45, 16.63, 17.37, 18.35, 18.65, 18.78, 19.67, 20.78, 22.12, 22.62, 22.7, 22.85, 22.88, 23.43, 23.45, 24.42, 24.52, 24.95, 25.58, 28.83, 29.02, 29.57, 30.13, 30.77, 30.95, 31.52, 32.32, 37.72, 38.2, 39.0, 41.77, 41.77, 42.05, 42.32, 44.53, 46.05, 46.05, 46.67, 46.78, 48.97,53.82, 55.15, 55.23, 55.23, 56.2, 58.9, 58.9, 60.35, 60.8, 60.9, 60.9, 61.98, 62.13, 62.38, 63.12, 63.6, 64.3, 65.58, 65.83, 66.57, 69.63, 70.48, 72.7, 73.3, 73.53, 73.88, 74.9, 75.95, 76.02, 79.0, 80.07, 80.9, 83.35, 84.42, 84.68, 85.17, 86.28, 87.82, 90.82, 92.12, 93.23, 95.18, 95.75, 96.77, 97.17, 98.02, 99.63, 100.02, 101.97, 102.85, 105.22, 106.35, 107.05, 107.8, 107.88, 109.08, 109.22, 109.58, 110.6, 111.52, 114.42, 116.4, 117.98, 118.22, 120.48, 120.67, 120.93, 121.03, 122.1, 124.53, 124.77, 124.83, 125.85, 126.18, 126.42, 126.93, 129.0, 130.02, 130.08, 130.42, 130.93, 132.22, 132.27, 136.2, 136.47, 137.9, 138.9, 142.25, 142.62, 143.38, 144.68, 144.68, 144.7, 145.13, 146.63, 147.03, 147.53, 150.23, 150.53, 150.9, 152.07, 152.57, 153.6, 155.0, 155.78, 155.85, 156.42, 157.53, 157.75,157.75, 159.08, 162.15, 168.87, 170.68, 170.7, 171.17, 171.95, 183.72, 185.5, 185.53, 190.17, 190.18, 190.2, 192.7, 194.97, 195.43, 195.43, 201.33, 201.93, 203.18, 203.73, 204.53, 206.73, 207.97, 211.1, 218.25, 218.88, 218.9, 219.25, 219.25, 219.73, 220.1, 227.4, 227.55, 227.82, 228.35, 232.22, 232.4, 233.35, 233.67, 237.35, 237.55, 237.78, 241.12, 244.45, 247.73, 252.57, 255.1, 255.3]

Liste_Poids = [66.29, 67.42, 66.45, 65.6, 65.59, 67.2, 67.63, 65.57, 67.11, 66.0, 65.88, 66.26, 66.3, 66.04, 65.83, 66.78, 66.32, 67.0, 67.0, 66.23, 65.27, 65.94, 65.99, 65.67, 65.99, 66.94, 67.23, 65.78, 65.74, 66.42, 66.06, 66.85, 66.1, 66.22, 65.7, 66.7, 65.28, 65.5, 65.64, 65.96, 65.98, 65.68, 65.62, 65.61, 65.72, 67.05, 64.75, 65.39, 65.54, 65.56, 65.57, 65.61, 64.99, 65.76, 66.69, 66.18, 66.07, 64.5, 65.03, 67.27, 66.8, 65.7, 65.7, 64.92, 66.22, 66.21, 65.44, 65.84, 66.81, 66.83, 65.61, 66.62, 65.22, 67.25, 67.12, 65.7, 66.41, 65.67, 66.53, 66.16, 66.2, 66.35, 67.26, 65.69, 65.54, 65.72, 65.46, 65.99, 65.0, 66.29, 65.79, 65.66, 66.17, 65.13, 64.85, 65.4, 67.35, 66.34, 65.73, 67.26, 66.73, 67.2, 67.58, 66.08, 66.29, 66.11, 69.35, 66.71, 66.6, 66.84, 67.95, 66.51, 68.5, 66.49, 68.09, 67.14, 67.5, 66.94, 66.37, 67.99, 67.0, 66.18, 65.69, 66.43, 66.53, 66.22, 66.27, 66.2, 66.19, 65.78, 65.73, 65.93, 67.02, 66.68, 65.47, 65.41, 65.27, 65.19, 65.21, 66.06, 65.63, 65.62, 66.86, 65.7, 64.67, 65.04, 64.83, 65.02, 64.79, 64.2, 64.27, 64.89, 65.18, 66.27, 65.51, 64.88, 64.66, 64.87, 65.11, 65.34, 64.25, 64.67, 64.51, 64.18, 64.1, 64.08, 64.65, 64.83, 64.85, 64.31, 64.8, 64.59, 64.37, 64.29, 65.42, 64.33, 64.11, 63.98, 64.11, 63.73, 63.66, 64.99, 63.84, 63.35, 63.71, 63.92, 62.76, 62.58, 63.63, 63.22, 63.21, 62.85, 63.71, 63.49, 62.78, 62.16, 62.22, 62.77, 62.82, 62.36, 62.33, 62.5, 62.85, 62.7, 62.84, 62.75, 62.54, 62.34, 62.63, 63.29,62.45, 62.26, 62.69, 62.81, 61.76, 62.25, 62.59, 62.01]

# Question 1 - Affiche

import matplotlib.pyplot as plt
plt.close('all')
def Affiche(fig,X,Y):
    plt.figure(fig)
    plt.plot(X,Y)
    plt.show()

# Question 2 - Courbe de poids en fonction du temps

Affiche(1,Liste_Temps, Liste_Poids)

# Question 3 - Moyenne

def Moyenne(L):
    N = len(L)
    Somme = 0
    for x in L:
        Somme += x
    return Somme/N

moy = Moyenne([1,3,5,6])
print(moy)
'''3.75'''

# Question 4 - Variance

def Variance(L):
    N = len(L)
    moy = Moyenne(L)
    Somme = 0
    for terme in L:
        Somme += (terme - moy)**2
    return Somme/N

var = Variance([1,3,5,6])
print(var)
'''3.6875'''

# Question 5 - Extraction

def Extraction(L,i,n): # Complexité O(len(L))
    L_extrait = []
    for k in range(len(L)):
        if i-n <= k <= i+n:
            L_extrait.append(L[k])
    return L_extrait

def Extraction(L,i,n): # Complexité O(n)=O(1) donc bien mieux pour la suite
    L_extrait = []
    Ind_Deb = max(0,i-n)
    Ind_Fin = min(i+n+1,len(L)) # Non inclus
    for k in range(Ind_Deb,Ind_Fin):
        L_extrait.append(L[k])
    return L_extrait

test = Extraction([3,2,3,4,4,4,3,2,3,1],3,2)
print(test)
test = Extraction([3,2,3,4,4,4,3,2,3,1],0,2)
print(test)
test = Extraction([3,2,3,4,4,4,3,2,3,1],8,2)
print(test)

# Question 6 - Lissage

def Lissage(L,n):
    L_lissee = []
    for i in range(len(L)):
        L_extrait = Extraction(L,i,n)
        moy = Moyenne(L_extrait)
        L_lissee.append(moy)
    return L_lissee

# Question 7 - Courbe lissée

Liste_Poids_Lissee = Lissage(Liste_Poids,10)
Affiche(1,Liste_Temps, Liste_Poids_Lissee)

# Question 8 - Covariance

def Covariance(X,Y):
    nx = len(X)
    ny = len(Y)
    Z = [X[i]*Y[i] for i in range(nx)]
    cov = Moyenne(Z) - Moyenne(X)*Moyenne(Y)
    return cov

rep = Covariance([1,2,3,5,9],[2,8,5,3,4])
print(rep)
'''-0.8000000000000007'''

# Question 9 - Droite

def Droite(LX, LY):
    a = Covariance(LX,LY)/Variance(LX)
    mx = Moyenne(LX)
    my = Moyenne(LY)
    b = my - a * mx
    return [a,b]

# Question 10 - Objectif

def Objectif(a, b, cible):
    return (cible - b)/a

# Question 11 - A quand les 60 kg ?

N = len(Liste_Poids)
X = Liste_Temps[N-10:]
Y = Liste_Poids[N-10:]
a,b = Droite(X,Y)
t = Objectif(a,b,60)
print(t)

# Question 12 - Affiche_Droite

def Affiche_Droite(fig,a,b,x1,x2):
    X = [x1, x2]
    Y = [a*x1+b, a*x2+b]
    Affiche(fig,X,Y)

Tps = Liste_Temps[N-10]
Affiche_Droite(1,a,b,Tps,t)

# Question 13 - Affichage

Affiche_Droite(1,0,60,0,t)
T_restant = t-Liste_Temps[-1]
print(T_restant)