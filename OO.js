function Player (name, tool, currScore, choices, frequencies) {
        this.name = name;
        this.tool = tool;
        this.currScore = currScore;
        this.choices = choices;
        this.frequencies = frequencies;
}

Player.prototype.chooseTool = function() {

}

Player.prototype.updateFrequencies = function() {

}


function Game(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        let roundNum;
}

Player.prototype.findWinner = function() {

}

Player.prototype.playRound = function() {

}

Player.prototype.playGame = function() {

}

Player.prototype.speak = function() {
    console.log(`Game started for ${p1} & ${p2}`);
}
