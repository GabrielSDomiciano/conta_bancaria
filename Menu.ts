import readlinesync = require("readline-sync");
import { colors } from './src/util/colors';

import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/Contapoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {
 
    let Conta: ContaController = new ContaController();
    
    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;

    let titular: string;

    const contas = new ContaController ();

    const tiposContas = ['contas corrente','conta poupanca'];

    // const c1 = new Conta(1, 500, 1, "gabriel", 20000);
    // c1.visualizar();

    // console.log(c1.sacar(200));
    // c1.visualizar();

    // const c2 = new Conta(2, 400, 2, "jonas", 2000);
    // c2.visualizar();

    // c2.depositar(100.00)
    // c2.visualizar();

    


    while (true) {
        console.log(colors.bg.magenta, colors.fg.blue)


        console.log("******************************************");
        console.log("******************************************");
        console.log("        BANCO DO POVO                     ");
        console.log("******************************************");
        console.log("                                          ");
        console.log("                                          ");
        console.log("       1 - criar conta                    ");
        console.log("       2 - lstar todas as contas          ");
        console.log("       3 - buscar conta por numero        ");
        console.log("       4 - atualizar dados da conta       ");
        console.log("       5 - apagar conta                   ");
        console.log("       6 - sacar                          ");
        console.log("       7 - Depositar                      ");
        console.log("       8 - transferir valores entre contas");
        console.log("       0 - sair                           ");
        console.log("******************************************");
        console.log("******************************************");
        console.log("******************************************");
        console.log(
            colors.reset);

        console.log("entre com a opcao desejada: ")
        opcao = readlinesync.questionInt();

        switch (opcao) {
            case 1:
                console.log(colors.fg.magenta, "\n\ncriar contas\n\n", colors.reset);
                console.log("digite o numero da agencia");
                agencia = readlinesync.questionInt("");
                
                console.log("digite o  nome do titular da conta: ");
                titular = readlinesync.question("");

                console.log("digite o tipo de conta: ");
                tipo = readlinesync.keyInSelect(tiposContas,"",{cancel: false}) + 1;
                
                console.log("digite o saldo da conta (r$): ");
                saldo = readlinesync.questionFloat("");
            
                switch (tipo) {
                    case 1:
                        console.log("digite o limite da conta (r$): ");
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));

                        case 2:
                            console.log("digite o dia do aniversario da conta poupanca: ");
                            aniversario = readlinesync.questionInt("");
                            contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
                
                    keyPress()
                        break;
                }
            case 2:
                console.log(colors.fg.magenta, "\n\listar todas as contas")
                 
                contas.listarTodas()
                break;
            case 3:
                console.log("\n\nbuscar conta por numero\n\n");

                break;
            case 4:
                console.log("\n\natualizar dados da conta\n\n");

                break;
            case 5:
                console.log("\n\napagar conta\n\n");

                break;
            case 6:
                console.log("\n\nsacar\n\n");

                break;
            case 7:
                console.log("\n\ndepositar\n\n");
                break;
            case 8:
                console.log("\n\ntranferencia entre contas\n\n");
                break;

            case 0:
                sobre();
                 console.log("sair do programa")

                break;
            default:
                console.log("\nopcao invalida!\n");
                break;

        }
    }
}








export function sobre(): void {
    console.log("\n****************************************");
    console.log("projeto desenvolvido Gabriel Domiciano");
    console.log(" Gbarieldomiciano2017@gmail.com");
    console.log(" github.com/GabrielSDomiciano           ");
    console.log("*****************************************")


}
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
main();



