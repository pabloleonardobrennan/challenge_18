
const options = ['Piedra','Papel','Tijera'];

function player(){
    let option = prompt('(1)-->Piedra\n(2)-->Papel\n(3)-->Tijera\n')
    if((option==1 || option==2) || option==3){
        return option;
    }
}

function bot(){
    let random = Math.round((Math.random())*2); // numero de 0 - 2
    return options[random];
}

function play(){
    let play_player = player();
    let play_bot = bot();
    switch(true){
        case play_player == play_bot:
            alert(`Bot jugó ${play_bot}`+'\nEmpate');
        break
        case play_player==1 && play_bot=='Papel':
            alert(`Bot jugó ${play_bot}`+'\nPerdiste👎');
        break
        case play_player==1 && play_bot=='Tijera':
            alert(`Bot jugó ${play_bot}`+'\nGanaste!👍\n');
        break
        case play_player==2 && play_bot=='Piedra':
            alert(`Bot jugó ${play_bot}`+'\nGanaste!👍\n');
        break
        case play_player==2 && play_bot=='Tijera':
            alert(`Bot jugó ${play_bot}`+'\nPerdiste👎');
        break
        case play_player==3 && play_bot=='Piedra':
            alert(`Bot jugó ${play_bot}`+'\nPerdiste👎');
        break
        case play_player==3 && play_bot=='Papel':
            alert(`Bot jugó ${play_bot}`+'\nGanaste!👍\n');
        break
        
    }
}