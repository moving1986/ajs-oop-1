import Character from '../Character';
import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';


test('check name', () => {
    const names = "Alex";
    const obj = new Bowman(names);

    expect(obj.name).toBe(names);
});

test('check name', () => {
    const names = "Diana";
    const obj = new Zombie(names);

    expect(obj.name).toBe(names);
});

test('check type', () => {
    const obj = new Swordsman("Arthur");

    expect(obj.type).toBe('Swordsman');
});

test('check type', () => {
    const obj = new Daemon("Dima");

    expect(obj.type).toBe('Daemon');
});

test('check defence', () => {
    const obj = new Undead("Jora");

    expect(obj.defence).toBe(25);
});

test('check default health and level', () => {
    const obj = new Magician("Merlin");

    expect(obj.health).toBe(100);
    expect(obj.level).toBe(1);
});

test('check attack and defence for Bowman', () => {
    const obj = new Bowman("Robin");

    expect(obj.attack).toBe(25);
    expect(obj.defence).toBe(25);
});

test('check invalid name', () => {
    expect(() => new Bowman("A")).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
});

test('check invalid type', () => {
    expect(() => new Character("ValidName", "Warrior")).toThrow('Тип должен быть строкой одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
});


