
nota1 = float(input("Informe a primeira nota: "));
nota2 = float(input("Informe a segunda nota: "));
nota3 = float(input("Informe a terceira nota: "));
print('digite o peso de cada nota');
p1 = int(input("Informe o peso da primeira nota: "));
p2 = int(input("Informe o peso da segunda nota: "));
p3 = int(input("Informe o peso da terceira nota: "));
media = (nota1*p1 + nota2*p2 + nota3*p3) / (p1+p2+p3);
print('Média ponderada = ', media)
