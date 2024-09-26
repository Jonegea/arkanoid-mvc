class ArkanoidModel {
    constructor() {
        this.canvasWidth = 600;
        this.canvasHeight = 400;
        this.paddleWidth = 80;
        this.paddleHeight = 10;
        this.paddleY = this.canvasHeight - 20;
        this.paddleX = (this.canvasWidth - this.paddleWidth) / 2;
        this.paddleSpeed = 20;
    }

    movePaddle(direction) {
        if (direction === 'left' && this.paddleX > 0) {
            this.paddleX -= this.paddleSpeed;
        } else if (direction === 'right' && this.paddleX < this.canvasWidth - this.paddleWidth) {
            this.paddleX += this.paddleSpeed;
        }
    }

    getPaddlePosition() {
        return { x: this.paddleX, y: this.paddleY, width: this.paddleWidth, height: this.paddleHeight };
    }
}

export { ArkanoidModel };
