class ArkanoidController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        document.addEventListener('keydown', this.handleKeydown.bind(this));
    }

    handleKeydown(event) {
        if (event.key === 'ArrowLeft') {
            this.model.movePaddle('left');
        } else if (event.key === 'ArrowRight') {
            this.model.movePaddle('right');
        }

        this.view.render();
    }

    startGame() {
        this.view.render();
    }
}

export { ArkanoidController };
