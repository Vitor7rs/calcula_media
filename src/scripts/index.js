const tasks = [];
const grades = [];
let avg = -1;
loadResults();

function loadResults() {
	let finalAvg = avg !== -1 && !isNaN(avg) ? avg : "--";
	const tableResult = document.querySelector("#resultsTable");
	let results = "";
	let final =
		finalAvg >= 7 && !isNaN(avg)
			? "Aprovado"
			: finalAvg < 7 && !isNaN(avg)
			? "Reprovado"
			: "---";

	for (let i = 0; i < tasks.length; i++) {
		let emoji = grades[i] >= 7 ? "aprovado" : "reprovado";
		results =
			results +
			`
        <tr class="taskResult">
	        <td style="width: 50%">${tasks[i]}</td>
	        <td style="width: 20%">${grades[i]}</td>
	        <td style="width: 30%">
		        <img src="src/images/${emoji}.png" alt="" />
	        </td>
        </tr>`;
	}

	tableResult.innerHTML = `
                    <tr class="resultsTitles">
						<td style="width: 50%"><h3>Nome da atividade</h3></td>
						<td style="width: 20%"><h3>Nota</h3></td>
						<td style="width: 30%"><h3>Aprovado?</h3></td>
					</tr>
					${results}
					<tr class="finalResult">
						<td style="width: 50%">Média Final</td>
						<td style="width: 20%">${finalAvg}</td>
						<td style="width: 30%"><div class="${final}"><h3>${final}</h3></div></td>
					</tr>
    `;
}

function main() {
	let task = document.querySelector("#inputTask").value;
	let grade = document.querySelector("#inputGrade").value;

	if (task !== "" && grade !== "") {
		tasks.push(task);
		grades.push(grade);
	}

	//media calculator
	avg = avgCalc(grades);

	//reset form
	if (task && grade) document.getElementById("inputForm").reset();

	//load screen
	loadResults();
}

function avgCalc(grades) {
	let sum = 0;
	for (let i = 0; i < grades.length; i++) {
		sum += parseFloat(grades[i]);
	}
	return sum / grades.length;
}
