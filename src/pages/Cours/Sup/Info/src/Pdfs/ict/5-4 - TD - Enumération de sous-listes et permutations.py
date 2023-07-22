'''5 - Fonctions récursives'''

## 5-4 - Enumération de sous-listes et permutations

# Question 1: Toutes les combinaisons

def Enum_T(L,k):
    '''Sous listes de L à k éléments'''
    if k==1:
        return [[t] for t in L]
    else:
        Res = []
        for i in range(len(L)):
            Terme = L[i]
            LL = L[:i]+L[i+1:]
            E = Enum_T(LL,k-1)
            for e in E:
                e.append(Terme)
                Res.append(e)
        return Res

L = [1,2,3,4]
k = 3
Res = Enum_T(L,k)
Res.sort()
print(Res)

# Question 2: Combinaisons uniques

def Enum_U(L,k):
    '''Sous listes de L à k éléments'''
    if k==1:
        return [[t] for t in L]
    else:
        Res = []
        for i in range(len(L)):
            Terme = L[i]
            '''' Deux possibilités '''
            LL = L[:i]
            #LL = L[i+1:]
            E = Enum_U(LL,k-1) # Penser à changer T en U
            for e in E:
                e.append(Terme)
                Res.append(e)
        return Res

'''A chaque fois qu'un terme a été traité, on ne l'inclue pas dans la suite pour ne pas retrouver d'autre solutions où il serait présent'''

L = [1,2,3,4]
k = 3
Res = Enum_U(L,k)
Res.sort()
print(Res)

# Application 1 - Digicode

# Cas d'un digicode sans ordre - 10 touches - Code à 4 chiffres

L = [0,1,2,3,4,5,6,7,8,9]
k = 4
Combinaisons = Enum_U(L,k)
Nb = len(Combinaisons)

from math import factorial as fact
n = len(L)
Calc = int(fact(n)/(fact(k)*fact(n-k))) # p parmi n

print('Digicode sans ordre')
print(Combinaisons)
print('Calcul théorique: ',Calc)
print('Nb trouvé: ',Nb)

# Cas d'un digicode avec ordre - 10 touches - Code à 4 chiffres

L = [0,1,2,3,4,5,6,7,8,9]
k = 4
Combinaisons = Enum_T(L,k)
Nb = len(Combinaisons)

from math import factorial as fact
n = len(L)
Calc = int(fact(n)/(fact(k)*fact(n-k)))*fact(k) # p parmi n

print('Digicode avec ordre')
print('Calcul théorique: ',Calc)
print('Nb trouvé: ',Nb)

L = [1,5,6,7]
k = 4
Combinaisons = Enum_T(L,k)
print(Combinaisons)

# Application 2 - Alphabet

def Enum_T_STR(STR,k):
    '''Sous listes de L à k éléments'''
    if k==1:
        Res = [t for t in STR]
        return Res
    else:
        Res = []
        for i in range(len(STR)):
            Terme = STR[i]
            LL = STR[:i]+STR[i+1:]
            E = Enum_T_STR(LL,k-1)
            for e in E:
                e += Terme
                Res.append(e)
        return Res

STR = 'vrboa'
k = 5
Res = Enum_T_STR(STR,k)
Res.sort()
print(Res)

'''bravo'''

# Recherche automatique de tous les mots possibles

def Creation_LM():
    fichier = open('5-4 - TD - Dictionnaire.txt','r')
    Dictionnaire = []
    for ligne in fichier:
        ligne = ligne.strip()
        Dictionnaire.append(ligne)
    fichier.close()
    return Dictionnaire

Liste_Mots = Creation_LM()

STR = 'vrboa'

Taille = len(STR)
Liste = []
for k in range(Taille):
    Res = Enum_T_STR(STR,k+1)
    for mot in Res:
        if mot in Liste_Mots:
            Liste.append(mot)
            print(mot)
print(Liste)

'''Des doubons peuvent apparaître si on répète plusieurs fois les mêmes lettres dans STR, c'est normal...'''
