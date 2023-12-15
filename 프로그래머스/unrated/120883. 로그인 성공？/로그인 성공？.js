function solution(id_pw, db) {

    for(let i=0; i<db.length; i++) {
        const [id, pass] = db[i];
        if(id_pw[0] == id && id_pw[1] == pass) {
            return 'login';
        }else if(id_pw[0] == id && id_pw[1] != pass) {
            return 'wrong pw';
        }
    }
    return 'fail'
}