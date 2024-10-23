import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLSelectElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// listTemplate Instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number] = [
    toFrom.value,
    details.value,
    amount.valueAsNumber,
  ];

  let doc: HasFormatter;
  if (type.value === "invoice") doc = new Invoice(...values);
  else doc = new Payment(...values);

  list.render(doc, type.value, "end");
});

// PRACTICES
// GENERICS
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "yoshi", age: 20 });

console.log(docOne);

// with interfaces
interface Resources<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}

// ENUM
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
}

const docTwo: Resources<object> = {
  uid: 1,
  resourceName: ResourceType.BOOK,
  data: { name: "shaun" },
};

const docThree: Resources<object> = {
  uid: 1,
  resourceName: ResourceType.DIRECTOR,
  data: { name: "shaun" },
};

const docFour: Resources<string[]> = {
  uid: 2,
  resourceName: ResourceType.FILM,
  data: ["hi"],
};

console.log(docTwo, docThree, docFour);

// tuples
let arr = ["ryu", 25, true];

let tup: [string, number, boolean] = ["ryu", 25, true];
