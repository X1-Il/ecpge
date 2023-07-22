''' 3 - Intelligence artificielle'''

'''3-2 - Algorithme k-moyennes'''

## 3-2 - Algorithme k-moyennes

## Imports

from random import uniform as rdu
from random import randint as rdi
from matplotlib import pyplot as plt
plt.close('all')

## Création des données 2D

G = 5 # Nombre de groupes
PPG = 15 # Nombre de points par groupes
NP = G*PPG # Nombre de points
Largeur = 2 # Largeur groupe +-

Lx_2D = []
for g in range(G):
    X0 = rdi(10,90)
    Y0 = rdi(10,90)
    for p in range(PPG):
        X = X0 + rdi(-Largeur,Largeur)
        Y = Y0 + rdi(-Largeur,Largeur)
        Pt = [X,Y]
        Lx_2D.append(Pt)

def Affiche_2D(fig,LL,Col):
    ''' Affiche chaque liste de la liste LL avec la couleur respective de la liste Col '''
    plt.figure(fig)
    for i in range(len(LL)):
        L = LL[i]
        for X,Y in L:
            plt.plot(X,Y,'o',color=Col[i],markersize=2)
    #plt.savefig(str(fig)+".png")
    plt.axis('scaled')
    plt.show()
    plt.pause(0.0001)

## Création des données 3D

G = 5 # Nombre de groupes
PPG = 15 # Nombre de points par groupes
NP = G*PPG # Nombre de points
Largeur = 2 # Largeur groupe +-

Lx_3D = []
for g in range(G):
    X0 = rdi(10,90)
    Y0 = rdi(10,90)
    Z0 = rdi(10,90)
    for p in range(PPG):
        X = X0 + rdi(-Largeur,Largeur)
        Y = Y0 + rdi(-Largeur,Largeur)
        Z = Z0 + rdi(-Largeur,Largeur)
        Pt = [X,Y,Z]
        Lx_3D.append(Pt)

def Affiche_3D(fig,LL,Col):
    ''' Affiche chaque liste de la liste LL avec la couleur respective de la liste Col '''
    plt.figure(fig)
    plt.axes(projection="3d")
    for i in range(len(LL)):
        L = LL[i]
        N = len(L)
        Lx = [L[k][0] for k in range(N)]
        Ly = [L[k][1] for k in range(N)]
        Lz = [L[k][2] for k in range(N)]
        plt.plot(Lx,Ly,Lz,'o',color=Col[i],markersize=2)
    #plt.savefig(str(fig)+".png")
    plt.show()
    plt.pause(0.0001)

## Choix de l'application

Lx = Lx_2D
Affiche = Affiche_2D
Affiche(1,[Lx],['r'])

## Algorithme k-moyennes

# On ferme les fenêtres

plt.close('all')

# Fonctions

def f_Dst(x1,x2):
    n = len(x1)
    s = 0
    for i in range(n):
        di = x1[i]-x2[i]
        s += di**2
    d = s**(1/2)
    return d

def f_c(S):
    nk = len(S)
    n_Comp = len(S[0]) # Bug ici si une Cluster est vide
    ci = [0]*n_Comp
    for i in range(nk):
        P = S[i]
        for j in range(len(P)):
            ci[j] += P[j]
    ci = [t/nk for t in ci]
    return ci

def f_Lc_Init(Lx,k):
    Lc = []
    Indices = [i for i in range(len(Lx))]
    j = 0
    while j < k:
        n = len(Indices)
        Ind = Indices.pop(rdi(0,n-1))
        Point = Lx[Ind]
        if Point not in Lc:
            Lc.append(Point)
            j += 1
    return Lc

from numpy import inf
def f_LS(Lc,Lx):
    LS = [[] for _ in Lc]
    for xij in Lx:
        d_min = inf
        for j in range(len(Lc)):
            cj = Lc[j]
            dj = f_Dst(cj,xij)
            if dj < d_min:
                d_min = dj
                j_min = j
        LS[j_min].append(xij)
    return LS

def f_Lc(LS):
    Lc = []
    for Sj in LS:
        ci = f_c(Sj)
        Lc.append(ci)
    return Lc

def f_Iterations(Lx,k):
    '''Version qui affiche le résultat à la fin, avec pour chaque cluster une couleur aléatoire'''
    Lc = f_Lc_Init(Lx,k)
    Color = [[rdu(0,1),rdu(0,1),rdu(0,1)] for i in range(k)]
    Lc_prec = 0
    it = 0
    while Lc != Lc_prec:
        it += 1
        print(it)
        Lc_prec = Lc.copy()
        LS = f_LS(Lc,Lx)
        assert [] not in LS,"Bug: On recommence"
        Lc = f_Lc(LS)
    print("Itérations utiles:",it-1)
    Affiche(it-1,LS+[Lc],Color+['r']*k)
    return Lc

def f_Iterations_Affichage(Lx,k):
    '''Ajout à la version précédente: Affichage de départ, affichage en cours de simulation, et possibilité de voir évoluer les centres des clusters'''
    Lc = f_Lc_Init(Lx,k)
    Affiche(0,[Lx]+[Lc],['k']+['r']*k) # Première image noir et rouge
    Color = [[rdu(0,1),rdu(0,1),rdu(0,1)] for i in range(k)]
    Lc_prec = 0
    it = 0
    while Lc != Lc_prec:
        it += 1
        print(it)
        Lc_prec = Lc.copy()
        LS = f_LS(Lc,Lx)
        assert [] not in LS,"Bug: On recommence"
        # Affiche(100+it,LS+[Lc],Color+['r']*k)
        Lc = f_Lc(LS)
        Affiche(it,LS+[Lc],Color+['r']*k)
    plt.close(it) # Identique à it-1
    print("Itérations utiles:",it-1)
    Affiche(it-1,LS+[Lc],Color+['r']*k)
    return Lc

def f_Iterations_Affichage_kcol(Lx,k):
    ''' Affiche les images en cours de calcul, mais chaque pixel a maintenant la couleur de son centre de cluster, soit k couleurs'''
    Lc = f_Lc_Init(Lx,k)
    Affiche(0,[Lx]+[Lc],['k']+['r']*k) # Première image noir et rouge
    Lc_prec = 0
    it = 0
    while Lc != Lc_prec:
        it += 1
        print(it)
        Lc_prec = Lc.copy()
        LS = f_LS(Lc,Lx)
        assert [] not in LS,"Bug: On recommence"
        Lc = f_Lc(LS)
        Color = [[xyz/255 for xyz in c] for c in Lc]
        Affiche(it,LS+[Lc],Color+['r']*k)
    plt.close(it) # Identique à it-1
    print("Itérations utiles:",it-1)
    Affiche(it-1,LS+[Lc],Color+['r']*k)
    return Lc

k = G # Nombre de groupes recherchés
Lc = f_Iterations(Lx,k)

## Application à l'avion

# Type de données utilisées pour la suite

Affiche = Affiche_3D

# Ouverture et affichage

def f_Image(fig,Im):
    plt.figure(fig)
    plt.imshow(Im)
    plt.axis('off')
    plt.show()
    plt.pause(0.00001)

plt.close('all')
Image = plt.imread("Avion.bmp")
Image = Image[:,:,:3]
f_Image(100,Image)

# Extraction

def f_Extraction_RGB(Im):
    L_Pix = []
    Nl,Nc = Im.shape[0:2]
    for c in range(Nc):
        for l in range(Nl):
            R,G,B = Im[l,c]
            R,G,B = float(R),float(G),float(B) # problèmes d'overflow dans le calcul des distances sinon
            L_Pix.append([R,G,B])
    return L_Pix

Lx = f_Extraction_RGB(Image)

# Image du sujet: affichage 3D des pixels avec leur couleur

'''
Lx_demo = [[x] for x in Lx] # Doit être une liste de paquets
Lc_demo = [[xyz/255 for xyz in c] for c in Lx]
Affiche(200,Lx_demo,Lc_demo) # Affichage trèèèèès long
'''

# Itérations de l'algorithme des k-moyennes

k = 5
Lc = f_Iterations_Affichage_kcol(Lx,k)

# Création de la nouvelle image

import numpy as np

def f_Proximite(Pix,Lc):
    dmin = np.inf
    for x in Lc:
        di = f_Dst(x,Pix)
        if di < dmin:
            dmin = di
            Res = x
    return Res

def f_New_Im(Im,Lc):
    New_Im = Im.copy()
    Nl,Nc = Im.shape[0:2]
    for c in range(Nc):
        for l in range(Nl):
            Pix = Im[l,c]
            New_Pix = f_Proximite(Pix,Lc)
            New_Im[l,c] = New_Pix
    return New_Im

Image_Res = f_New_Im(Image,Lc)

# Affichage du résultat

f_Image(101,Image_Res)

## Application à la route

def f_Extraction_lc(im):
    Lx = []
    Nl,Nc = im.shape[0:2]
    for c in range(Nc):
        for l in range(Nl):
            N = im[l,c,0]
            if N == 255:
                Lx.append([c,-l])
    return Lx

plt.close('all')
'''
Bug sans fermeture:
Axes3D currently only supports the aspect argument 'auto'. You passed in 'equal'
Car la figure 1 est déjà ouverte en 3D par l'application précédente
'''
Route = plt.imread("Route.bmp")
Route = Route[:,:,:3]
f_Image(300,Route)
Lx = f_Extraction_lc(Route)
k = 2
Affiche = Affiche_2D
Lc = f_Iterations(Lx,k)
