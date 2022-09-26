function highlight(table) {
    for (const iterator of table.rows) {
        switch (iterator.cells[3].getAttribute("data-available")) {
            case "true":
                iterator.classList.add("available")
                continue;
            case 'false':
                iterator.classList.add("unavailable")
                continue;
            case false:
                iterator.hidden = true;
            default:
                iterator.setAttribute('hidden', 'hidden')
        }
        if (iterator.cells[1].innerHTML < 18) {
            iterator.style = "text-decoration: line-through"
        };

        if (iterator.cells[2].innerHTML == "m") {
            iterator.classList.add("male");
        };
        if (iterator.cells[2].innerHTML == "f") {
            iterator.classList.add("female");
        };
        console.log(iterator.cells[2].class)
    }
}


