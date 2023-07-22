'''12 - Fichiers textes'''

## 12-1 - Anagrammes

# Question 1 - f_Open(Nom_Fichier)

def f_Open(Nom_Fichier):
    fichier = open(Nom_Fichier,"r")
    Res = []
    for ligne in fichier:
        Nom = ligne.strip() # Enlève les \n
        Res.append(Nom)
    fichier.close()
    return Res

# Question 2 - f_Anagramme(Nom)

from random import randint as rand
def f_Anagramme(Nom):
    Anagramme = ""
    Taille = len(Nom)
    Ind_Max = Taille
    for i in range(Taille): # Cf remarque
        Ind = rand(0,Ind_Max-1)
        Lettre = Nom[Ind]
        Anagramme += Lettre
        Nom = Nom[:Ind]+Nom[Ind+1:]
        Ind_Max -= 1
    return Anagramme

'''Remarque: on peut utiliser Taille partout, le for ira jusqu'à la valeur initiale de Taille, mais c'est plus propre avec Ind_Max'''

# Question 3 - f_Liste_Ana(Nom,n)

def f_Liste_Ana(Nom,n):
    Liste_Ana = []
    for i in range(n):
        Ana = f_Anagramme(Nom)
        Liste_Ana.append(Ana)
    return Liste_Ana

# Question 4 - f_Save(Nom_Fichier,Liste_Ana)

def f_Save(Nom_Fichier,Liste_Ana):
    fichier = open(Nom_Fichier,"w")
    for Ana in Liste_Ana:
        Ligne = Ana + "\n"
        fichier.write(Ligne)
    fichier.close()

# Question 5 - RAS

# Question 6 - Liste_Noms

Liste_Noms = f_Open("Liste noms.txt")

# Question 7 - Programme

n = 100
for Nom in Liste_Noms:
    Liste_Ana = f_Liste_Ana(Nom,n)
    Nom_Fichier = Nom + ".txt"
    f_Save(Nom_Fichier,Liste_Ana)
