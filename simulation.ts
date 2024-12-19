class Particle {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;

  constructor(x: number, y: number, velX: number, velY: number) {
    this.x = x;
    this.y = y;
    this.velocityX = velX;
    this.velocityY = velY;
  }

  move() {
    this.x += this.velocityX;
    this.y += this.velocityY;
  }

  getPosition() {
    return { x: this.x, y: this.y };
  }
}

class Simulation {
  particle: Particle;
  boundaryX: number;
  boundaryY: number;

  constructor(pat: Particle, x: number, y: number) {
    this.particle = pat;
    this.boundaryX = x;
    this.boundaryY = y;
  }

  run(steps: number) {
    const array: Array<{ x: number; y: number }> = [];

    for (let i = 0; i < steps; i++) {
      this.particle.move();

      if (
        this.particle.x > this.boundaryX ||
        this.particle.y > this.boundaryY
      ) {
        break;
      }

      array.push(this.particle.getPosition());
    }

    return array;
  }
}

function main() {
  const initialX = 0;
  const initialY = 0;
  const velocityX = 1;
  const velocityY = 1;
  const boundaryX = 10;
  const boundaryY = 10;
  const steps = 15;

  const particle = new Particle(initialX, initialY, velocityX, velocityY);
  const simulation = new Simulation(particle, boundaryX, boundaryY);
  const result = simulation.run(steps);
  console.log(result);
}

main();
