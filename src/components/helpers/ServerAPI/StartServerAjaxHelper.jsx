import $ from "jquery";

class StartServerAjaxHelper {
    static async post(apiKey) {
        return await $.ajax({
            type: "POST",
            url: "https://03hnoouy54.execute-api.eu-west-2.amazonaws.com/live/start-ec2-instance",
            data: "",
            beforeSend: (xhr) => { xhr.setRequestHeader("x-api-key", apiKey); }
        }).then(
            (result) => { return result; },
            (result) => { return result; }
        );
    }
}

export default StartServerAjaxHelper;