'''ITC2 - 2 - Dictionnaires et programmation dynamique'''

'''2-3 - Le compte est bon'''

## Exercice 1 - Préliminaires

# Question 1 - Operation

def Operation(L,a,b,op): # Avec doublons
    txt = str(a)+op+str(b)
    Eval = eval(txt)
    if Eval == round(Eval,0):
        L.append(txt)

def Operation(L,a,b,op): # Sans les doublons de txt 2*2 2*2 2/2 2/2
    txt = str(a)+op+str(b)
    Eval = eval(txt)
    if Eval == round(Eval,0):
        if txt not in L:
            L.append(txt)

def Operation(L,a,b,op): # Sans les doublons txt et de résultat 2+2 & 2*2 ou 2+0 & 2-0
    txt = str(a)+op+str(b)
    Eval = eval(txt)
    if Eval == round(Eval,0):
        Mettre = True
        for e in L:
            if eval(e) == Eval: # or e == txt inutile
                Mettre = False
        if Mettre:
            L.append(txt)

''' Remarque
ne pas écrire: type(eval(txt))==int
La division de 2 entiers est un flottant, pourtant on veut pouvoir écrire 100/50 qui vaut 2
'''

# Question 2 - Operations

def Operations(a,b):
    Res = []
    txt = Operation(Res,a,b,'+')
    txt = Operation(Res,a,b,'-')
    txt = Operation(Res,b,a,'-')
    txt = Operation(Res,a,b,'*')
    if b != 0:
        txt = Operation(Res,a,b,'/')
    if a != 0:
        txt = Operation(Res,b,a,'/')
    return Res

# Question 3 - Successeurs

def Successeurs(L):
    N = len(L)
    L_succ = []
    for i in range(N):
        for j in range(i+1,N):
            a = L[i]
            b = L[j]
            Reste = L[:i]+L[i+1:j]+L[j+1:]
            Ops = Operations(a,b)
            Listes = []
            for txt in Ops:
                Val = int(eval(txt))
                Liste = Reste + [Val]
                Liste.sort()
                L_succ.append([Liste,txt])
    return L_succ

#print(Successeurs([2,3]))
#print(Successeurs([2,5,10]))

## Exercice 2 - Première approche récursive

# Question 1 - lceb1

def lceb1(L,V):
  if len(L) == 1:
    if L[0] == V:
      return True
    else:
      return False
  else:
    L_Succ = Successeurs(L)
    for Liste,txt in L_Succ:
      Bool = lceb1(Liste,V)
      if Bool:
        return Bool
    return Bool # Forcément False

'''
L = [1,2,3,4,5]
V = 63
Res = lceb1(L,V)
print(Res)
V = 1000
Res = lceb1(L,V)
print(Res)
'''

# Question 2 - lceb2

def lceb2(L,V):
  if len(L) == 1:
    if L[0] == V:
      return True,""
    else:
      return False,""
  else:
    L_Succ = Successeurs(L)
    for Liste,txt in L_Succ:
      Bool,Texte_Prec = lceb2(Liste,V)
      if Bool:
        Calc = txt + "=" + str(eval(txt))
        Texte = Calc + " ; " + Texte_Prec
        return Bool,Texte
    return Bool,Texte_Prec

'''
L = [1,2,3,4,5]
V = 63
Bool,Res = lceb2(L,V)
print(Res)
'''

# Question 3 - Temps

from time import perf_counter as tps
from numpy import inf

def Temps(f,n):
    L = [1]*n
    V = inf
    tic = tps()
    Bool,Res = f(L,V)
    toc = tps()
    Temps = toc - tic
    print("Temps n="+str(n),Temps)

'''
for n in range(1,7):
    Temps(lceb2,n)
'''

'''
Temps n=1 3.400000196052133e-06
Temps n=2 0.00022990000002209854
Temps n=3 0.0018807000001288543
Temps n=4 0.0379153999999744
Temps n=5 1.1463561999999001
Temps n=6 60.02132099999994
'''

# Question 4 - lceb3

def lceb3(L,V):
    def rec(L,V):
        if tuple(L) in Dico: # Nouveau
            Bool,Texte = Dico[tuple(L)]
            return Bool,Texte
        else:
            if len(L) == 1:
                if L[0] == V:
                    return True,""
                else:
                    return False,""
            else:
                L_Succ = Successeurs(L)
                for Liste,txt in L_Succ:
                    Bool,Texte_Prec = rec(Liste,V) # rec !!!
                    if Bool:
                        Calc = txt + "=" + str(eval(txt))
                        Texte = Calc + " ; " + Texte_Prec
                        Dico[tuple(L)] = Bool,Texte # Nouveau
                        return Bool,Texte
                Dico[tuple(L)] = Bool,Texte_Prec # Nouveau
                return Bool,Texte_Prec
    Dico = {}
    return rec(L,V)

'''
for n in range(1,7):
    Temps(lceb3,n)
'''

'''
Temps n=1 4.73000000056345e-05
Temps n=2 0.0010555999999724008
Temps n=3 0.00372719999995752
Temps n=4 0.014039300000149524
Temps n=5 0.02394759999992857
Temps n=6 0.03419559999997546
'''

# Questuin 5 - lceb4

def lceb4(L,V):
    def rec(L,V):
        if tuple(L) in Dico:
            Bool,Texte = Dico[tuple(L)]
            return Bool,Texte
        else:
            if len(L) == 1:
                if L[0] == V:
                    return True,""
                else:
                    return False,""
            elif V in L: # Nouveau
                return True,""
            else:
                L_Succ = Successeurs(L)
                for Liste,txt in L_Succ:
                    Bool,Texte_Prec = rec(Liste,V) # rec !!!
                    if Bool:
                        Calc = txt + "=" + str(eval(txt))
                        Texte = Calc + " ; " + Texte_Prec
                        Dico[tuple(L)] = Bool,Texte
                        return Bool,Texte
                Dico[tuple(L)] = Bool,Texte_Prec
                return Bool,Texte_Prec
    Dico = {}
    return rec(L,V)

'''
L = [1,2,3,4,5]
V = -1
Bool,Res = lceb4(L,V)
print(Res)
'''

## Exercice 3 - Graphe et parcours en largeur

# Question 1 - Graphe

from collections import deque

def Graphe(L0):
    G = {}
    L0.sort()
    Cle = tuple(L0)
    G[Cle] = [[],'RAS']
    file = deque()
    file.append(L0)
    while len(file) != 0:
        L_act = file.popleft()
        LL_succ = Successeurs(L_act)
        for L_succ,txt in LL_succ:
            Cle = tuple(L_succ)
            if Cle not in G:
                file.append(L_succ)
                G[Cle] = [L_act,txt] # Cf. remarque
    return G

''' Remarques:
- Penser à indenter "G[Cle] = [L_act,txt]" comme le veut le parcours en largeur. Si on dédindente cette ligne, on remplacera un chemin possible par un autre. Si plusieurs solutions mènent au même résultat, indenter ou non change la solution retenue. Mais c'est dommage de remplacer une entrée dans un dico pour rien, gagnons du temps.
- Quoi qu'il arrive, notre programmation fera qu'il n'y a qu'une solution
- Et, en faisant comme proposé, on obtient la première solution atteinte (parcours en largeur...), ce qui n'est pas très important ici, mais le sera plus à la fin avec la gestion des résultats obtenus sans utiliser tous les termes de L0
- L'initialisation n'a pas d'importance ici, mais elle en aura une dans la partie suivante
'''

# Question 2 - Résolution

def Resolution(Gr,L0,V): # Fonction non attendue, mais plus propre car aussi utilisée avec graphe_Bis
    G = Gr(L0)
    V = (V,)
    L_txt = []
    if V not in G:
        print("Pas de solution")
    else:
        while V in G:
            V,txt = G[V]
            V = tuple(V)
            L_txt.append(txt)
        print("Solution:")
        L_txt.reverse()
        for txt in L_txt:
            if txt != 'RAS':
                Ligne = txt + " = " + str(int(eval(txt)))
                print(Ligne)

L0 , V = [50,25,5,3,6,5] , 928
L0 , V = [50,10,3,8,7,5] , 883
L0 , V = [2,3,4,50] , 206 # Perso: fait 2*3+4*50
L0 , V = [100,5,2,4,6,8] , 434
L0 , V = [50,9,4,50,9,6,1] , 810
L0 , V = [1,50,100] , 3 # Perso: fait 100/50 + 1

print("Liste disponible: ",L0)
print("Valeur attendue: ",V)
print()

Resolution(Graphe,L0,V)

# Question 3 - Possibles

def Possibles(L):
    G = Graphe(L)
    Res = []
    for Val in G:
        if len(Val) == 1:
            Res.append(Val[0])
    return Res

L = [2,5,10]
Poss = Possibles(L)
print("")
print("Liste:",L)
print("Possibilités",Poss)

# Question 4 - Graphe_Bis

'''
Il faut ajouter dans le graphe les éléments de chaque liste en plus d'ajouter les listes
'''

def Graphe_Bis(L0):
    G = {}
    L0.sort()
    Cle = tuple(L0)
    G[Cle] = [[],'RAS']
    #---------------
    for t0 in L0:
        Cle = tuple([t0]) # Penser à mettre []
        if Cle not in G:
            G[Cle] = [[],'RAS']
    # Inutile de les ajouter dans la file
    #---------------
    file = deque()
    file.append(L0)
    while len(file) != 0:
        L_act = file.popleft()
        LL_succ = Successeurs(L_act)
        for L_succ,txt in LL_succ:
            Cle = tuple(L_succ)
            if Cle not in G:
                file.append(L_succ)
                G[Cle] = [L_act,txt]
            #---------------
            for t in L_succ:
                Cle = tuple([t]) # Penser à mettre []
                if Cle not in G:
                    G[Cle] = [L_act,txt]
                    # Inutile de les ajouter dans la file
            #---------------
    return G

''' Remarques
- Il est très important de ne pas remplacer une clé déjà présente (le parcours en largeur bien programmé le permet) lorsque la clé n'a qu'un nombre. En effet, dès qu'un nombre apparaît pour la première fois, il est obigatoirement issu du calcul qui vient d'avoir lieu.
Si on le remplace ensuite, le calcul qui sera indiqué ne sera pas celui qui à mené à obtenir ce nombre, et la solution affichée sera fausse.
- L'initialisation est nécessaire (pour L0 pas vraiment...). Sinon, les nombres seuls de L0 sont entrés dans le graphe après une itération, les deux utilisés à la première itération ne sont pas ajoutés, mais pire, tous les autres sont ajoutés avec un texte d'une opération fausse
'''

# Essais

L0 , Total = [1,50,100] , 51 # Doit s'arrêter de suite
L0 , Total = [1,50,100] , 1 # Doit s'arrêter à 1 calcul

print("Liste disponible: ",L0)
print("Total attendu: ",Total)
print()

Resolution(Graphe_Bis,L0,V)

''' Remarque
Avec le parcours en largeur, on trouvera la première solution menant au résultat s'il y en a plusieurs, donc la plus courte en nombre de calculs réalisés :)
'''

# Question 5 - Possibilités

L = [2,5,10]
Graphe = Graphe_Bis
Poss = Possibles(L)
print("")
print("Liste:",L)
print("Possibilités",Poss)
