const screen = document.getElementById('gameScreen');
const ctx = screen.getContext('2d');

// Tree generation
let treeId = 0;
let treeSpots = [[0, 0], [30, 0], [60, 0 ], [90, 0], [120, 0], [150, 0], [240, 0], [270, 0],
                [0, 130], [30, 130], [60, 130], [90, 130], [120, 130], [150, 130], [240, 130], [270, 130]]
const treeMaker = (position) => {
    treeId++;
    x = position[0];
    y = position[1];
    const tree = new Image();
    tree.src = '../images/large-oak-tree-with-knotted-trunk-clip-art-58849.jpg';
    let treeObj = {tree: tree, id: treeId, x: x, y: y};
    return treeObj; 
}

const drawTrees = () => {
    for (let i = 0; i < trees.length; i++) {
        ctx.drawImage(trees[i].tree, trees[i].x, trees[i].y, 20, 20);
    }
}

let trees = [];
for (let i = 0; i < treeSpots.length; i++) {
    trees.push(treeMaker(treeSpots[i]));
}

// Player generation
const player = new Image();
player.src = '../images/Untitled21_20250218212022.png';
let playerX = 0;
let playerY = 60;
player.onload = function() {
    ctx.drawImage(player, playerX, playerY, 20, 20);
    drawTrees()
}

// Player movement
document.addEventListener('keydown', (event) => {
    const speed = 10;

    // Normal movement
    if (event.key == 'w' || event.key == 'ArrowUp') {
        ctx.clearRect(0, 0, screen.width, screen.height);
        playerY > 0 ? playerY -= speed : 0;
    }
    if (event.key == 'a' || event.key == 'ArrowLeft') {
        ctx.clearRect(0, 0, screen.width, screen.height);
        playerX > 0 ? playerX -= speed : 0;
    }
    if (event.key == 's' || event.key == 'ArrowDown') {
        ctx.clearRect(0, 0, screen.width, screen.height);
        playerY < screen.height - 20 ? playerY += speed : playerY = screen.height - 20;
    }
    if (event.key == 'd' || event.key == 'ArrowRight') {
        ctx.clearRect(0, 0, screen.width, screen.height);
        playerX < screen.width - 20 ? playerX += speed : playerX = screen.width - 20;
    }

    // 'New' area
    // Going up
    if (playerX < 240 && playerX > 150 && playerY <= 0)
        playerY = screen.height - 20;
    // Going down (works)
    else if (playerX < 240 && playerX > 150 && playerY == screen.height - 20)
        playerY = 0;
    // Going left
    if (playerX == 0) {
        playerX = screen.width - 20;
    }
    // Going right (works)
    else if (playerX == screen.width - 20)
        playerX = 0;
    ctx.drawImage(player, playerX, playerY, 20, 20);
    drawTrees();
});
