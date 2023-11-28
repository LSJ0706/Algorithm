function solution(bandage, health, attacks) {
    let MaxHealth = health;
    let tempTime = 0;
    const [channeling, healing, bonus] = bandage
    for(let [time, attack] of attacks) {
        const timeDiff= time - tempTime -1
        health += timeDiff*healing + Math.floor(timeDiff/channeling)*bonus;
        
        if(health > MaxHealth) health = MaxHealth;
        health -= attack;
        if(health <= 0) return -1
        tempTime = time;
    }
    return health;
}