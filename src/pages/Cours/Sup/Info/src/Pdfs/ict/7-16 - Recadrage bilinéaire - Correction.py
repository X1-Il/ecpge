''' 7 - Matrices de pixels et images'''

'''Dossier partagé images: https://www.dropbox.com/sh/cyenq8khnxh0p4t/AAAzJzX_XbdSToX4Iv0R7BMma?dl=0'''

## 7-XX - Recadrage bilinéaire

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

# Question 2 - Prod_MV

def Prod_MV(M,V):
    Res = []
    n = len(M)
    t = len(M[0][0])
    for l in range(n):
        Res_Loc = [0 for _ in range(t)]
        for c in range(n):
            for i in range(t):
                Res_Loc[i] += V[c]*M[l][c][i]
        Res.append(Res_Loc)
    return Res

'''
M = [[[1,2],[3,4]],[[5,6],[7,8]]]
V = [1,2]
test = Prod_MV(M,V)
print(test)
'''

# Question 3 - Prod_LnV

def Prod_LnV(Ln,V):
    n = len(Ln)
    t = len(Ln[0])
    Res = [0 for _ in range(t)]
    for i in range(n):
        for j in range(t):
            Res[j] += Ln[i][j]*V[i]
    return Res

'''
Ln = [[1,2],[3,4]]
V = [1,2]
test = Prod_LnV(Ln,V)
print(test)
'''

# Question 4 - LC_Bilin

def LC_Bilin(l,c,LO,LC):
    O1,O2,O3,O4 = LO
    C1,C2,C3,C4 = LC
    l12 = O1[0]
    l34 = O3[0]
    c13 = O1[1]
    c24 = O2[1]
    Vl = [l34-l,l-l12]
    Mat = [[C1,C2],[C3,C4]]
    Vc = [c24-c,c-c13]
    Res = Prod_MV(Mat,Vc)
    Res = Prod_LnV(Res,Vl)
    Cst = 1/((l34-l12)*(c24-c13))
    Res = [int(round(t*Cst,0)) for t in Res]
    return Res

''''
Nl,Nc = Image.shape[0:2]
O1,O2,O3,O4 = [0,0],[0,Nc-1],[Nl-1,0],[Nl-1,Nc-1]
LO = [O1,O2,O3,O4]
C1,C2,C3,C4 = [16,49],[156,17],[23,215],[163,183]
LC = [C1,C2,C3,C4]

# tests aux 4 points Pi
test = LC_Bilin(0,0,LO,LC)
print(test)
test = LC_Bilin(0,Nc-1,LO,LC)
print(test)
test = LC_Bilin(Nl-1,0,LO,LC)
print(test)
test = LC_Bilin(Nl-1,Nc-1,LO,LC)
print(test)
'''

## Recadrage

# Question 5 - Recadrage

def Recadrage(im,LO,LC,Nl,Nc):
    Im_Rec = 255*np.ones([Nl,Nc,3],dtype='uint8')
    NL,NC = im.shape[:2]
    for l in range(Nl):
        for c in range(Nc):
            L,C = LC_Bilin(l,c,LO,LC)
            if L>=0 and L<NL and C>=0 and C<NC:
                Im_Rec[l,c] = im[L,C]
    return Im_Rec

# Question 6 - Application

C1,C2,C3,C4 = [59,29],[27,168],[223,35],[193,175] # l=y c=x
LC = [C1,C2,C3,C4]
Nl,Nc = 100,100
c = 10
O1,O2,O3,O4 = [c,c],[c,Nc-1-c],[Nl-1-c,c],[Nl-1-c,Nc-1-c]
LO = [O1,O2,O3,O4]

'''
Il est important que les 4 points d'origine soient placés sur un rectangle
'''
l1,c1 = LO[0]
l2,c2 = LO[1]
l3,c3 = LO[2]
l4,c4 = LO[3]
cond = l1==l2 and l3==l4 and c1==c3 and c2==c4
assert cond,"Erreur de placement des motifs sur l'image originale"

Image_Recadree = Recadrage(Image,LO,LC,Nl,Nc)
Affiche(2,Image_Recadree)
plt.savefig("Résultat.png")

# Question 7 -  Applications à la route

Route1 = plt.imread("Route1.bmp")
Route1 = Route1[:,:,:3]
NL,NC = Route1.shape[:2]
Affiche(11,Route1)
C1,C2,C3,C4 = [0,115],[0,154],[NL-1,0],[NL-1,NC-1] # Lecture manuelle sur l'image
LC = [C1,C2,C3,C4]
Nl,Nc = 100,100
O1,O2,O3,O4 = [0,0],[0,Nc-1],[Nl-1,0],[Nl-1,Nc-1]
LO = [O1,O2,O3,O4]
Route1_Recadree = Recadrage(Route1,LO,LC,Nl,Nc)
Affiche(12,Route1_Recadree)
plt.savefig("Route1_Rec.png")

Route2 = plt.imread("Route2.bmp")
Route2 = Route2[:,:,:3]
NL,NC = Route2.shape[:2]
Affiche(21,Route2)
C1,C2,C3,C4 = [0,0],[0,42],[NL-1,48],[NL-1,NC-1] # Lecture manuelle sur l'image
LC = [C1,C2,C3,C4]
Nl,Nc = 100,100
O1,O2,O3,O4 = [0,0],[0,Nc],[Nl-1,0],[Nl-1,Nc-1]
LO = [O1,O2,O3,O4]
Route2_Recadree = Recadrage(Route2,LO,LC,Nl,Nc)
Affiche(22,Route2_Recadree)
plt.savefig("Route2_Rec.png")

# Question 8 - im_resize

def im_resize(im,NL,NC):
    Nl,Nc = im.shape[:2]
    LO = [0,0],[0,NC-1],[NL-1,0],[NL-1,NC-1] # Nouvelle image
    LC = [0,0],[0,Nc-1],[Nl-1,0],[Nl-1,Nc-1] # im
    new_im = Recadrage(im,LO,LC,NL,NC)
    return new_im

Image_Redim = im_resize(Route1,200,20)
Affiche(30,Image_Redim)