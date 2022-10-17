/*
Two classes have a time conflict if they meet in the same term, have at least one day in common, 
and their timespans overlap. A class meeting time is either the empty string or a meeting string 
like MWF 9:00-9:50 or TuTh 14:00-15:20. Any non-empty subset of days is possible. No day appears twice. 
The start time is always strictly less than the ending time. Times run from 0:00 to 23:59. 
Classes with an empty meeting string never have a time conflict.
*/

//TODO: Selectable if and only if no conflict
export const catchTimeConflicts = (course, selectedCourses) => {
    console.log(course)
    let potentialConflicts = selectedCourses.filter(c => c.term === course.term)
    console.log(potentialConflicts)
    if (potentialConflicts) {//If in same term

        if (isSameDay(course, potentialConflicts)) {//Have at least one day in common if any in first substring match
            if (isSameTime(course, potentialConflicts)) {
                return true;
            }
        }
    }
    return false
}
const isSameTime = (course, potentialConflicts) => {
    var times = potentialConflicts.map(c => c.meets.split(' ')[1])
    var t = course.meets.split(' ')[1]
    return hasOverlap(t,times)
}
const hasOverlap = (time, times) => {
    var timeRange = time.split(':')
    return times.some(t => t.split(':').some( val => timeRange[0] <= val 
                                                    && val <= timeRange[1]))
}
const isSameDay = (course, potentialConflicts) => {
    var days = potentialConflicts.map(c => c.meets.split(' ')[0])
    var d = course.meets.split(' ')[0].split('')
    return d.some(ch => days.some(day => day.indexOf(ch) !== -1))
}