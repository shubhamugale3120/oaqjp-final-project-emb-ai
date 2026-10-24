function RunSentimentAnalysis() {
    const textInput = document.getElementById("textToAnalyze");
    const resultDiv = document.getElementById("system_response");
    const textToAnalyze = textInput.value.trim();

    if (!textToAnalyze) {
        resultDiv.innerHTML = "Invalid text! Please try again!";
        return;
    }

    fetch(
        "/emotionDetector?textToAnalyze=" +
        encodeURIComponent(textToAnalyze)
    )
        .then(async (response) => {
            const data = await response.text();

            if (!response.ok) {
                throw new Error(data || "Unable to analyze the text.");
            }

            return data;
        })
        .then((data) => {
            resultDiv.innerHTML = data;
        })
        .catch((error) => {
            resultDiv.innerHTML = error.message;
        });
}