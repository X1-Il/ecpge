'''0 - Bases Python'''

## 0-2 - Moyenne - Variance

## Préliminaires

N = 1000
from random import randint as rand
L = [rand(0,10*N) for i in range(N)]
from statistics import mean as moy
from statistics import pvariance as var
from time import perf_counter as tps
def T_exec(f,L,Nom):
    '''f est une fonction prenant en argument une liste'''
    tic = tps()
    Moy_Py = f(L)
    toc = tps()
    Temps = toc - tic
    print(Nom,Temps,"s")

Moy_Py = moy(L)
Var_Py = var(L)
print("Moyenne de L",Moy_Py)
print("Variance de L",Var_Py)
T_exec(moy,L,"Moyenne python")
T_exec(var,L,"Variance python")

## Questions

# Question 1

