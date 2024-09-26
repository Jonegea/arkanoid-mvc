import { ArkanoidModel } from './ArkanoidModel.js';
import { ArkanoidView } from './ArkanoidView.js';
import { ArkanoidController } from './ArkanoidController.js';

function main() {
    let model = new ArkanoidModel();
    let view = new ArkanoidView(model);
    let controller = new ArkanoidController(model, view);

    document.body.appendChild(view.canvas);

    // Iniciar el bucle del juego
    controller.startGame();
}

window.onload = main;

export { main };
