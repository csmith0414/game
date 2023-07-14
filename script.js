function game() {
    var choice = ["R", "P", "S"]
    choiceToUse = choice[Math.floor(Math.random() * 3)]

    console.log("Choose R, P or S");

    let pick = window.prompt ("Choose R, P or S")
    window.alert("The computer picked " + choiceToUse)

    if (window.confirm("Do you want to play again?")) {
        game()
}
}

game()