const studySessions = [];
function addSession(topic, sessionTime, duration) {
    try {
        if (!topic) {
            throw new Error("Topic cannot be empty.");
        }
        if (!(sessionTime instanceof Date) || isNaN(sessionTime)) {
            throw new Error("Invalid session time.");
        }
        if (typeof duration !== 'number' || duration <= 0) {
            throw new Error("Duration must be a positive number.");
        }
        studySessions.push({ topic, sessionTime, duration });
        console.log("Study session added successfully!");
    } catch (error) {
        console.error("Error adding session:", error.message);
    }
}
function listTodaysSessions() {
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    const todaysSessions = studySessions.filter(session => 
        session.sessionTime >= startOfDay && session.sessionTime <= endOfDay
    );

    console.log("Today's Study Sessions:");
    if (todaysSessions.length === 0) {
        console.log("No study sessions scheduled for today.");
    } else {
        todaysSessions.forEach(session => {
            console.log(
                `Topic: ${session.topic}, Time: ${session.sessionTime.toLocaleString()}, Duration: ${session.duration} minutes`
            );
        });
    }
}
function sessionCountdown() {
    const now = new Date();
    studySessions.forEach(session => {
        const timeUntilSession = session.sessionTime - now;

        if (timeUntilSession > 0) {
            setTimeout(() => {
                console.log(`Session on ${session.topic} starts now!`);
            }, timeUntilSession);
        }
    });
}

async function fetchStudyMaterials(topic) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (topic) {
                resolve(`Study materials for ${topic} are ready!`);
            } else {
                reject(new Error("No topic provided for fetching materials."));
            }
        }, 2000);
    });
}
module.exports = {
    addSession,
    listTodaysSessions,
    sessionCountdown,
    fetchStudyMaterials
};
