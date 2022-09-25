// structural vs. nomonal typing

class Fox {
  legs = 4;
}
class Horse {
  legs = 4;
}

// works because of structural typing
const myHorse: Fox = new Horse();

// is something a subtype of something else?
// helper function
type IsSubtype<T, U> = T extends U ? true : false;

type Dog = { name: string; nLegs: 4 };

type Poodle = { name: string; nLegs: 4; fur: "curly" };

type IsPoodleSubtypeOfDog = IsSubtype<Poodle, Dog>;

// can lead to problems

type Vec2D = { a: number; b: number };

type Vec3D = { a: number; b: number; c: number };

function getLength(v: Vec2D) {
  return Math.sqrt(v.a ** 2 + v.b ** 2);
}

const myVec3D: Vec3D = { a: 1, b: 2, c: 3 };

// not the correct length
getLength(myVec3D);

type isVec3DSubtypeOfVec2D = IsSubtype<Vec3D, Vec2D>;

type Test2 = IsSubtype<Vec2D, Vec3D>;
