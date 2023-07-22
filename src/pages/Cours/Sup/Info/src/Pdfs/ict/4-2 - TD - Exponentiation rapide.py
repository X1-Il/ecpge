'''4 - Algorithmes dichotomiques'''

## 4-2 - Exponentiation rapide

# Question 1 - exp

def exp(a,n):
    return a**n

# Question 2 - expi1

def expi1(a,n):
    Res = 1
    for i in range(n):
        Res *= a
    return Res

# Question 3 - expi2

def expi2(a,n):
    Res = 1
    A = a # a^(2k)
    while n!=0:
        Reste = n%2
        n = n//2
        if Reste == 1:
            Res *= A
        A = A*A # a^(2k)
    return Res

def expi2_bis(a,n):
    Lk = []
    # On crée la liste des k
    while n!=0:
        Reste = n%2
        n = n//2
        Lk.append(Reste)
    # Création du résultat
    Res = 1
    A = a
    for k in Lk:
        if k==1:
            Res*= A
        A *= A
    return Res

# Question 4

'''
expi1: O(n)
expi2: O(ln(n))
'''

# Q567

a = 2
n = 986 # cf TD-5-1 en récursif ;)

from time import perf_counter as tps

tic = tps()
Res = exp(a,n)
# print('exp: ',Res)
toc = tps()
T = toc - tic
print("Temps **: ",T)

tic = tps()
Res = expi1(a,n)
# print('expi1: ',Res)
toc = tps()
Ti1 = toc - tic
print("Temps i1: ",Ti1)

tic = tps()
Res = expi2(a,n)
# print('expi2: ',Res)
toc = tps()
Ti2 = toc - tic
print("Temps i2: ",Ti2)

print('Ti1/T**:',Ti1/T)
print('Ti2/T**:',Ti2/T)

# On remarque que Ti2 est du même ODG que T - Ils ont bien programmé le langage python :)
