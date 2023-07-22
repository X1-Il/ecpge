'''5 - Fonctions récursives'''

## 5-2 - Exponentiation rapide

# Question 1 - exp

def exp(a,n):
    return a**n

# Question 2 - expr1

def expr1(a,n): # O(n)
    global Compteur
    Compteur += 1
    if n==0:
        return 1
    else:
        return a*expr1(a,n-1)

# Question 3 - expr2

def expr2(a,n): # O(n)
    global Compteur
    Compteur += 1
    if n==0: #1
        return 1
    elif n==1: #2
        return a
    else:
        a1 = expr2(a,n//2)
        a2 = expr2(a,n-n//2)
        return a1*a2

#1 Uniquement si appelle initial pour n=0 puisque n=1 est traité - Si on ne traite pas 1, il se rappelle pour 1 et 0... cf remarque #2
#2  A traiter obligatoirement - Ne traiter que 0 conduit à s'auto appeler pour 0 et 1 indéfiniement - Traiter 1 ne fait plus passer dans le cas 0

# Question 4 - expr3

def expr3(a,n): # O(ln(n))
    global Compteur
    Compteur += 1
    if n==0:
        return 1
    else:
        b = expr3(a,n//2) # Surtout pas de expr3 après !
        res = b*b
        if n%2 == 1:
            res = res*a #1
        return res

#1 Eviter le ** même si cela ne changera pas grand chose puisqu'on fait déjà de l'exponetiation rapide - A ce stade vous ne le savez pas

# Questions 4567

a = 2
n = 986 # Limite pile exécution

from time import perf_counter as tps

tic = tps()
Res = exp(a,n)
# print('exp: ',Res)
toc = tps()
T = toc - tic
print("Temps **: ",T)

Compteur = 0
tic = tps()
Res = expr1(a,n)
toc = tps()
print("Compteur: ",Compteur)
# print('expr1: ',Res)
Tr1 = toc - tic
print("Temps r1: ",Tr1)

Compteur = 0
tic = tps()
Res = expr2(a,n)
toc = tps()
print("Compteur: ",Compteur)
# print('expr2: ',Res)
Tr2 = toc - tic
print("Temps r2: ",Tr2)

Compteur = 0
tic = tps()
Res = expr3(a,n)
toc = tps()
print("Compteur: ",Compteur)
# print('expr3: ',Res)
Tr3 = toc - tic
print("Temps r3: ",Tr3)

print('Tr1/T**:',Tr1/T)
print('Tr2/T**:',Tr2/T)
print('Tr3/T**:',Tr3/T)

# On remarque que Tr3 est du même ODG que T - Ils ont bien programmé le langage python :)
# Mes compteurs ralentissent évidemment un peu mes fonctions