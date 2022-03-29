const DATE_RANGE = {
    'yesterday': createDateRange("yesterday"),
    'lastWeek': createDateRange("lastWeek"),
    'lastMonth': createDateRange("lastMonth")
}
function createDateRange(dateRange) {
    switch (dateRange) {
        case "lastMonth":
            {
                const myDate = new Date();
                const firstDate = new Date(
                    myDate.getFullYear(),
                    myDate.getMonth() - 1,
                    1
                );
                const lastDate = new Date(
                    myDate.getFullYear(),
                    myDate.getMonth(),
                    0
                );
                return {
                    from: firstDate,
                    to: lastDate,
                };
            }
        case "lastWeek":
            {
                const now = new Date();

                const lastWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
                return {
                    to: now,
                    from: lastWeek,
                };
            }
        case "yesterday": {
            const startOfDay = new Date();
            startOfDay.setDate(startOfDay.getDate() - 1)


            startOfDay.setHours(0, 0, 0, 0);

            const endofDay = new Date();
            endofDay.setDate(endofDay.getDate() - 1)
            endofDay.setHours(23, 59, 59, 999);




            return {
                from: startOfDay,
                to: endofDay,
            };
        }
        default:
            return {}
        // return {
        //     to: lastDayOfTheYear.toISOString(),
        //     from: firstDayOfTheYear.toISOString(),
        // };
    }
}
function checkDateInRange(date, startDate, endDate) {
    const today = new Date(date).getTime(); // 1501653935994
    const from = new Date(startDate).getTime(); // gives 1486492200000
    const to = new Date(endDate).getTime();

    return today >= from && today <= to
}
export function getStoriesInRange(stories) {

    stories
    const result = {}
    for (const key in DATE_RANGE) {
        const { from, to } = DATE_RANGE[key]
        result[key] = stories.filter(story => {

            return checkDateInRange(story.createdAt, from, to)
        })
    }

    return result
}
