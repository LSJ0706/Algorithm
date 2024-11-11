function solution(bandage, health, attacks) {
    var answer = 0;
    const [cool, heal, adHeal] = bandage;
    let [success, maxHealth, cnt, idx] = [0,health,1,0];
    
    while(cnt <= attacks[attacks.length-1][0]) {
        const [attackTime, damage] = attacks[idx];
        
        if(cnt === attackTime) {
            if(health - damage <= 0) {
                health = -1;
                break;
            }
            else {
                health -= damage;
                success = 0;
                idx++;
            }
        }
        else {
            health += heal;
            success++;
            if(cool === success) {
                success = 0;
                health += adHeal;
            }
        }
        if(health > maxHealth) health = maxHealth;
        cnt++;
    }
    return health;
}