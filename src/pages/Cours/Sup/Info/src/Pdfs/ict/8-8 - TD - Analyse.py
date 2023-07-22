'''8 - Tris'''

## 8-8 - TD - Tri radix

# Fonction d'étude

import matplotlib.pyplot as plt
plt.close('all')
def Affiche(fig,LX,LY,Leg="RAS"):
    plt.figure(fig)
    plt.plot(LX,LY,label=Leg)
    plt.ylabel('Temps')
    plt.legend()
    plt.show()

import time
def Tri(f,L):
    LL = L.copy()
    tic = time.perf_counter()
    f(LL)
    toc = time.perf_counter()
    Tps = toc - tic
    return Tps

from random import randint as rand
def Liste(n,tmax): # On ne fait que des entiers
    L = [rand(0,tmax) for i in range(n)]
    return L

def n_tris(f,L,nTri):
    Tps = 0
    for i in range(nTri):
        T = Tri(f,L)
        Tps += T
    Tmoy = Tps/nTri
    return Tmoy

def Etude_Liste_n(L_Tri,n,tmax,nTri):
    L = Liste(n,tmax)
    Res_Tri = []
    for f in L_Tri:
        Tmoy = n_tris(f,L,nTri)
        Res_Tri.append(Tmoy)
    return Res_Tri

def Etude_Listes(L_Tri,nTri,tmax,nmax,pas):
    Ln = []
    Res_Tris = []
    for n in range(1,nmax+1,pas):
        Prct = int(100*n/nmax)
        print(Prct," %")
        Ln.append(n)
        Res_Tri = Etude_Liste_n(L_Tri,n,tmax,nTri)
        Res_Tris.append(Res_Tri)
    return Ln,Res_Tris

# Etude

Liste_Tri = [sorted,f_tri_insertion_aux,f_tri_insertion_en_place,f_tri_rapide_aux,f_tri_rapide_en_place,f_tri_fusion,f_tri_insertion_dicho,f_tri_bulle_1,tri_bulle_2,f_tri_comptage,f_tri_selection,tri_scm,alpha_tri,tri_radix]

'''Attention, le tri dénombrement ne fonctionne que si on a des entiers'''

Nb_tri = len(Liste_Tri)
nmax = 500
tmax = 100
pas = 5
nTri = 5

Ln,L_Etude = Etude_Listes(Liste_Tri,nTri,tmax,nmax,pas)
import numpy as np
L_Etude = np.array(L_Etude)

for i in range(Nb_tri):
    LT_Tri = L_Etude[:,i]
    Leg = str(Liste_Tri[i])
    Affiche(3,Ln,LT_Tri,Leg)
