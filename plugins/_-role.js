const roles = {
    /*
    'Role Name': <Minimal Level To Obtain this Role>
    */
    'Blood Circulation Realm V': 0,
    'Blood Circulation Realm IV': 5,
    'Blood Circulation Realm III': 10,
    'Blood Circulation Realm II': 15,
    'Blood Circulation Realm I': 20,
    'Heavenly Passage Realm V': 25,
    'Heavenly Passage Realm IV': 30,
    'Heavenly Passage Realm III': 35,
    'Heavenly Passage Realm II': 40,
    'Heavenly Passage Realm I': 45,
    'Spirit Transformation Three Realms V': 50,
    'Spirit Transformation Three Realms IV': 55,
    'Spirit Transformation Three Realms III': 60,
    'Spirit Transformation Three Realms II': 65,
    'Spirit Transformation Three Realms I': 70,
    'Engravement Realm V': 75,
    'Engravement Realm IV': 80,
    'Engravement Realm III': 85,
    'Engravement Realm II': 90,
    'Engravement Realm I': 95,
    'Formation Arrangement Realm V': 100,
    'Formation Arrangement Realm IV': 105,
    'Formation Arrangement Realm III': 110,
    'Formation Arrangement Realm II': 115,
    'Formation Arrangement Realm I': 120,
    'Supreme Realm V': 125,
    'Supreme Realm IV': 130,
    'Supreme Realm III': 135,
    'Supreme Realm II': 140,
    'Supreme Realm I': 145,
    'Divine Flame Realm V': 150,
    'Divine Flame Realm IV': 155,
    'Divine Flame Realm III': 160,
    'Divine Flame Realm II': 165,
    'Divine Flame Realm I': 170,
    'Divine Flame Realm': 175,
    'True Self Realm V': 180,
    'True Self Realm IV': 185,
    'True Self Realm III': 190,
    'True Self Realm II': 195,
    'True Self Realm I': 200,
    'Immortal Emperor': 99999
}

export function before(m) {
        let user = db.data.users[m.sender]
        let level = user.level
        let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
        user.role = role
        return !0
    
}