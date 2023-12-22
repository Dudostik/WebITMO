// Получение данных из формы и добавление в таблицу
// Загрузка данных из LocalStorage и добавление в таблицу

window.addEventListener("load", function() {
    let table = document.getElementById('ch_table_head');
    let template = document.getElementById('characteristicsTemplate');

// Получение данных из формы и добавление в список
    function addCharacteristics(event) {
        event.preventDefault();

        let comfort = document.getElementById("comfort").value;
        let cushioning = document.getElementById("cushioning").value;
        let traction = document.getElementById("traction").value;
        let materials = document.getElementById("materials").value;
        let safety = document.getElementById("safety").value;

        let pattern = /^\d+$/

        console.log(pattern.test(comfort));

        if (!(pattern.test(comfort) & pattern.test(cushioning) & pattern.test(materials) & pattern.test(traction) & pattern.test(safety))) {
            alert("В поля введены не числа");
        }
        else if (comfort >= 0 & comfort <= 100 & cushioning >= 0 & cushioning <= 100 & traction >= 0 & traction <= 100 & materials >= 0 & materials <= 100 & safety >= 0 & safety <= 100) {
            let characteristics = {
                comfort,
                cushioning,
                traction,
                materials,
                safety
            };

            let characteristicsList = JSON.parse(localStorage.getItem("characteristicsList")) || [];
            characteristicsList.push(characteristics);
            localStorage.setItem("characteristicsList", JSON.stringify(characteristicsList));
        }
        else {
            alert("В поля должны быть введены целые числа от 0 до 100");
        }
        displayCharacteristics();
    }

    function displayCharacteristics() {
        let characteristicsList = JSON.parse(localStorage.getItem("characteristicsList")) || [];
        
        if (table.children.length != 0) {
            while (table.firstChild) {
                if (table.children.length == 1) {
                    break;
                }
                table.removeChild(table.lastChild);
            }
        }

        for (let i = 0; i < characteristicsList.length; i++) {

            let сlonedNode = template.content.cloneNode(true);
            let td = сlonedNode.querySelectorAll("td");

            let comfort_val = characteristicsList[i].comfort;
            let cushioning_val = characteristicsList[i].cushioning;
            let traction_val = characteristicsList[i].traction;
            let materials_val = characteristicsList[i].materials;
            let safety_val = characteristicsList[i].safety;
            let result_val = (Number(comfort_val) + Number(cushioning_val) + Number(traction_val) + Number(materials_val) + Number(safety_val))/5;

            td[0].textContent  = comfort_val;
            td[1].textContent  = cushioning_val;
            td[2].textContent  = traction_val;
            td[3].textContent  = materials_val;
            td[4].textContent  = safety_val;
            td[5].textContent = result_val;

            table.appendChild(сlonedNode);

        }
    }

    document.getElementById("characteristicsForm").addEventListener("submit", addCharacteristics);
    document.getElementById("characteristicsForm").addEventListener("submit", clearOutput);
    displayApartments();

    function clearOutput() {
        document.getElementById("comfort").value = "";
        document.getElementById("cushioning").value = "";
        document.getElementById("traction").value = "";
        document.getElementById("materials").value = "";
        document.getElementById("safety").value = "";
    }

    function checkString(string){
        if(typeof string === "string"){
            return isNaN(string);
        } 
    }
});