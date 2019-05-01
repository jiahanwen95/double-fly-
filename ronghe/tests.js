function tests(){
    RunGame(15);
    console.clear();
    console.log("Testing started: ");
    test01();
    test02();
    test03();
    test04();
    test05();
    test06();
    test07();
    test08();
    test09();
    console.log("Testing ended.");
}

function test01(){
    console.log("Test 01: Game is Initiallized: ");
    if(game)
    console.log("Passed.");
    else
    console.log("failed.");
}

function test02(){
    console.log("Test 02: Bird is initiallized: ");
    if(game.bird)
    console.log("Passed.");
    else
    console.log("Failed.");
}

function test03(){
    console.log("Test 03: Obstacles are created: ");
    obstacle();
    if(myObstacles.length>0)
    console.log("Passed.");
    else
    console.log("Failed.");
}

function test04(){
    console.log("Test 04: Mushrooms are created: ");
    if(myMushrooms.length>0)
    console.log("Passed.");
    else
    console.log("Failed.");
}

function test05(){
    console.log("Test 05: Game over on hit with obstacle: ");
    if(game.gameOver)
    console.log("Passed.");
    else
    console.log("Failed.");
}

function test06(){
    console.log("Test 06: Extra life when hit with mushroom: ");
    myMushrooms.push(new component(mush_img, 50, 50, "green", game.bird.x-25 , game.bird.y-25))
    myMushrooms[0].crashWith(game.bird);
    if(life>3)
    console.log("Passed.");
    else
    console.log("Failed.");
}

function test07(){
    console.log("Test 07: Lose life when bird hits the obstacle: ");
    myObstacles[0] = new component(down_img, 20, 100, "green", game.bird.x+5, game.bird.y+5);
    if(myObstacles[0].crashWith(game.bird))
    console.log("Passed.");
    else
    console.log("Failed.");
}

function test08(){
    console.log("Test 08: Sound is played: ");
    if(!bg_sound.paused)
    console.log("Passed.");
    else
    console.log("Failed.");
}

function test09(){
    console.log("Test 09: 2-player option works: ");
    if(bird2)
    console.log("Passed.");
    else
    console.log("Failed.");
}

