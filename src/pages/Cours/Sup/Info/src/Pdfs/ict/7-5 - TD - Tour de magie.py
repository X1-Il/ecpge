''' 7 - Matrices de pixels et images'''

'''Dossier partagé images: https://www.dropbox.com/sh/xi5m6vrkavumnpy/AAAkqTKZfFwScbCF-AnjrhLxa?dl=0'''

## 7-5 - Tour de magie

## Création des cartes

Num = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
Cou = ['Co','Ca','Pi','Tr']
Jeu = []
for c in Cou:
    for n in Num:
        Nom = c + '_' + n + '.bmp'
        Jeu.append(Nom)
Jeu.append('Jok_1.bmp')
Jeu.append('Jok_2.bmp')

## Affichage

# Librairies

import matplotlib.pyplot as plt
plt.close('all')

# Lecture

def Lecture(Chemin):
    Chemin = "7-5 - Cartes\\"+ Chemin
    Image = plt.imread(Chemin)
    return Image

# Affiche

def Affiche(fig,Chemin):
    plt.figure(fig)
    Carte = Lecture(Chemin)
    plt.imshow(Carte)
    plt.axis('off')
    plt.show()
    plt.pause(0.5)

# Affiche_lc

def Affiche_lc(Chemin,l,c,L,C):
    p = C*(l-1)+c
    plt.subplot(L,C,p)
    Carte = Lecture(Chemin)
    plt.imshow(Carte)
    plt.axis('off')
    plt.show()
    plt.pause(0.1)

## Choix de la carte

print("Veuillez retenir l'une des 21 cartes affichées")
for i in range(21):
    Chemin = Jeu[i]
    Affiche(0,Chemin)

## Manipulations des cartes

# Affiche_Colonnes

def Affiche_Colonnes(fig,Colonnes):
    plt.figure(fig,figsize=(5,8))
    plt.clf()
    for l in range(7):
        for c in range(3):
            Carte = Colonnes[c][l]
            Affiche_lc(Carte,l+1,c+1,7,3)

# Empaquetage

def Empaquetage(Colonnes,c):
    Liste = [0,1,2]
    Liste.remove(c)
    cb = Liste[0]
    ch = Liste[1]
    Lb = Colonnes[cb]
    Lm = Colonnes[c]
    Lh = Colonnes[ch]
    Paquet = Lb + Lm + Lh
    return Paquet

# Distribution

def Distribution(Paquet):
    Colonnes = [[],[],[]]
    for l in range(7):
        for c in range(3):
            Ind = l*3+c
            Carte = Paquet[Ind]
            Colonnes[c].append(Carte)
    return Colonnes

def Distribution(Paquet): # Autre version
    C1,C2,C3 = [],[],[]
    for i in range(0,len(Paquet),3):
            C1.append(Paquet[i])
            C2.append(Paquet[i+1])
            C3.append(Paquet[i+2])
    return [C1,C2,C3]

## Tour de magie

# Création des colonnes

Colonnes = [[],[],[]]
for c in range(3):
    for l in range(7):
        Ind = l*3+c
        Chemin = Jeu[Ind]
        Colonnes[c].append(Chemin)

# Réalisation du tour

for i in range(3):
    Affiche_Colonnes(1,Colonnes)
    Col = int(input('Colonne 1 à 3 ? '))-1
    Paquet = Empaquetage(Colonnes,Col)
    Colonnes = Distribution(Paquet)

# Détermination du résultat

Message = "ABRACADABRA"
for i in range(11):
    print(Message[i])
    Carte = Paquet[i]
    Affiche(2,Carte)
print("La voilà !")