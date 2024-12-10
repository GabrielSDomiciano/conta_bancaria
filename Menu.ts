import readlinesync = require("readline-sync");
import { colors } from './src/util/colors';
export function main() {

    let opcao: number;
    let continuar = true;

    while (continuar) {
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
                console.log(colors.fg.magenta, "\n\ncriar contas\n\n",colors.reset);
                
                break;
            case 2:
                console.log("\n\nlistar todas as contas\n\n");

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
                sobre ();
                continuar = false;

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


main()



