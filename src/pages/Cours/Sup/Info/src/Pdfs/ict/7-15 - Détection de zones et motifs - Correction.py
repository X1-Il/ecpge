''' 7 - Matrices de pixels et images'''

'''Dossier partagé images: https://www.dropbox.com/sh/cblfqm4xkqdmflu/AAAk7lPe_26ADFWuHNOc4RzDa?dl=0'''

## 7-15 - Détection de zones et motifs

# Question 1 - Ouverture et affichage de l'image du sujet

import numpy as np
import matplotlib.pyplot as plt
plt.close('all')
def Affiche(fig,im):
    plt.figure(fig)
    plt.imshow(im)
    plt.axis('off')
    plt.show()
    plt.pause(0.01)

Image = plt.imread("Image.bmp")
Image = Image[:,:,:3]
Affiche(1,Image)
np.save("Image",Image)

## Sélection du rouge

# Question 2 - NB

def NB(im):
    ''' Noir si noir, sinon blanc '''
    Nl,Nc = im.shape[0:2]
    imnb = np.copy(im)
    for c in range(Nc):
        for l in range(Nl):
            R,G,B = im[l,c]
            if R < 10 and G < 10 and B < 10:
                Pix = [0,0,0]
            else:
                Pix = [255,255,255]
            imnb[l,c] = Pix
    return imnb

# Question 3 - Application

Image_NB = NB(Image)
Affiche(2,Image_NB)

## Etude des zones de l’image

# Question 4 - Liste_voisins

def Liste_voisins(l,c,Nl,Nc):
    vg = l,max(0,c-1)
    vd = l,min(Nc-1,c+1)
    vb = min(Nl-1,l+1),c
    vh = max(0,l-1),c
    return [vg,vd,vb,vh]

''' Alternative
def Liste_voisins(l,c,Nl,Nc):
    GDBH = [[l,c-1],[l,c+1],[l+1,c],[l-1,c]]
    for i in range(len(GDBH)):
        L,C = GDBH[i]
        if not (0<=L<=Nl-1 and 0<=C<=Nc-1):
            GDBH[i] = [l,c]
    return GDBH
'''

# Question 5 - Explorer

def Explorer(imnb,l,c,T,k):
    Nl,Nc,_ = imnb.shape
    Pile = [[l,c]]
    Val = imnb[l,c,0] # Inutile de mettre dans while
    while len(Pile) > 0:
        l,c = Pile.pop()
        T[l,c] = k
        Lv = Liste_voisins(l,c,Nl,Nc)
        for v in Lv:
            lv,cv = v
            T_v = T[lv,cv]
            Val_v = imnb[lv,cv,0]
            if T_v==-1 and Val_v == Val:
                Pile.append([lv,cv])

# Question 6 - Zones

def Zones(imnb):
    Nl,Nc = imnb.shape[0:2]
    T = -np.ones([Nl,Nc],dtype='int64')
    k = 0
    for c in range(Nc):
        for l in range(Nl):
            if T[l,c] == -1:
                Explorer(imnb,l,c,T,k)
                k += 1
    return T

# Question 7 - Application

Table = Zones(Image_NB)
Affiche(3,Table)
Nb_Zones = np.amax(Table) + 1
print("Nombre de zones: ",Nb_Zones)

# Question 8 - Donnees

def Donnees(T,n,imnb):
    Nl,Nc = T.shape
    Taille,Ml,Mc,Col,l_min,c_min,l_max,c_max = 0,0,0,-1,Nl-1,Nc-1,0,0
    LD = [[Taille,Ml,Mc,Col,l_min,c_min,l_max,c_max] for k in range(n)]
    for c in range(Nc):
        for l in range(Nl):
            k = T[l,c]
            Taille,Ml,Mc,_,l_min,c_min,l_max,c_max = LD[k]
            Ml = (Ml*Taille+l)/(Taille+1)
            Mc = (Mc*Taille+c)/(Taille+1)
            Taille += 1
            Col = imnb[l,c,0]
            if l < l_min:
                l_min = l
            if l > l_max:
                l_max = l
            if c < c_min:
                c_min = c
            if c > c_max:
                c_max = c
            LD[k] = [Taille,Ml,Mc,Col,l_min,c_min,l_max,c_max]
    return LD

Donnees_Zones = Donnees(Table,Nb_Zones,Image_NB)

## Identification des disques

# Question 9 - Selection

def Selection(LD):
    '''Garde les zones 4 (premières) zones noires'''
    LDs = []
    for D in LD:
        Col = D[3]
        if Col==0:
            LDs.append(D)
    LDs = LDs[:4] # cf. remarque
    assert len(LDs)==4,'Problème de nombre de zones' # cf. remarque
    return LDs

''' Remarques
Oui, il n'y en a que 4, et oui il y en a 4
Mais dans d'autres applications, cela peut être utile de l'écrire
'''

Zones_Sel = Selection(Donnees_Zones)

'''
Il suffit de changer la fonction sélection pour trouver un motif, ce que l'on fera par la suite
'''

# Question 10 - Centres des zones sélectionnées

def Centres(LDs):
    Res = []
    for D in LDs:
        Ml,Mc = D[1:3]
        L = int(round(Ml,0))
        C = int(round(Mc,0))
        Res.append([L,C])
    return Res

LC = Centres(Zones_Sel)

# Question 11 - Identification des points

'''
On considère que les points P1 et P2 sont tous les deux plus hauts que P3 et P4
'''

def Identification(LC):
    LCsort = sorted(LC) # Par ligne
    Ci,Cj,Ck,Cl = LCsort
    li,ci = Ci
    lj,cj = Cj
    lk,ck = Ck
    ll,cl = Cl
    if ci < cj:
        C1 = Ci
        C2 = Cj
    else:
        C1 = Cj
        C2 = Ci
    if ck < cl:
        C3 = Ck
        C4 = Cl
    else:
        C3 = Cl
        C4 = Ck
    return [C1,C2,C3,C4]

LC = Identification(LC)

# Question 12 - Affichage

def Point(im,C,Col):
    l,c = C
    im[l,c] = Col

def Points(im,LC):
    C1,C2,C3,C4 = LC
    Red = [255,0,0]
    Green = [0,255,0]
    Blue = [0,0,255]
    Purple = [255,0,255]
    Point(im,C1,Red)
    Point(im,C2,Green)
    Point(im,C3,Blue)
    Point(im,C4,Purple)

Image_Pts = Image.copy() # imread ne permet pas la modification de Image
Points(Image_Pts,LC)
Affiche(4,Image_Pts)

## Détection de motifs

# Question 13 - Distance_uv

def Distance_uv(u,v):
    n = len(u)
    Dst = 0
    for i in range(n):
        di = u[i]-v[i]
        Dst += di**2
    Dst = Dst**(1/2)
    return Dst

# Question 14 - Analyse

def Analyse(Image):
    Nl,Nc = Image.shape[0:2]
    N = Nl * Nc
    L_RGB = []
    for l in range(Nl):
        for c in range(Nc):
            R,G,B = Image[l,c]
            R = float(R)
            G = float(G)
            B = float(B)
            L_RGB += [R,G,B]
    return L_RGB

# Question 15 - Selection_Motif

from skimage.transform import resize
def Selection_Motif(imnb,motif,LD):
    motif = resize(motif,(50,50),anti_aliasing=False,order=0)
    L_RGB_motif = Analyse(motif)
    L = []
    for i in range(len(LD)):
        _,_,_,_,l_min,c_min,l_max,c_max = LD[i]
        im_loc = imnb[l_min:l_max+1,c_min:c_max+1]
        im_loc = resize(im_loc,(50,50),anti_aliasing=False,order=0)
        L_RGB_im_loc = Analyse(im_loc)
        Dst = Distance_uv(L_RGB_motif,L_RGB_im_loc)
        L.append([Dst,i])
    L.sort()
    L = L[:4]
    L_ind = [t[1] for t in L]
    Res = [LD[i] for i in L_ind]
    assert len(Res)==4,'Problème de nombre de zones'
    return Res

'''
Le redimensionnement en 50x50 permet de détecter une photo prise de travers
Envisager de trouver 4 motifs différents pour scan à l'envers
Eviter de rechercher le motif sur l'image en couleurs, qui peut présenter des pixels imparfaits découpant ses zones en plusieurs
'''

# Question 16 - Application

Image = plt.imread("Image motif.bmp")
Image = Image[:,:,:3]
Affiche(11,Image)
np.save("Image motif",Image)
Image_NB = NB(Image)
Affiche(12,Image_NB)
Table = Zones(Image_NB)
Affiche(13,Table)
Nb_Zones = np.amax(Table) + 1
print("Nombre de zones: ",Nb_Zones)
Donnees_Zones = Donnees(Table,Nb_Zones,Image_NB)

Motif = plt.imread("Motif.bmp")
Motif = Motif[:,:,:3]
Zones_Sel = Selection_Motif(Image_NB,Motif,Donnees_Zones)

LC = Centres(Zones_Sel)
LC = Identification(LC)
Image_Pts = Image.copy()
Points(Image_Pts,LC)
Affiche(14,Image_Pts)