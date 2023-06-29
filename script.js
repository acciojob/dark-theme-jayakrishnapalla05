//your code here
function swapTheme(){
	const app=document.getElementById("app");
	const swap=document.getElementById("swap");

	if(app.classList.value === "day")
	{
		app.classList.remove("day");
		app.classList.add("night");

		swap.classList.remove("button_day");
		swap.classLsit.add("button_night");
	}
	else
	{
		app.classList.remove("night");
		app.classList.add("day");

		swap.classList.remove("button_night");
		swap.classLsit.add("button_day");
		
	}
}
swapTheme();

