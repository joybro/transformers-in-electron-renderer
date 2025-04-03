import "./index.css";
import { run } from "./model";

const inputElement = document.getElementById("text");
const outputElement = document.getElementById("output");

// 1. Send input data to the worker thread when it changes.
inputElement.addEventListener("input", async (event) => {
    // 2. Await the result from the worker thread.
    const result = await run((event.target as HTMLInputElement).value);

    // 3. Update the UI.
    outputElement.innerText = JSON.stringify(result, null, 2);
});
