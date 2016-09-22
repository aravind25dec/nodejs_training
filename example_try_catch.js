
function doWork(){
	throw new Error('Unable to do the job');
}

try
{
doWork();
//throw new Error('Unable to do the job');
} catch(e) {
console.log(e.message);
} finally {
console.log('finally block executed');
}
console.log('try catch ended');
