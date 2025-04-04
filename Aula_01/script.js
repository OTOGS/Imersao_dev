function conversorWon(){
    valor_em_won = parseFloat(prompt('Digite o valor em wons para converter em reais:'));
    um_won_em_real = 0.0038634587;
    valor_convertido = valor_em_won * um_won_em_real;
    alert('₩ ' + valor_em_won.toLocaleString('pt-BR') + ' convertido em reais é R$ ' + valor_convertido.toLocaleString('pt-BR'));
};
function conversorEuro(){
    valor_em_euro = parseFloat(prompt('Digite o valor em euro para converter em reais:'));
    um_euro_em_real = 6.3469;
    valor_convertido = valor_em_euro * um_euro_em_real;
    alert('€ ' + valor_em_euro.toLocaleString('pt-BR') + ' convertido em reais é R$ ' + valor_convertido.toLocaleString('pt-BR'));
};
function conversorDolar(){
    valor_em_dolar = parseFloat(prompt('Digite o valor em dolar para converter em reais:'));
    um_dolar_em_real = 5;
    valor_convertido = valor_em_dolar * um_dolar_em_real;
    alert('$ ' + valor_em_dolar.toLocaleString('pt-BR') + ' convertido em reais é R$ ' + valor_convertido.toLocaleString('pt-BR'));
};