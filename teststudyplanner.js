const {
    addSession,
    listTodaysSessions,
    sessionCountdown,
    fetchStudyMaterials
} = require('./study.js');

addSession("Math", new Date("2025-01-18T10:00:00"), 60);
addSession("Science", new Date("2025-01-18T14:00:00"), 90);
addSession("History", new Date("2025-01-19T16:00:00"), 45);


listTodaysSessions();


sessionCountdown();

(async () => {
    try {
        const materials = await fetchStudyMaterials("Math");
        console.log(materials);
    } catch (error) {
        console.error("Error fetching study materials:", error.message);
    }
})();
