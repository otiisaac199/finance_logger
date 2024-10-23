import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// listTemplate Instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values = [
        toFrom.value,
        details.value,
        amount.valueAsNumber,
    ];
    let doc;
    if (type.value === "invoice")
        doc = new Invoice(...values);
    else
        doc = new Payment(...values);
    list.render(doc, type.value, "end");
});
// PRACTICES
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "yoshi", age: 20 });
console.log(docOne);
// ENUM
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
const docTwo = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: { name: "shaun" },
};
const docThree = {
    uid: 1,
    resourceName: ResourceType.DIRECTOR,
    data: { name: "shaun" },
};
const docFour = {
    uid: 2,
    resourceName: ResourceType.FILM,
    data: ["hi"],
};
console.log(docTwo, docThree, docFour);
// tuples
let arr = ["ryu", 25, true];
let tup = ["ryu", 25, true];
