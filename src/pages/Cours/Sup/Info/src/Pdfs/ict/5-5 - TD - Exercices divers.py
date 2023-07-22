'''5 - Fonctions récursives'''

## 5-5 - Exercices divers

## Exercice 1 - Elements distincts

# Question 1 - elem_distincts_1(L)

''' Méthode: On voit si le premier terme appartient aux éléments distincts du reste. Si oui, on ne l'ajoute pas au résultat, sinon oui. Il faut donc s'auto appeler en premier pour avoir ensuite la comparaison à ED_Reste'''

def elem_distincts_1(L): # O(n) à O(n²)
    Premier = L[0]
    if len(L)==1:
        return [Premier]
    else:
        Reste = L[1:]
        ED_Reste = elem_distincts_1(Reste) # Appel au milieu
        if Premier in ED_Reste: # O(1) à O(n)
            Deb = []
        else:
            Deb = [Premier]
        return Deb + ED_Reste

from random import randint as rand
L = [rand(1,100) for i in range(100)]
print('Q1: ',elem_distincts_1(L))

''' Même chose, mais on teste sur Reste au lieu de ED_Reste'''

def elem_distincts_1(L): # O(n) à O(n²)
    Premier = L[0]
    if len(L)==1:
        return [Premier]
    else:
        Reste = L[1:]
        if Premier in Reste: # O(1) à O(n)
            Deb = []
        else:
            Deb = [Premier]
        return Deb + elem_distincts_1_bis(Reste) # Appel à la fin

from random import randint as rand
L = [rand(1,100) for i in range(100)]
print('Q1: ',elem_distincts_1_bis(L))

# Question 2 - elem_distincts_2(L,M) - Attention, ne pas faire M optionnel (L,M=[])

''' V1: M pleine au cas de base - Ajoute chaque élément à M s'il n'est pas dedans, puis se rappelle en transmettant M qui se remplie doucement'''

"""Selon les cas, on peut mettre not in Reste, Elem_Dist_Reste(moins cher en calculs de mettre Elem_Dist_Reste)
Selon les cas, on peut aussi mettre M ou Elem_Dist_Reste"""

def elem_distincts_2(L,M):  # O(n) à O(n²)
    if L==[]: # M pleine au cas de base
        return M
    else:
        Terme = L[0]
        Reste = L[1:]
        if Terme not in M: # O(1) à O(n)
            M.append(Terme)
        return elem_distincts_2(Reste,M)

from random import randint as rand
L = [rand(1,100) for i in range(100)]
print('Q2: ',elem_distincts_2(L,[]))

def elem_distincts_2(L,M): # Même version avec cas de base 1
    if len(L)==1: # M pleine au cas de base
        Terme = L[0]
        if Terme not in M: #1
            M.append(Terme)
        return M
    else:
        Terme = L[0]
        Reste = L[1:]
        if Terme not in M: # O(1) à O(n)
            M.append(Terme)
        return elem_distincts_2(Reste,M)
#1: Ne pas oublier cette conditons ! Essayer pour L=[1,2,1] - Il ajoute le dernier quoi qu'il arrive

from random import randint as rand
L = [rand(1,100) for i in range(100)]
print('Q2: ',elem_distincts_2(L,[]))

''' V2: M vide au cas de base - Ajoute à M les éléments qui ne sont pas dans les éléments distincts du reste - S'auto appelle donc en premier pour les avoir '''

def elem_distincts_2(L,M):  # O(n) à O(n²)
    if len(L)==0: # M est vide au cas de base
        return M
    else:
        Terme = L[0]
        Reste = L[1:]
        Elem_Dist_Reste = elem_distincts_2(Reste,M)
        if Terme not in Elem_Dist_Reste: # O(1) à O(n)
            M.append(Terme)
        return M

from random import randint as rand
L = [rand(1,100) for i in range(100)]
print('Q2: ',elem_distincts_2(L,[]))

def elem_distincts_2(L,M): # Même version avec cas de base 1  # O(n) à O(n²)
    if len(L)==1: # M est vide au cas de base
        Terme = L[0]
        M.append(Terme)
        return M
    else:
        Terme = L[0]
        Reste = L[1:]
        Elem_Dist_Reste = elem_distincts_2(Reste,M)
        if Terme not in Elem_Dist_Reste: # O(1) à O(n)
            M.append(Terme)
        return M

from random import randint as rand
L = [rand(1,100) for i in range(100)]
print('Q2: ',elem_distincts_2(L,[]))

## Exercice 2 - Autour des chiffres d'un entier

# Question 1 - % et //

'''
x%10 renvoie le reste de la division euclidienne de x par 10
x//10 renvoie le quotient de la division euclidienne de x par 10
'''

# Question 2 - nbre_chiffre

def nbre_chiffre(x):
    """Renvoie le nombre de chiffres de x en base 10, écriture récursive"""
    if 0<=x<10:
        return 1
    else:
        return nbre_chiffre(x//10) + 1
Test = nbre_chiffre(4528)
print(Test)

# Question 3 - liste_chiffre

def liste_chiffre(x):
    """Renvoie la liste des chiffres de x en base 10, écriture récursive"""
    if 0<=x<10:
        return [x]
    else:
        return liste_chiffre(x//10) + [x%10]
Test = liste_chiffre(4528)
print(Test)

## Exercice 3 - Somme des chiffres d'un entier

'''Problèmes d'erreurs d'arrondis (12/10-int(12/10))*10 - Eviter la différence et travailler avec des entiers'''

# Question 1 - Opérations

def Somme_Ch_1(n):
    if n < 10:
        return n
    else:
        Dernier = n%10
        N = n//10
        return Somme_Ch_1(N) + Dernier

print('Q1: ',Somme_Ch_1(1234))

# Question 2 - Chaînes de caractères

def Somme_Ch_2(n):
    Ch = str(n)
    if len(Ch)==1:
        return int(Ch)
    else:
        Dernier = int(Ch[-1])
        Reste_Ch = Ch[:-1]
        Reste_n = int(Reste_Ch)
        return Somme_Ch_2(Reste_n)+Dernier

print('Q2: ',Somme_Ch_2(1234))

# Question 3 - Divisible par 9

def Div9(n):
    n = Somme_Ch_1(n)
    if n < 10:
        return (n//9)==1
    else:
        return Div9(n)

print('Q3: ',Div9(9999999))

## Exercice 4 - Moyenne arithmético géométrique

# Question 1

from math import sqrt

def suite_u(a,b,n):
    if n==0:
        return a
    else:
        return (suite_u(a,b,n-1)+suite_v(a,b,n-1))/2

def suite_v(a,b,n):
    if n==0:
        return b
    else:
        return sqrt(suite_u(a,b,n-1)*suite_v(a,b,n-1))

print('Q1: ',suite_u(2,3,5))
print('Q1: ',suite_v(2,3,5))

## Exercice 5 - Insertion

def insertion_rec(L,x):
    def rec(L,x,i):
        if i==0 or len(L)==0: # Doit être en premier si len(L)=0... Sinon L[i] bug après
            L.insert(0,x)
        elif x > L[i]:
            L.insert(i+1,x)
        else:
            rec(L,x,i-1)
    rec(L,x,len(L)-1)

L,x = [],1
insertion_rec(L,x)
print('Q1: ',L)
L,x = [1,3,5,7,8],0
insertion_rec(L,x)
print('Q1: ',L)
L,x = [1,3,5,7,8],1
insertion_rec(L,x)
print('Q1: ',L)
L,x = [1,3,5,7,8],4
insertion_rec(L,x)
print('Q1: ',L)
L,x = [1,3,5,7,8],5
insertion_rec(L,x)
print('Q1: ',L)
L,x = [1,3,5,7,8],8
insertion_rec(L,x)
print('Q1: ',L)
L,x = [1,3,5,7,8],9
insertion_rec(L,x)
print('Q1: ',L)

## Exercice 6 - Insertion dichotomie

'''J'exclue le milieu pour éviter de différentier les cas milieu gauche ou milieu droite, test > ou >= et inclusion dans Lg ou Ld qui chacun conduisent à des programmations différentes'''

'''Je discute à chaque fois du choix milieu gauche ou droite, c'est à dire dans [0,1,2,3,4], l'indice milieu est 2, mais dans [0,1,2,3], c'est soit 1 (milieu gauche), soit 2 (milieu droite)'''

# Question 1 - Insertion_Dicho

def Insertion_Dicho(L,x):
    ig = 0
    id = len(L)-1
    while id > ig: # ig<id possible
        im = (ig+id)//2 # Milieu gauche important - cf suite
        Tm = L[im]
        if x < Tm:
            id = im - 1 # Exclure milieu
        else:
            ig = im + 1 # Exclure milieu
    if len(L)==0 or x < L[ig]: # Ordre des tests important si L vide
        i = ig
    else:
        i = ig + 1
    L.insert(i,x)

def Insertion_Dicho(L,x): # version un peu mieux, cf remarque
    ig = 0
    id = len(L)-1
    while id > ig: # ig<id possible
        im = (ig+id)//2 # Milieu gauche
        Tm = L[im]
        if x < Tm:
            id = im - 1 # Exclure milieu
        else:
            ig = im + 1 # Exclure milieu
    id = max(id,0)
    ig = min(ig,len(L)-1)
    if len(L)==0 or x < L[ig]: # 0rdre des tests important
        i = ig
    else:
        i = ig + 1
    L.insert(i,x)

''' Remarques:
Dans insert(i,t), si i<0, ça insert en première place, ei i trop grand, ça met en dernier
Avec milieu gauche im = (ig+id)//2 si on ajoute un terme à gauche de L, conduit à ig=0 id=-1 - Utiliser ig pour i est bien - Utiliser id fonctionne mais fait deux choses non attendues: insertion en -1, ça passe, mais le test compare x qui doit être mis à gauche à L[-1]... Alors oui, il est plus petit... Mais ce n'est pas ce que l'on attend. On voit le problème avec le test milieu droite ci-dessous où là, il y a dépassement de la taille de la liste
Avec milieu droite im = (ig+id+1)//2 si on ajoute un terme à droite de L, conduit à ig=len(L) id=len(L)-1, ig dépasse la taille de L - Utiliser id pour i et le test L[id] est bien, utiliser ig BUG
Les fonctions min et max permettent d'utiliser n'importe quel milieu et n'importe quel ig id. Sinon, il faut veiller au terme utilisé de ig et id dans la fin de la fonction. Ci-dessous, une version qui n'utilise que le milieu gauche et ig
 '''

L,x = [],1
Insertion_Dicho(L,x)

L,x = [1],0
Insertion_Dicho(L,x)
L,x = [1],2
Insertion_Dicho(L,x)

print('Q1: ',L)
L,x = [1,3,5,7,8],0
Insertion_Dicho(L,x)
print('Q1: ',L)
L,x = [1,3,5,7,8],1
Insertion_Dicho(L,x)
print('Q1: ',L)
L,x = [1,3,5,7,8],4
Insertion_Dicho(L,x)
print('Q1: ',L)
L,x = [1,3,5,7,8],5
Insertion_Dicho(L,x)
print('Q1: ',L)
L,x = [1,3,5,7,8],8
Insertion_Dicho(L,x)
print('Q1: ',L)
L,x = [1,3,5,7,8],9
Insertion_Dicho(L,x)
print('Q1: ',L)

# Question 2 - Insertion_Dicho_rec_1

''' Si on ne traite que le cas de base 1, ça bug quand on cherche à ajouter un élément à gauche ou à droite, genre 0 ou 10 dans [2,4,6] car il s'appelle sur une liste Vide - Si on traite le cas de base 0, plus besoin de traiter le cas 1 qui fonctionne aussi pour ajouter un élément entre deux existants '''

def Insertion_Dicho_rec_1(L,x): # m exclus - Traiter cas de base 0 uniquement :)
    if len(L)==0:
        return [x]
    else:
        im = (len(L)-1)//2 # Milieu gauche
        Tm = L[im]
        Lg = L[:im] # Exclure milieu
        Ld = L[im+1:] # Exclure milieu
        if x > Tm:
            Res = Lg + [Tm] + Insertion_Dicho_rec_1(Ld,x)
        else:
            Res = Insertion_Dicho_rec_1(Lg,x) + [Tm] + Ld
        return Res

'''len(L)//2 est un milieu droite - Milieu gauche (len(L)-1)//2 - Attention, -1//2 donne -1 et non 0=int(-1/2) - Comme len(L) n'est jamais nul après else, on peut garder une formule avec // - Milieu gauche et droite fonctionnent'''

# Si >=, ajoute x dans la partie gauche sous traitée quand x=Tm
# Si >, ajoute x dans la partie droite sous traitée
# Dans les 2 cas, pas de soucis

L,x = [],1
print('Q2: ',Insertion_Dicho_rec_1(L,x))
L,x = [1,3,5,7,8],0
print('Q2: ',Insertion_Dicho_rec_1(L,x))
L,x = [1,3,5,7,8],1
print('Q2: ',Insertion_Dicho_rec_1(L,x))
L,x = [1,3,5,7,8],4
print('Q2: ',Insertion_Dicho_rec_1(L,x))
L,x = [1,3,5,7,8],5
print('Q2: ',Insertion_Dicho_rec_1(L,x))
L,x = [1,3,5,7,8],8
print('Q2: ',Insertion_Dicho_rec_1(L,x))
L,x = [1,3,5,7,8],9
print('Q2: ',Insertion_Dicho_rec_1(L,x))

'''Astuce pour voir où un terme est ajouté quand il est déjà dans la liste: ajouter le flotant associé, par exemple 5.0 (float)'''

# Question 3 - Insertion_Dicho_rec_2

def Insertion_Dicho_rec_2(L,x):
    def rec(L,x,i,j): # j non inclus
        if i == j:
            L.insert(i,x) # Insertion à gauche
        else:
            im = (i+j-1)//2 # Milieu gauche
            Tm = L[im]
            if x > Tm:
                i = im + 1 # im exclus
            else:
                j = im # im exclus
            rec(L,x,i,j)
    rec(L,x,0,len(L))

''' Milieu gauche img = (i+j-1)//2 ou milieu droite imd = (i+j)//2 OK - si i=j, img sera -1 avec //, 0 avec int(.../2), mais cas traité à part donc ok'''

L,x = [],1
Insertion_Dicho_rec_2(L,x)
print('Q3: ',L)
L,x = [1,3,5,7,8],0
Insertion_Dicho_rec_2(L,x)
print('Q3: ',L)
L,x = [1,3,5,7,8],1
Insertion_Dicho_rec_2(L,x)
print('Q3: ',L)
L,x = [1,3,5,7,8],4
Insertion_Dicho_rec_2(L,x)
print('Q3: ',L)
L,x = [1,3,5,7,8],5
Insertion_Dicho_rec_2(L,x)
print('Q3: ',L)
L,x = [1,3,5,7,8],8
Insertion_Dicho_rec_2(L,x)
print('Q3: ',L)
L,x = [1,3,5,7,8],9
Insertion_Dicho_rec_2(L,x)
print('Q3: ',L)

## Exercice 7 - Listes quelconque

# Question 1 - Somme des termes

'''Principe: Si L est un nombre, on le renvoie, sinon on enlève un element de L, et on pratique la somme sur chaque morceau s'il est non vide puis on renvoie la somme de ces 2 sommes'''

def Somme_Rec_1(L):
    if type(L) != list:
        return L
    else:
        if len(L) == 0:
            return 0
        else:
            Premier = L[0]
            Reste = L[1:]
            Somme_Premier = Somme_Rec_1(Premier)
            Somme_Reste = Somme_Rec_1(Reste)
            return Somme_Premier + Somme_Reste

L = [1,[[2,3,[2]]],[[1,2],3]]
S = Somme_Rec_1(L)
print('Q1: ',S)

'''Principe: Si L est un nombre, on le renvoie, sinon, on fait la somme de toutes les listes ou éléments de L en appelant la fonction récursive pour chaque élément'''

def Somme_Rec_2(L):
    if type(L) != list:
        return L
    else:
        Res = 0
        if len(L) != 0:
            for t in L:
                Res += Somme_Rec_2(t)
        return Res

L = [1,[[2,3,[2]]],[[1,2],3]]
S = Somme_Rec_2(L)
print('Q1: ',S)

# Question 2 - Regroupement

'''Principe: mêmes principes qu'à la question précédente'''

def Regroupe_1(L):
    if type(L) != list:
        return [L]
    else:
        if len(L) == 0:
            return []
        else:
            Premier = L[0]
            Reste = L[1:]
            Groupe_Premier = Regroupe_1(Premier)
            Groupe_Reste = Regroupe_1(Reste)
            return Groupe_Premier + Groupe_Reste

L = [1,[[2,3,[2]]],[[1,2],3]]
S = Regroupe_1(L)
print('Q2: ',S)

def Regroupe_2(L):
    if type(L) != list:
        return [L]
    else:
        Res = []
        if len(L) != 0:
            for t in L:
                Reg = Regroupe_2(t)
                Res += Reg
        return Res

L = [1,[[2,3,[2]]],[[1,2],3]]
S = Regroupe_2(L)
print('Q2: ',S)

## Exercice 8 - Distribution d'argent

def Distribution(Argent,Personnes=0):
    Personnes = Personnes + 1
    Reste = Argent - Personnes
    if Reste < 0:
        Reste = Argent
        Personnes -= 1
        return Reste,Personnes
    else:
        return Distribution(Reste,Personnes)

Argent = 10
print(Distribution(Argent))

def Distribution_Totale(Argent,Personnes_tot=0):
    Argent,Personnes = Distribution(Argent)
    Personnes_tot += Personnes
    if Argent == 0:
        return Personnes_tot
    else:
        return Distribution_Totale(Argent,Personnes_tot)

Argent = 11
print(Distribution_Totale(Argent))

def Distribution_Totale(Argent,Personnes_Jeu=0,Personnes_tot=0):
    ''' Version qui refait tout '''
    Personnes_tot += 1
    Personnes_Jeu += 1
    Reste = Argent - Personnes_Jeu
    if Reste == 0:
        return Personnes_tot
    else:
        if Reste < 0:
            Personnes_Jeu = 0
            Reste = Argent
            Personnes_tot -= 1
        return Distribution_Totale(Reste,Personnes_Jeu,Personnes_tot)

Argent = 11
print(Distribution_Totale(Argent))

## Exercice 9 - Algorithme de Horner

# Question 1 - Somme des bk*x^k

def eval(L,x):
    Res = 0
    for i in range(len(L)):
        ai = L[i]
        pui = len(L) - i - 1
        Res += ai * x**pui
    return Res

L = [1,1,1]
x = 4

Res = eval(L,x)
print(Res)

# Question 2 - Itérative

def horner1(L,x):
    Res = 0
    for i in range(len(L)):
        Res = Res*x + L[i]
    return Res

L = [1,1,1]
x = 4

Res = horner1(L,x)
print(Res)

# Question 3 - Récursive

def horner2(L,x): # Taille L mini 2
    if len(L)==2:
        p1,p0 = L
        return p1*x+p0
    else:
        LL = L[:-1]
        p0 = L[-1]
        return horner2(LL,x)*x + p0

L = [1,1,1]
x = 4

Res = horner2(L,x)
print(Res)

## Exercice 10 - Chiffres romains

# Question 1 - Correspondance lettre / chiffre

def Correspondance(X):
    if X == 'I':
        return 1
    elif X == 'V':
        return 5
    elif X == 'X':
        return 10
    elif X == 'L':
        return 50
    elif X == 'C':
        return 100
    elif X == 'D':
        return 500
    elif X == 'M':
        return 1000

# Question 2 - Conversion Romain / Entier sans répétition de termes

def Chiffre_Romain(X):
    Taille = len(X)
    if Taille == 1:
        return Correspondance(X)
    else:
        T0 = X[0]
        T1 = X[1]
        C0 = Correspondance(T0)
        C1 = Correspondance(T1)
        Reste = X[1:]
        Somme_Reste = Chiffre_Romain(Reste)
        if C0 < C1:
            Op = -1
        else:
            Op = 1
        Res = Somme_Reste + Op*C0
        return Res

X = 'MXVI'
print(Chiffre_Romain(X))

# Pour le moment ça fonctionne si on a des chiffres plus grands que la suite et répétés, genre MMMC oui, mais XXXC ça marche pas

# Question 3 - Prise en compte termes répétés

def Chiffre_Romain(X):
    Taille = len(X)
    if Taille == 1:
        return Correspondance(X),1
    else:
        T0 = X[0]
        T1 = X[1]
        C0 = Correspondance(T0)
        C1 = Correspondance(T1)
        Reste = X[1:]
        Somme_Reste,Op = Chiffre_Romain(Reste)
        if C0 < C1:
            Op = -1
        elif C0 > C1:
            Op = 1
        else: # C0=C1
            Op = Op # Op non modifié
        Res = Somme_Reste + Op*C0
        return Res,Op

X = 'XXXC'
print(Chiffre_Romain(X)[0])

X = 'CXXX'
print(Chiffre_Romain(X)[0])

## Exercice 11 - Partitions croissantes d'un entier - V1

# Question 1 - Non croissantes avec doublons

def Partition_1(n):
    if n==1:
        return [[1]]
    else:
        Res = []
        Part = Partition_1(n-1)
        for p in Part:
            pc = p.copy()
            pc.insert(0,1)
            Res.append(pc)
            for i in range(len(p)):
                pc = p.copy()
                pc[i] += 1
                Res.append(pc)
        return Res

n=4
P = Partition_1(n)
print(P)

'''Pour limiter les doublons, j'ai évité d'ajouter le 1 partout, juste en position 0 avec insert'''

# Question 2 - Croissantes sans doublons

def Ajout(Lp,p): # Modifie Lp
    p.sort() # trier pour identifier les mêmes à l'ordre des termes près
    if p not in Lp:
        Lp.append(p)

def Partition_2(n):
    if n==1:
        return [[1]]
    else:
        Res = []
        Part = Partition_2(n-1)
        for p in Part:
            pc = p.copy()
            pc.insert(0,1)
            Ajout(Res,pc)
            for i in range(len(p)):
                pc = p.copy()
                pc[i] += 1
                Ajout(Res,pc)
        return Res

n=4
P = Partition_2(n)
print(P)

# Question 3 - Nombre de partitions croissantes

from matplotlib import pyplot as plt
plt.close('all')
def Affiche(fig,X,Y):
    plt.figure(fig)
    plt.plot(X,Y)
    plt.show()

n = 20
Lx  = [i for i in range(n)]
Ly = [len(Partition_2(i)) for i in range(1,n+1)]
Affiche(1,Lx,Ly)

# Question 4 - Repartition(n,q,m)

def Repartition(n,q,m,M):
    P = Partition_2(n)
    Res = []
    for p in P:
        Cond_1 = (len(p)==q)
        Cond_2 = (max(p) <= M)
        Cond_3 = (min(p) >= m)
        if Cond_1 and Cond_2 and Cond_3:
            Res.append(p)
    return Res

Rep = Repartition(20,6,3,5)
print("Répartitions :", Rep)

## Exercice 12 - Partitions croissantes d'un entier - V2

# Question 1 - Partition_qm(n,q,m)

def Partition_qm(n,q,m):
    if q==1:
        if 0 < n <= m:
            return [[n]]
        else:
            return []
    else:
        Res = []
        Nb = q-1 # Il ne faudra rajouter qu'un terme
        M = min(m,n) # Il ne dépassera ni n, ni m
        for terme in range(1,M+1):
            N = n-terme # On enlève terme, il faudra donc rajouter terme
            Part = Partition_qm(N,Nb,terme) # Bien mettre terme et pas m - Cela limite le résultat aux partitions croissantes
            for p in Part:
                pc = p + [terme] # Le mettre à droite - Forcément >= aux termes de p
                Res.append(pc)
        return Res

n = 4
q = 3 # Nb ki
m = 5 # ki < m
P = Partition_qm(n,q,m)
print('Q1',P)
P.sort()
print('Q1 Triée',P)

# Question 2 - Partitions croissantes de n

def Partition(n) :
    Res = []
    for q in range(1,n+1):
        Part_q = Partition_qm(n,q,n)
        Res.append(Part_q)
    return Res

n = 4
P = Partition(n)
print('Q2',P)
P.sort()
print('Q2 Triée',P)

## Exercice 13 - Diagonale de Cantor

# Question 1 - Cantor(x,y)

def Cantor(x,y):
    if (x,y) == (0,0):
        return 0
    else:
        if y == 0:
            X_Prec = 0
            Y_Prec = x - 1
        else:
            X_Prec = x + 1
            Y_Prec = y - 1
        Res = Cantor(X_Prec,Y_Prec) + 1
        return Res

print(Cantor(2,2))

# Question 2 - Cantor_Inv(n)

def Cantor_Inv(n):
    if n == 0:
        return 0,0
    else:
        x,y = Cantor_Inv(n-1)
        if x == 0 :
            X_Suiv = y + 1
            Y_Suiv = 0
        else:
            X_Suiv = x - 1
            Y_Suiv = y + 1
        return X_Suiv,Y_Suiv

print(Cantor_Inv(12))

## Exercice 14 - Complexité de Fibonacci

def init_compteur():
    global Compteur
    Compteur = 0

def affiche_compteur():
    print("Compteur: ",Compteur)

def incremente_compteur(i):
    global Compteur
    Compteur += i

def fibonacci(n):
    if n==0:
        return 0
    elif n==1:
        return 1
    else:
        incremente_compteur(1)
        return fibonacci(n-1)+fibonacci(n-2)

n = 10
init_compteur()
print(fibonacci(n))
affiche_compteur()

from math import sqrt
Nb_Sommes = (-1/sqrt(5))*((1-sqrt(5))/2)**(n+1)+(1/sqrt(5))*((1+sqrt(5))/2)**(n+1)-1
Nb_Sommes = int(round(Nb_Sommes,0))
print('Nombre de sommes effectif: ',Nb_Sommes)

## Exercice 15 - Complexités diverses

# Question 1 - Fonctions à analyser

def f1(n):
    if n==1:
        return 1
    else:
        return f1(n-1)

def f2(n):
    if n==1:
        return 1
    else:
        for i in range(n):
            a = 1
        return f2(n-1)

def f3(n):
    if n==1:
        return 1
    else:
        return f3(n-1)+f3(n-1)

# Question 2 - Complexités

"""
f1:
- auto-appel 1 fois au rang n-1
- O(1) à chaque étape
-> O(n)
"""

"""
f2:
- auto-appel 1 fois au rang n-1
- O(n) à chaque étape
-> O(n²)
"""

"""
f3:
- auto-appel 2 fois au rang n-1
- O(1) à chaque étape
-> O(2^n)
"""

# Question 3 - Temps(f,n)

import time
def Temps(f,n):
    '''Détermine le temps d'exécution de f(n)'''
    tic = time.perf_counter()
    f(n)
    toc = time.perf_counter()
    tps = toc-tic
    return tps

# Question 4 - Etude_Tps(f,nmax)

def Etude_Tps(f,nmax):
    '''Renvoie les listes Ln des n et LT des temps de f(n) pour n de 1 à nmax'''
    Ln = []
    LT = []
    for n in range(1,nmax+1):
        print(n)
        Tps = Temps(f,n)
        if Tps > 30: # Si le temps dépasse XXs, on arrête l'analyse
            break
        Ln.append(n)
        LT.append(Tps)
    return Ln,LT

# Question 5 - Affiche

import matplotlib.pyplot as plt
plt.close('all')
def Affiche(fig,Lx,Ly,Leg):
    plt.figure(fig)
    plt.plot(Lx,Ly,label=Leg)
    plt.legend()
    plt.show()

# Question 6 - Analyse

nmax = 986 # maxi autorisé par la pile d'exécution
Ln1,Lt1 = Etude_Tps(f1,nmax)
Ln2,Lt2 = Etude_Tps(f2,nmax)
Ln3,Lt3 = Etude_Tps(f3,nmax)
Affiche(1,Ln1,Lt1,"f1")
Affiche(2,Ln2,Lt2,"f2")
Affiche(3,Ln3,Lt3,"f3")

# Question 7 - Valeurs finales

"""
g1 tend vers k avec O(k*n)
g2 tend vers k avec O(k*n²)
g3 tend vers g avec O(g^n) donc vers 2
"""

# Question 8 - Fonctions gi

def g1(t,n): # O(k*n)
    return t/n # Doit être égal k

def g2(t,n): # O(k*n²)
    return t/(n**2) # Doit être égal k

from math import exp,log
def g3(t,n): # O(k**n)
    return exp(log(t)/n) # Doit être égal g=2

# Question 9 - Etude

def Etude(gi,Lni,Lti):
    N = len(Lni)
    L = []
    for i in range(N):
        n = Lni[i]
        t = Lti[i]
        val = gi(t,n)
        L.append(val)
    return L

# Question 10 - Analyse

L1 = Etude(g1,Ln1,Lt1)
L2 = Etude(g2,Ln2,Lt2)
L3 = Etude(g3,Ln3,Lt3)

Affiche(11,Ln1,L1,"f1")
Affiche(12,Ln2,L2,"f2")
Affiche(13,Ln3,L3,"f3")