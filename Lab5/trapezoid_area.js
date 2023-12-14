function appendTrapezoidArea(side1, side2, h)
{
    let area = ((side1 + side2) / 2) * h;
    let areaParagraph = document.createElement("p");
    areaParagraph.append("Площа трапеції: " + area);
    areaParagraph.id = "area-paragraph";
    div5.append(areaParagraph);
    // console.log(area);
}

let firstSide = 10;
let secondSide = 20;
let height = 5;
appendTrapezoidArea(firstSide, secondSide, height);

let hr = document.createElement("hr");
hr.style.width = "100%";
hr.style.height = "1px";

div5.append(hr);

