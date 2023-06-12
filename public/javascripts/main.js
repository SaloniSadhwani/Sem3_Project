window.codeLanguage = "python3";

async function runCode()
{
    let codeLanguage = "";
    let langVersion = ""; // Not that necessary.
    let code = "";

    codeLanguage = window.codeLanguage;
    code = document.querySelector("#code-text").value;

    let data = {codeLanguage, code};
    console.log(data);

    let output = await getOutput(data)

    document.querySelector("#opt").textContent = output;
}

async function getOutput(body)
{
    return fetch("/api",{ body ,method: "POST"})
        .then(data=>{return data.json()})
        // .then(res => {document.getElementById("opt").textContent = res })
        .catch(error=>console.log(error))
}