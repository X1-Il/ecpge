'''4 - Algorithmes dichotomiques'''

## 4-3 - Tri par insertion

# Création d'une liste à trier

n = 10
import random
LL = [random.randint(1,n) for i in range(n)]
print(LL,"Liste à trier")

# Question 1 - Insertion dichotomique

def f_insertion_dicho(L,Val):
    ig = 0
    id = len(L)-1
    if len(L)==0:
        i = ig
    else:
        while ig <= id: # Ne pas mettre != car possible id<ig
            print(ig,id)
            im = (ig+id)//2
            Tm = L[im]
            if Val == Tm:
                break
            elif Val < Tm:
                id = im-1 # Bien exclure im
            else:#  Val > Tm
                ig = im+1 # Bien exclure im
        print(ig,id,im)
        if Val <= Tm:
            i = im
        else:
            i = im + 1
    L.insert(i,Val)

L = [1,2]
f_insertion_dicho(L,0)
print(L)


'''
Discussion orientée par le choix im = (ig+id)//2 (milieu gauche)

A la dernière entrée dans le while:
- Tm=Val: On ajoute alors Val du bon côté de im
- Tm!=Val:
  - Soit id = ig: ex [0,1] devient [1,1], on ajoute Val du bon côté de im
  - Soit id = ig-1 (ça peut arriver !): ex [0,1] devient [0,-1], alors im=ig et on sait que Val<T[im], il sera ajouté du  bon côté

Modifications si im = (ig+id+1)//2 (milieu droite)
[...]
  - Soit id = ig-1 (ça peut arriver !): ex [0,1] devient [2,1], alors im=id et on sait que Val>T[im], il sera ajouté du  bon côté

'''

# Question 2 - Tri par insertion dichotomique

def f_tri_insertion_dicho(L):
    L_Aux = []
    Nb_Termes = len(L)
    for i in range(Nb_Termes):
        Val = L[i]
        f_insertion_dicho(L_Aux,Val)
    return L_Aux

L = LL.copy()
L = f_tri_insertion_dicho(L)
print(L,"Insertion dichotomique")
print("Ca marche ?",L==sorted(LL))
