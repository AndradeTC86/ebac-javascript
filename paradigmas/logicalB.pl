pai(josé, joão).
pai(joão, julio).
pai(julio, jorge).

filho(X, Y) :- pai(Y, X).
avô(X, Y) :- pai(X,Z), pai(Z,Y).
neto(X, Y) :- pai(Z, X), pai(Y, Z).

% testes
% pai(julio, X).
% filho(julio, X).
% avô(X, julio).