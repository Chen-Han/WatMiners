# WatMiners

Project Requirements are listed as the follows: 
* students login using Waterloo's Quest credentials, website provides backend integration with CAS
* a database that links JobID to the job description on jobmine, please refer to Waterloo's Open Data API to see if this is feasible
* we may allow students to enter the jobs they applied for (jobID and ranking) ONLY ONCE, this is to prevent frequent changing of their ranking information that messes around other people, however, they are allowed to change their preferences any time
* we will be displaying all candidates' questID rather than their real name, since that's the only information we can get from Waterloo's CAS system. students are encouraged to email other candidates to discuss about their own decisions
* Frontend Workflow: 
** student login -> student enter their jobID, job rankings and their own preferences with number 1 - 9, if they have already done so, jump to the next step -> a simple interface that displays all candidates who applied to the same job as the user, and their ranking and preference info

ADVANCED FEATURE: 
* spam detection and report. people may peek at others job application by entering jobID for the job they never applied to, we can develop a "report" button that allows other students to report such a person
* encourage others to share their ranking: uses Facebook API or email to encourage people to share their info. since every student knows the list of people who applied the same job, one can enter those names to invite them to WatMiners
