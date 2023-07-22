'''10 - Représentation des nombres'''

## 10-2 - TD - Entiers multi-précision

# Quelques outils

# Question 1

def Conv_N2L(N):
    STR = str(N)
    Res = []
    for t in STR:
        t = int(t)
        Res.append(t)
    return Res

N = 1234
N_Conv = Conv_N2L(N)
print(N_Conv)

# Question 2

def Conv_L2N(L):
    Res = ''
    for t in L:
        Res += str(t)
    Res = int(Res)
    return Res

L = [1,2,3,4]
L_Conv = Conv_L2N(L)
print(L_Conv)

Verif = Conv_N2L(Conv_L2N(L))
print(L,Verif)

# Question 3

def Complement(L1,L2):
    T1 = len(L1)
    T2 = len(L2)
    if T1 > T2:
        dT = T1-T2
        for i in range(dT):
            L2.insert(0,0)
    else:
        dT = T2-T1
        for i in range(dT):
            L1.insert(0,0)
    return L1,L2

L1 = [1,2,3,4]
L2 = [5,6,7]
L1,L2 = Complement(L1,L2)
print(L1,L2)

L1 = [1,2,3]
L2 = [4,5,6,7]
L1,L2 = Complement(L1,L2)
print(L1,L2)

# Addition

# Question 4

def Addition(N1,N2):
    L1 = Conv_N2L(N1)
    L2 = Conv_N2L(N2)
    L1,L2 = Complement(L1,L2)
    Taille = len(L1)
    Res = []
    Retenue = 0
    for i in range(Taille-1,-1,-1):
        t1 = L1[i]
        t2 = L2[i]
        Somme = t1+t2+Retenue
        s = Somme%10
        Retenue = Somme//10
        Res.insert(0,s)
    Res.insert(0,Retenue)
    Res = Conv_L2N(Res)
    return Res

N1 = 23
N2 = 327
Add = Addition(N1,N2)
print(Add)

# Multiplication

# Question 4

def Addition_LN(LN):
    Res = 0
    for N in LN:
        Res = Addition(Res,N)
    return Res

LN = [1,2,3]
Add = Addition_LN(LN)
print(Add)

# Question 5

def Multiplication(N1,N2):
    L1 = Conv_N2L(N1)
    L2 = Conv_N2L(N2)
    T1 = len(L1)
    T2 = len(L2)
    Inter = []
    for i1 in range(T1-1,-1,-1):
        t1 = L1[i1]
        L = [0]*(T1-1-i1)
        Retenue = 0
        for i2 in range(T2-1,-1,-1):
            t2 = L2[i2]
            Produit = t1*t2 + Retenue
            p = Produit%10
            Retenue = Produit//10
            L.insert(0,p)
        L.insert(0,Retenue)
        Nb = Conv_L2N(L)
        Inter.append(Nb)
    Res = Addition_LN(Inter)
    return Res

N1 = 99
N2 = 22
Mult = Multiplication(N1,N2)
print(Mult)