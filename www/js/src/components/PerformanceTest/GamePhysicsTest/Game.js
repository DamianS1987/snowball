import Matter from 'matter-js';

class Game {
	constructor() {
		console
	}

	start() {
		// module aliases
		var Engine = Matter.Engine,
			Render = Matter.Render,
			World = Matter.World,
			Bodies = Matter.Bodies,
			Body = Matter.Body,
			Constraint = Matter.Constraint,
			MouseConstraint = Matter.MouseConstraint,
			Events = Matter.Events,
			Mouse = Matter.Mouse;

		// create an engine
		var engine = Engine.create();

		// create a renderer
		var render = Render.create({
			element: document.body,
			engine: engine
		});

		// create two boxes and a ground
		var boxA = Bodies.circle(400, 200, 80, 80);
		var boxB = Bodies.circle(450, 50, 80, 80);
		var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

		var mouseConstraint = MouseConstraint.create(engine,{ mouse: Mouse.create(document.querySelector('canvas')) });

		//constrains
		Events.on(mouseConstraint, "mousedown", function(e) {
			console.log('event: ', e, this);
		});

		// add all of the bodies to the world
		World.add(engine.world, [mouseConstraint, boxA, boxB, ground]);

		// run the engine
		Engine.run(engine);

		// run the renderer
		Render.run(render);
	}

}

export default Game;