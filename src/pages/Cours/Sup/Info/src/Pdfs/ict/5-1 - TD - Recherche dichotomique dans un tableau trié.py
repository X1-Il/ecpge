'''5 - Fonctions récursives'''

## 5-1 - Recherche dichotomique dans un tableau trié

# Question 1 - recherche_dicho_rec

def recherche_dicho_rec(x,L):
    if len(L) == 0: # Il faut traiter le cas 0, le 1 est optionnel
        return False
    else:
        im = len(L)//2
        if x == L[im]: # Plus simple en traitant ce cas
            return True
        elif x < L[im]:
            return recherche_dicho_rec(x,L[:im]) # im exclu
        else:
            return recherche_dicho_rec(x,L[im+1:]) # im exclu

"""
Grace au TD4-1, on sait pourquoi il faut exclure le milieu
On a comme proposé mis le test Tm==x
On sait qu'avec les slices, aucun problèmes de im-1 ou im+1 qui sortirait des bornes de L"""

'''Versions alternatives'''

def recherche_dicho_rec_bis(x,L): # Inconvénient: créer des copies de L à chaque étape
    if len(L) == 0:
        return False
    else:
        im = len(L)//2
        if x == L[im]:
            return True
        else: # préférer mettre ce else
            Reste_Gauche = L[:im]
            Reste_Droite = L[im+1:]
            if x < L[im]:
                Reste = Reste_Gauche
            else:
                Reste = Reste_Droite
            return recherche_dicho_rec_bis(x,Reste)

def recherche_dicho_rec_bis(x,L): # Inconvénient: créer des copies de L à chaque étape
    if len(L) == 0:
        return False
    else:
        im = len(L)//2
        if x == L[im]:
            return True
        else:
            if x < L[im]:
                Reste = L[:im]
            else:
                Reste = L[im+1:]
            return recherche_dicho_rec_bis(x,Reste)

def recherche_dicho_rec_bis(x,L): # Inconvénient: créer des copies de L à chaque étape
    if len(L) == 0:
        return False
    else:
        im = len(L)//2
        if x == L[im]:
            return True
        elif x < L[im]:
                Reste = L[:im]
                return recherche_dicho_rec_bis(x,Reste)
        else:
                Reste = L[im+1:]
                return recherche_dicho_rec_bis(x,Reste)

 # Question 2 - Vérification

L = [1,2,3]
x = 1
print(recherche_dicho_rec(x,L))
x = 2
print(recherche_dicho_rec(x,L))
x = 3
print(recherche_dicho_rec(x,L))
x = 4
print(recherche_dicho_rec(x,L))

# Question 3 - Complexité

'''
Meilleur des cas: O(1)
Pire des cas: Auto appel 1 fois au rang n/2 avec O(1) à chaque étape
O(ln(n))
'''

# Question 4 - Test

def test(f):
    Res = []

    # 1: L est vide
    L = []
    x = 1
    Res.append(f(x,L)==False)

    # 2: len(L) pair - x dans L - 1° terme
    L = [1,2,3,4]
    x = 1
    Res.append(f(x,L)==True)
    # 3: len(L) pair - x dans L - Dernier terme
    L = [1,2,3,4]
    x = 4
    Res.append(f(x,L)==True)
    # 4: len(L) pair - x dans L - Dedans
    L = [1,2,3,4]
    x = 2
    Res.append(f(x,L)==True)

    # 5: len(L) impair - x dans L - 1° terme
    L = [1,2,4]
    x = 1
    Res.append(f(x,L)==True)
    # 6: len(L) impair - x dans L - Dernier terme
    L = [1,2,4]
    x = 4
    Res.append(f(x,L)==True)
    # 7: len(L) impair - x dans L - Dedans
    L = [1,2,4]
    x = 2
    Res.append(f(x,L)==True)

    # 8: len(L) pair - x n'est pas dans L - Avant
    L = [1,2,3,4]
    x = -1
    Res.append(f(x,L)==False)
    # 9: len(L) pair - x n'est pas dans L - Après
    L = [1,2,3,4]
    x = 5
    Res.append(f(x,L)==False)
    # 10: len(L) pair - x n'est pas dans L - Dedans
    L = [1,2,3,4]
    x = 2.5
    Res.append(f(x,L)==False)

    # 11: len(L) impair - x n'est pas dans L - Avant
    L = [1,2,4]
    x = -1
    Res.append(f(x,L)==False)
    # 12: len(L) impair - x n'est pas dans L - Après
    L = [1,2,4]
    x = 5
    Res.append(f(x,L)==False)
    # 13: len(L) impair - x n'est pas dans L - Dedans
    L = [1,2,4]
    x = 2.5
    Res.append(f(x,L)==False)

    print(Res) # Permet d'identifier le lieu du bug
    return Res == [True]*13

Res = test(recherche_dicho_rec)
print('La fonction est correcte ?',Res)

# Question 5 -

def recherche_dicho_rec_ind(x,L):
    def rec(ig,id): # L et x existent pour rec
        if ig>=id:
            return False
        else:
            im = (ig+id)//2
            if x == L[im]:
                return True
            elif x < L[im]:
                return rec(ig,im)
            else:
                return rec(im+1,id)
    ig = 0
    id = len(L)
    return rec(ig,id)

Res = test(recherche_dicho_rec_ind)
print('La fonction ind est correcte ?',Res)