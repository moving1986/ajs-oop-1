export default class Character {
    constructor(name, type) {
        this.name = this.checkName(name);
        this.type = this.checkType(type);
        this.health = 100;
        this.level = 1;
        this.attack = 0;
        this.defence = 0;
    }

    checkName(name) {
        if (typeof (name) !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть строкой длиной от 2 до 10 символов');
        }
        return name;
    }

    checkType(type) {
        const valTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (typeof (type) !== 'string' || !valTypes.includes(type)) {
            throw new Error('Тип должен быть строкой одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
        }
        return type;
    }
}