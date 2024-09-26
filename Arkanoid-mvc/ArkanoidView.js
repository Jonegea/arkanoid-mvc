class ArkanoidView {
    constructor(model) {
        this.model = model;

        this.canvas = document.createElement('canvas');
        this.canvas.width = this.model.canvasWidth;
        this.canvas.height = this.model.canvasHeight;
        this.ctx = this.canvas.getContext('2d');
    }

    drawPaddle(paddle) {
        this.ctx.fillStyle = 'lightblue';
        this.ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.model.canvasWidth, this.model.canvasHeight);
    }

    render() {
        this.clearCanvas();
        this.drawPaddle(this.model.getPaddlePosition());
    }
}

export { ArkanoidView };
